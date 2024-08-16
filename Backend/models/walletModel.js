const mongoose = require ("mongoose")

const walletSchema = new mongoose.Schema({
     spotWallet : {
         type : Number
     },
     INRWallet : {
         type : Number
     },
     forexWallet : [{
         symbol : String,
         amount : Number
     }],
} , {timestamps : true})

module.exports = mongoose.model("wallet" , walletSchema)