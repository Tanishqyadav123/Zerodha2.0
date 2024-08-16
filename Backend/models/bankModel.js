const mongoose = require ("mongoose")

const bankSchema = new mongoose.Schema({
    
      bankName : {
         type : String,
         required : true
      },
      IFSCCode : {
         type : String,
         required : true
      },
      accountNumber : {
         type : String,
         required : true
      }

} , {timestamps : true})

module.exports = mongoose.model("bank" , bankSchema)