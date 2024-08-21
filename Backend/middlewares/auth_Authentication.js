const jwt = require("jsonwebtoken");
const handleError = require("../utils/handleError");
const handleUnknownError = require("../utils/handleUnknownError");
const userModel = require("../models/userModel");

const authTokenAuthentication = async (req , res , next) =>{
     try {
        
        const ZerodhaAuth = req.cookies.ZerodhaAuth;

        if (!ZerodhaAuth){
             return next(handleError(res , 402 , "UnAuthorisd Access Denied"))
        }

        const decoded = jwt.verify(ZerodhaAuth , process.env.JWT_SECRET)
        req.user = await userModel.findById(decoded.userId)

        next();

     }
     catch (error) {
         return next (handleUnknownError(res , error.message))
     }
}

module.exports = authTokenAuthentication