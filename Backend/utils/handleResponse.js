const handleResponse = (res , statusCode , message , data) =>{
    
    return res.status(statusCode).json({
         success : true,
         message,
         data
    })

}

module.exports = handleResponse;