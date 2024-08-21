const express = require("express")
const connectDB = require("./configuration/connectDB")
const dotenv = require("dotenv").config()
const userRouter = require ("./routes/userRouter.js")
const kycRouter = require ("./routes/kycRouter.js")
const cookieParser = require ("cookie-parser")
const cors = require("cors")

const app = express()

// Connecting the Database :-
connectDB()

// Adding Middlewares :-
app.use(cors({
      origin : "http://localhost:5173",
      credentials : true
}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended : true}))



// Adding the Router :-
app.use("/api/v1/user" , userRouter);
app.use("/api/v1/kyc" , kycRouter);



app.listen(8080 , () =>{
     console.log(`Server is running on the port 8080`)
}) 