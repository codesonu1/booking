const express = require('express')
const {
  getCurrentUser,
  login,
  register,
  forgotPassword,
  resetPassword,
  verifyEmail,
} = require('../controller/auth_controller')

const router = express.Router()

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/current_user').get(getCurrentUser)
router.route('/forgot_password').post(forgotPassword)
router.route('/reset_password/:token').post(resetPassword)
router.route('/verify_email').get(verifyEmail)

module.exports = router
