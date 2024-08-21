const jwt = require("jsonwebtoken")
const handleError = require("../utils/handleError")
const handleUnknownError = require("../utils/handleUnknownError")
const userModel = require("../models/userModel")

const   resetPasswordAuthentication = async (req , res , next) =>{

      try {
 
           const Zerodha_resetPassword = req.cookies.Zerodha_resetPassword
           if (!Zerodha_resetPassword){
             return next (handleError(res , 402 , "Token for Reset Password is not available"))
           }

           const decoded = jwt.verify(Zerodha_resetPassword , process.env.JWT_SECRET)

           req.user = await userModel.findById(decoded.userId)
           next();

      }
      catch (error) {
         return next (handleUnknownError(res , error.message))
      }

}

module.exports = resetPasswordAuthentication