const mongoose = require("mongoose")

const kycSchema = new mongoose.Schema({
     panCardNumber : {
         type : String,
         required : true,
         unique : true
     },
     aadharNumber : {
         type : String,
         required : true,
         unique : true
     },
     selfie :{
         type : String,
         required : true
     }
} , {timestamps : true})

module.exports = mongoose.model ("kyc" , kycSchema)