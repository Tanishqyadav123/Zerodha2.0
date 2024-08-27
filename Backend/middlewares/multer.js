const multer = require ("multer")
const path = require ("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, './public/uploads'));
  },
     
    filename: function (req, file, cb) { 
         console.log("Multer ")
      cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
  })

module.exports = multer({storage : storage})  