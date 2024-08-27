const { getWebSocketServer } = require("../Configurations/configureWebSocket.js")
const stockModel = require("../Models/stockModel")
const  WebSocket = require("ws")
const timeSeries = require("../Models/timeSeries")
const { findHighPrice, findLowPrice } = require("../utils/StockPrice")
const cron = require("node-cron")
const createNewStock = async (req , res, next) =>{
    
    try {
       


        let wss = getWebSocketServer()
 
        
        if (!wss || !wss.clients){
             console.log("WebServer not intialized or CLients are  not connected")
        }
          
        
    
         const {symbol , volume , high , low , open , close , listPrice} = req.body

         if (!symbol || !volume || !listPrice || !high || !low || !open || !close){
             return res.status(400).json({
                 success : false,
                 message : "Please Provide all the data for creating the Stock"
             })
         }

          
          
          

         const newStock = await stockModel.create({
             symbol,
             volume,
             price : listPrice,
             high,
             low,
             open,
             close,
             listPrice
         })

       
        
   
         if (!newStock){
             return res.status(500).json({
                success : false,
                message : "New Stock could not be created"
            })
         }





         return res.status(200).json({
            success : true,
            message : "New Stock Created ",
            newStock
        })
    }
    catch (error){
         return res.status(500).json({
             success : false,
             message : error.message
         })
      
    }

}

const deleteStock = async(req ,res , next) =>{
     try {
  
         const {stockSymbol} = req.params
         if (!stockSymbol){
             return  res.status(400).json({
                success : false,
                message : "Symbol name is not provided"
            })
         }

        //  find the stock by its symbol name and delete it :-
        const deletedOne = await stockModel.findOneAndDelete({symbol : stockSymbol} , {new : true})

        if (!deletedOne){
             return res.status(500).json({
                success : false,
                message : "Stock could not be deleted"
            })
        }
        return res.status(200).json({
            success : true,
            message : "Stock deleted SuccessFully",
            deletedOne
        })

     } 
     catch (error) {
         return  res.status(500).json({
            success : false,
            message : error.message
        })
     }
}

// const updateStock = async (req , res , next) =>{
//      try {
         
//          const wss = getWebSocketServer()

//          if (!wss || !wss.clients){
//             console.log("WebServer not intialized or CLients are  not connected")
//        }


//         const allStocks = await stockModel.find()
//         console.log(allStocks)
        
//         // Fluchuate the stock Pricing after every 10 sec for every 300 sec :-
//         setInterval(() => {
            
//             let innerCnt = 0;
//             let innerIntervalId = setInterval(() =>{
//               console.log("Inside Interval")
//                allStocks.forEach(async (elem , index) =>{
//                 console.log("Element   " , elem)
//                 console.log("Element Price   " , elem.price)
//                 let oldPrice = elem.price
//                 console.log("Old Price" , oldPrice)
                
//                 let newPrice = oldPrice-1 + Math.random() * ((oldPrice+1) - (oldPrice-1));

//                 elem.price = newPrice;
//                 console.log(newPrice)
//                 elem.randomPriceArr.push(newPrice);
//                 console.log("Value appended to the array ")

//                 await elem.save();
//                 wss.clients.forEach((client) => {
//                     if (client.readyState === WebSocket.OPEN) {
//                         client.send(JSON.stringify(elem));
//                     }
//                 });
        
                 
                
                
//             })
            
//             // Send To frontend using webosckets the allStocks data
           
//             innerCnt += 1000

//             if (innerCnt == 19 * 1000){
//                   console.log("Clear Interval")
//                  clearInterval(innerIntervalId)

//             }

//          } , 10 * 1000)

        

//         //  Extract all the low , high , open , close values for each stock
//           setTimeout(() =>{
//             allStocks.forEach(async (elem , index) =>{
//                 // console.log(elem)
//                 elem.open = elem.randomPriceArr[0];
//                 elem.close = elem.randomPriceArr[elem.randomPriceArr.length - 1];
//                 elem.high = findHighPrice(elem.randomPriceArr)
//                 elem.low = findLowPrice(elem.randomPriceArr)
   
//                 elem.randomPriceArr = [];
//                 elem.randomPriceArr.push(elem.open)


   
//                 await elem.save();

//           } )
 
          
          
          
//         }, 195 * 1000)
        
//         let nowTime = Date.now();
//         console.log("Now Time ", nowTime)
//         setTimeout(async () =>{
            
//             allStocks.forEach((elem , index) =>{
//                  elem.timestamp = nowTime;
//             })
//            const data = await timeSeries.insertMany(allStocks)
//            if (data){
//                console.log("Data is Added To timeseries")
//                wss.clients.forEach((client) => {
//                 if (client.readyState === WebSocket.OPEN) {
//                     client.send(JSON.stringify(allStocks));
//                 }
//             });
    
               
//            }
//            else {
//              console.log("Data Could not add")
//            }

           
            
//         } , 298 * 1000)




//     }, 300*1000)


//      }
//      catch (error) {
//          return res.status(500).json({
//              success : false,
//              message : error.message
//          })
//      }
// }


const updateSingleStock = async (elem) =>{
    
    let obj = {...elem};
    console.log(obj)

    

      let val  = Number((elem.price-1) + (Math.random() * ((elem.price+1) - (elem.price-1))))
      elem.price = val;

      elem.randomPriceArr.push(elem.price)
     

    const updatedOne =  await stockModel.findByIdAndUpdate(elem._id , {...elem} , {new : true})
    // console.log("Updated One " , updatedOne)




}
const updateStock = async (req , res) =>{
 
    const allStocks = await stockModel.find();

    allStocks.forEach((elem , index) =>{
         
        updateSingleStock(elem)


    })
    
}
const pushTimeSeries = async (req , res) =>{
    
    const allStocks = await stockModel.find()
    const wss = getWebSocketServer()

    if (!wss || !wss.clients){
       console.log("WebServer not intialized or CLients are  not connected")
  }
 

    allStocks.forEach(async (elem , index) =>{
                        // console.log(elem)
                    elem.open = elem.randomPriceArr[0];
                    elem.close = elem.randomPriceArr[elem.randomPriceArr.length - 1];
                    elem.high = findHighPrice(elem.randomPriceArr)
                    elem.low = findLowPrice(elem.randomPriceArr)
        
                    elem.randomPriceArr = [];
                    elem.randomPriceArr.push(elem.close)
                    
        
           await elem.save();
         const data =  await timeSeries.insertMany({low : elem.low , high : elem.high , open : elem.open , close : elem.close , volume : elem.volume , timestamp : Date.now() , symbol : elem.symbol})
          wss.clients.forEach((client) =>{
               client.send(JSON.stringify(data))
          })
   
  })


        //  const allTimeseriesStocks = await timeSeries.find({symbol : "TATA"})

        //  wss.clients.forEach((client) =>{
        //      client.send(allTimeseriesStocks)
        //  })
           


}


cron.schedule("*/10 * * * * *" , () =>{
     updateStock().then((value) =>{
         console.log("Executed")
     })
     .catch ((error) =>{
         console.log(error)
     })
})
cron.schedule("*/1 * * * *" , () =>{
     pushTimeSeries().then((value) =>{
         console.log("PushedInTimeseries")
     })
     .catch ((error) =>{
         console.log(error)
     })
})

module.exports = {createNewStock , deleteStock , updateStock}