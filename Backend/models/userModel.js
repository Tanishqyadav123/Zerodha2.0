const mongoose = require("mongoose")
const bcrypt = require ("bcrypt")
const userSchema = new mongoose.Schema({
    
      fullName : {
         type : String,
         required : true,
         trim : true
      },
    
      email : {
         type : String,
         required : true,
         trim : true
      }, 
    
      password : {
         type : String,
         required : true,
         trim : true
      },
      phoneNumber : {
         type : Number
      },
      verifyToken : {
         type : String,
      },
      verifyTokenExpiry : {
         type : Date
      },
      resetPasswordToken : {
         type : String,
      },
      resetPasswordTokenExpiry : {
         type : Date
      },
      isVerified : {
         type : Boolean,
         default : false
      },
      kycId : {
         type : mongoose.Schema.Types.ObjectId,
         ref : "kyc"
      },
      isKYCCompleted : {
         type : Boolean,
         default : false
      },
      bankId : {
         type : mongoose.Schema.Types.ObjectId,
         ref : "bank"
      },
      walletId : {
         type : mongoose.Schema.Types.ObjectId,
         ref : "wallet"
      },
      stockWalletId : {
         type : mongoose.Schema.Types.ObjectId,
          ref : "stockWallet"
      }
      

} , {timestamps : true})

userSchema.pre("save" , async function (next) {
     if (this.isModified("password")){
        this.password =  await bcrypt.hash(this.password , 10)
     }
     next();
})


userSchema.methods.comparePassword = async function (enteredPassword) {
    
    return await bcrypt.compare(enteredPassword , this.password)


}


module.exports = mongoose.model("user" , userSchema)

