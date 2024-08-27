function wsConnection (myData , setMyData){
    console.log("object")
    const ws =  new WebSocket("http://localhost:8081")
   
    if (ws.OPEN){
       
      ws.onmessage = (e) =>{
        console.log("object")
       
         console.log(JSON.parse(e.data))
         console.log("Thidi " , myData)
         
         setMyData([...myData , [...JSON.parse(e.data)]])
      }

      
    }
     
}

export default wsConnection