const handleError = require("../utils/handleError");
const handleUnknownError = require("../utils/handleUnknownError")
const userModel = require("../models/userModel.js");
const handleResponse = require("../utils/handleResponse");
const generateToken = require("../utils/generateJWTToken");
// const sendMail = require("../mailTrap/mailConfig.js");
const {sendNodeMail , sendWelComeMail} = require("../NodeMailer/mailConfig.js");


const registerUser = async (req , res , next) =>{
    
     try {
        
        const {fullName  , email , password} = req.body;

        if (!fullName || !email || !password){
             return next (handleError(res , 400 , "Please Fill All the Fields"))
        }
        console.log(fullName , email , password)

        // Check if user already exist :-
        const userExist = await userModel.findOne({email})

        if (userExist) {
             return next (handleError(res , 400 , "User Already Exist With This Email Id"))
        }

        // Generate OTP for Verification :-
        const verifyToken = Math.floor(Math.random() * 100000) + 100000
        console.log("OTP " , verifyToken) 

        // Create new User :-

        const newUser = await userModel.create({
             fullName,
             email,
             password,
             verifyToken,
             verifyTokenExpiry : Date.now() + 24*60*60*1000
        })
        console.log(newUser)


        if (!newUser){
             return next (handleError(res , 400 , "User Could not registered"))
        }

        const token = generateToken(newUser._id , process.env.JWT_SECRET)

        res.cookie ("ZerodhaToken" , token , {
             maxAge : 7*24*60*60*1000,
             sameSite : "strict",
             secure : false,
             httpOnly : true
        }) ;

        let val =  await sendNodeMail(verifyToken , email )

        if (!val){
          return next (handleError(res , 400 , "Mail could not be sent...Please Again Later"))
           
        }

        return next (handleResponse(res , 201 , "User Registered SuccessFully " , newUser))


     }
     catch(error) {
         return next(handleUnknownError(res , error.message))
     }

}

const verifyUserEmail = async (req , res , next) =>{
     
     try {
          const registeredUser = req.user;
          const {otp} = req.body;
          console.log(registeredUser)

          if (!otp){
                return next (handleError(res , 400 , "Please Fill All OTP Field"))
          }
          console.log("Registered User " , registeredUser)
    
          const isUser = await userModel.findById(registeredUser._id)
          
          if (!isUser){
               return next (handleError(res , 404 , "User not found"))
          }
    
          if (isUser.verifyToken.toString() !== otp || isUser.verifyTokenExpiry < Date.now()){
              //  again send to register page...
              return next (handleError(res , 400 , "OTP Does not Match"))
          }
          
            isUser.isVerified = true;
            isUser.verifyToken = undefined;
            isUser.verifyTokenExpiry = undefined;

            await isUser.save();
           return next (handleResponse(res , 200 , "Email Verified SuccessFully" , isUser)) 
    
     }
     catch (error) {
           return next (handleUnknownError(res , error.message))
     }


}

const getUser = async (req , res , next) =>{
        try {
            return next(handleResponse(res , 200 , "Got User" , req.user ))
        } catch (error) {
          return next (handleUnknownError(res , error.message))

        }
}

const loginUser = async (req , res , next) =>{
     
      try {
          
          const {email , password} = req.body;

          if (!email || !password){
                return next (handleError(res , 400 , "Please Fill all the fields"))
          }
          
          // Check if user Exist or not :-
          const userExist = await userModel.findOne({
               email
          })

          if (!userExist){
                return next (handleError(res , 404 , "Please Register First"))
          }

          // Check if verified or not :-
          if ( typeof userExist.isVerified === 'boolean' && userExist.isVerified == false  ){
                   console.log("not Verified")
               //  Generate OTP :-
                const verifyToken = Math.floor(Math.random() * 100000) + 100000;

                userExist.verifyTokenExpiry = Date.now() + 24*60*60*1000
                userExist.verifyToken = verifyToken

                await userExist.save();

               //  Generate the register Token :-

               const token = generateToken(userExist._id , process.env.JWT_SECRET)

               let val =  await sendNodeMail(verifyToken , email )

               if (!val){
                 return next (handleError(res , 400 , "Mail could not be sent...Please Again Later"))
                  
               }
               res.cookie ("ZerodhaToken" , token , {
                    maxAge : 7*24*60*60*1000,
                    sameSite : "strict",
                    secure : false,
                    httpOnly : true
               }) ;

                return next (handleError(res , 400 , "Please Verify your email first"))
          }

          else {
               //  If user's email is verified :-
               
               // Check for Password :-
               const isMatch = await userExist.comparePassword(password)
               if (!isMatch) {
                     return next (handleError(res , 401 , "Invalid Credentails"))
               }

               // Generate the authToken and Store in the cookies :-
               const authToken = generateToken(userExist._id , process.env.JWT_SECRET)

               res.cookie ("ZerodhaToken" , authToken , {
                    maxAge : 30*24*60*60*1000,
                    sameSite : "strict",
                    secure : false,
                    httpOnly : true
               });

               const mailSent = await sendWelComeMail(email , userExist.fullName)

               
               return next (handleResponse(res , 200 , "User LoggedIn SuccessFully " , userExist))

          }


      }
      catch (error) {
           return next (handleUnknownError(res , error.message))
      }

}

module.exports = {registerUser , verifyUserEmail , getUser , loginUser}