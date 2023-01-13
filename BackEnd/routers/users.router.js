const express = require('express')
const userRouter = express.Router()
const { register, login, forgotPassword, changePassword, registerAdmin, getAllStudent, updateStudentById, deleteStudentById, updateAccount } = require('../controller/user.controller')
const { authenticate } = require('../middleware/authentication')
const { adminAuthorize, userAuthorize, userOtherSchoolAuthorize, allAuthorize } = require('../middleware/authorization')

userRouter.post('/registerUser', register)
userRouter.post('/login', login)
userRouter.post('/forgotPassword', forgotPassword)
userRouter.post('/changePassword', authenticate, allAuthorize, changePassword)
userRouter.post('/registerAdmin', authenticate, adminAuthorize, registerAdmin)
userRouter.get('/getAllStudent', getAllStudent)
userRouter.put('/updateStudent/:id', updateStudentById)
userRouter.put('/deleteStudent', deleteStudentById)
userRouter.put('/updateAccount', updateAccount)

module.exports = {
    userRouter
}