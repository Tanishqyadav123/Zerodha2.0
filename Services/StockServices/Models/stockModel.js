const mongoose = require("mongoose")

const stockSchema = new mongoose.Schema({
     symbol : {
         type : String,
         required : true,
         unique : true
     },
     volume : {
          type : Number,
          required : true
     },
     open : {
        type : Number,
        required : true
     },
     listPrice : {
       type : Number,
       required : true
     },
     close : {
        type : Number,
        required : true
     },
     high : {
        type : Number,
        required : true
     },
     low : {
        type : Number,
        required : true
     },
     price : {
         type : Number,
     },
     randomPriceArr : {
       type : [Number]
     }

} , {timestamps : true})

module.exports = mongoose.model("Allstock" , stockSchema)