const express = require("express")
const { registerUser, verifyUserEmail, getUser, loginUser } = require("../controllers/userController")
const authentication = require("../middlewares/authentication")

const router = express.Router()

router.post("/register" , registerUser)
router.post("/login" , loginUser)
router.post("/verifyEmail" , authentication ,verifyUserEmail)
router.get("/getUser" , authentication ,getUser)

module.exports = router
