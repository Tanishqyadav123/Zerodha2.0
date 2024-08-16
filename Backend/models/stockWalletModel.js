const mongoose = require ("mongoose")

const stockWalletSchema =  new mongoose.Schema({
     stockName : {
         type : String
     },
     stockQuantity : {
         type : Number
     },
     investedAmount : {
         type : Number
     },
     currentStockValue : {
         type : Number
     }
} , {timestamps : true})

module.exports = mongoose.model("stockWallet" , stockWalletSchema)