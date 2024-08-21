const jwt = require("jsonwebtoken");
const handleError = require("../utils/handleError");
const handleUnknownError = require("../utils/handleUnknownError");
const userModel = require("../models/userModel");

const verifyAuthentication = async (req , res , next) =>{

     try {
           const  ZerodhaVerify = req.cookies.ZerodhaVerify

           if (!ZerodhaVerify){ 
                return next (handleError (res , 402 , "Does not have token"))
           }

           const decoded = jwt.verify(ZerodhaVerify , process.env.JWT_SECRET)
           req.user = await userModel.findById(decoded.userId)
           
            next();
     }
     catch (error) {
         return handleUnknownError(res , error.message)
     }

}

module.exports = verifyAuthentication;