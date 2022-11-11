const express = require('express')
const userRouter = express.Router()
const { register, login, forgotPassword, changePassword } = require('../controller/user.controller')
const { authenticate } = require('../middleware/authentication')
const { adminAuthorize, userAuthorize, userOtherSchoolAuthorize } = require('../middleware/authorization')

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.post('/forgotPassword', forgotPassword)
userRouter.post('/changePassword', authenticate, userAuthorize, changePassword)

module.exports = {
    userRouter
}