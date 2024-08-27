const timeSeries = require("../Models/timeSeries")

const getHistoricalData =  async(req , res , next) =>{
    
    try {
         const {symbolName} = req.params;
         const allData = await timeSeries.find({symbol : symbolName})

         if (!allData){
            return res.status(400).json({
                success : false,
                message : "Data Could not found"
            })
         }

         let modifiedData = allData.map((elem , index) =>{
             return {
                 x : new Date(elem.timestamp),
                 y : [elem.open , elem.high , elem.low , elem.close]
             }
         })

         

         return res.status(200).json({
            success : true,
            message : "Data  found",
            modifiedData
        })

    }
    catch(error){
        
        return res.status(500).json({
            success : false,
            message : error.message
        })

    }
    

}

module.exports = {getHistoricalData}