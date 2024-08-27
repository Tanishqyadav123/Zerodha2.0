const express = require ("express")
const { completeKYC } = require("../controllers/kycController")
const authTokenAuthentication = require("../middlewares/auth_Authentication")
const upload = require("../middlewares/multer")
const router = express.Router()

router.post("/completeKYC" , authTokenAuthentication , upload.single('selfie') , completeKYC)

module.exports = router
