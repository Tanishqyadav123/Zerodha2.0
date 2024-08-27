const kycModel = require("../models/kycModel");
const { kycSuccess } = require("../NodeMailer/mailConfig");
const { uploadOnCloudinary } = require("../utils/Cloudinary");
const handleError = require("../utils/handleError");
const handleResponse = require("../utils/handleResponse");
const handleUnknownError = require("../utils/handleUnknownError");
const { isValidAadhar, isValidPanNumber } = require("../utils/KYCValidation");

const completeKYC = async (req , res , next) =>{
    console.log(req.file)
    
try {
    const {aadharNumber , panCardNumber , birthDate} = req.body;
    const LoggedInUser = req.user;
    console.log("Files ", req.file)

    if (!aadharNumber || !panCardNumber || !birthDate){
         return next (handleError(res , 400 , "Please Provide all details"))
    }

    
    const checkAadharResult = isValidAadhar(Number(aadharNumber))
    if (!checkAadharResult){
         return next (handleError (res , 400 , "Aadhar Card Number is not valid"))
    }
    
    const chechPanResult = isValidPanNumber(panCardNumber)
    if (!chechPanResult){
        return next (handleError (res , 400 , "Pan Card Number is not valid"))
   }

//    From req.files take the selfie image and Upload it to cloudinary
       
      const localFilePath = req.file?.path

       if (!localFilePath){
         return next (handleError(res , 400 , "File for selfie is not provided"))
       }

    //    Upload on Cloudinary :-
    
      const selfieCloudinaryPath = await uploadOnCloudinary(localFilePath)
      
      if (!selfieCloudinaryPath){
        return next (handleError(res , 500 , "File for selfie could not be uploaded due to technical Issue"))
         
      }

    //   Create the KYC :-
    const newKYC = await kycModel.create({
         aadharNumber : aadharNumber.toString(),
         panCardNumber : panCardNumber,
         selfie : selfieCloudinaryPath.url,
         selfie_publicId : selfieCloudinaryPath.public_id,
         birthDate : birthDate
    })

    if (!newKYC){
         return next (handleError(res , 500 , "KYC could not be done...Please Try Again"))
    }
     
    // Send The Mail to the user :- KYC completed 
    
    const mailId = await kycSuccess(LoggedInUser.email , LoggedInUser.fullName)

    if (!mailId){
         return next (handleError(res , 500 , "Mail Could not be sent"))
    }

    // Add the KYC Id into the user Schema :-
    LoggedInUser.kycId = newKYC._id
    LoggedInUser.isKYCCompleted = true;
    await LoggedInUser.save()


    return next (handleResponse(res , 200 , "KYC Completed SuccessFully" , LoggedInUser))

}
catch (error) {
     return next (handleUnknownError(res , error.message))
}
    
}

module.exports = {completeKYC}