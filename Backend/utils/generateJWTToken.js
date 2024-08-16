const jwt = require ("jsonwebtoken")

const generateToken = (userId , secret) =>{

      const token = jwt.sign({userId} , secret , {
          expiresIn : "7d"
      })

      return token

     
}

module.exports = generateToken;