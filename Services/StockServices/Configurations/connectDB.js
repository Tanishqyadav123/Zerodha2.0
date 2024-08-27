const mongoose = require("mongoose")

const connectDB = async () =>{
     try {
         await mongoose.connect(`${process.env.MONGO_URI}`)
         .then((value) =>{
             console.log("Database of services connected SuccessFully ")
         })
     }
     catch (error){
         console.log(`Something went wrong while connecting with DataBase : ${error}`)
     }
}


module.exports = connectDB