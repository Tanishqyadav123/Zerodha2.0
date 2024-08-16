const  mongoose  = require("mongoose")

const connectDB = async() =>{

    try {
        
        await mongoose.connect(process.env.MONGO_URI)
        .then((value) =>{
             console.log(`DataBase Connented SuccessFully`)
        })
        .catch((error) =>{
             console.log(error)
        })

    }
    catch (error) {
         return res.status(500).json({
            success : false,
            message : error.message
         })
    }
     
}

module.exports = connectDB