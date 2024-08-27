const express = require("express")
const { registerUser, verifyUserEmail, getUser, loginUser, sendForgotPasswordOTP, verifyPasswordResetOTP, setNewPassword, logoutUser } = require("../controllers/userController")
const verifyAuthentication = require("../middlewares/Verify_authentication")
const resetPasswordAuthentication = require("../middlewares/resetPassword_authentication")
const authTokenAuthentication = require("../middlewares/auth_Authentication")

const router = express.Router()

router.post("/register" , registerUser)
router.post("/login" , loginUser)
router.post("/verifyEmail" , verifyAuthentication ,verifyUserEmail)
// router.get("/getUser" , authentication ,getUser)
router.post("/sendResetPasswordOTP"  ,sendForgotPasswordOTP)
router.post("/verifyResetPasswordOTP"  , resetPasswordAuthentication ,verifyPasswordResetOTP)
router.post("/setNewPassword"  , resetPasswordAuthentication ,setNewPassword)
router.get("/logoutUser"  , authTokenAuthentication ,logoutUser)

module.exports = router
