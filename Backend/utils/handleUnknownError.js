const handleUnknownError = (res , message) =>{
    
    return res.status(500).json({
       success : false,
       message : message || "Internal Server Error"
    })

}

module.exports = handleUnknownError