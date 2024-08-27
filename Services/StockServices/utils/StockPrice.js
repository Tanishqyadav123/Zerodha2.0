const findHighPrice = (arr) =>{
    
     let maxi = Number.NEGATIVE_INFINITY;
     arr.forEach((elem , index) =>{
         maxi = Math.max(maxi , elem)
     })

     return maxi;

}
const findLowPrice = (arr) =>{
    
     let mini = Number.POSITIVE_INFINITY;
     arr.forEach((elem , index) =>{
         mini = Math.min(mini , elem)
     })

     return mini;

}
module.exports =  {findHighPrice , findLowPrice}