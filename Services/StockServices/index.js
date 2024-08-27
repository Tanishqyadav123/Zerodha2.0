const express = require ("express")
const connectDB = require("./Configurations/connectDB")
require("dotenv").config()
const app = express ()
const stockRouter = require("./Routes/stockRouter")
const timeseriesRouter = require("./Routes/timeSeriesRouter")
const { initializeWebSocketServer } = require("./Configurations/configureWebSocket")
const cors = require("cors")


const PORT = process.env.PORT || 8081
// Connecting the database
connectDB();


app.use(cors({
      origin : "http://localhost:5173",
      credentials : true
}))

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get("/" , function (req , res){
     res.send("hello")
})

// Routes :-

app.use('/api/v1/stock' , stockRouter)
app.use('/api/v1/timeseries' , timeseriesRouter)

const server = app.listen(PORT , () =>{
     console.log(`Server is running on the PORT : ${PORT}`)
})

initializeWebSocketServer(server)





