const jwt = require("jsonwebtoken");
const handleError = require("../utils/handleError");
const handleUnknownError = require("../utils/handleUnknownError");
const userModel = require("../models/userModel");

const authentication = async (req , res , next) =>{

     try {
           const  ZerodhaToken = req.cookies.ZerodhaToken

           if (!ZerodhaToken){ 
                return next (handleError (res , 402 , "Does not have token"))
           }

           const decoded = jwt.verify(ZerodhaToken , process.env.JWT_SECRET)
           req.user = await userModel.findById(decoded.userId)
           
            next();
     }
     catch (error) {
         return handleUnknownError(res , error.message)
     }

}

module.exports = authentication;