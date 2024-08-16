const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")

const decodeToken = async (tokenToDecode) =>{
     const decoded = jwt.verify(tokenToDecode , secret)
     const userDetails = await userModel.findById(decoded.userId)

     return userDetails;
}

module.exports = decodeToken