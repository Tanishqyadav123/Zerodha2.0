const handleError = (res, statusCode , message) =>{
    
      return res.status(statusCode).json({
         success : false,
         message
      })

}

module.exports = handleError