const express = require('express')
const cardStudentRouter = express.Router()
const { authenticate } = require('../middleware/authentication')
const { adminAuthorize, userAuthorize, userOtherSchoolAuthorize, allAuthorize } = require('../middleware/authorization')
const { findById, getAllCard, createCard, updateCard, deleteCard, rechargeCard } = require('../controller/cardStudents.controller')
const { checkCardStudents, checkUser } = require('../middleware/validation')

cardStudentRouter.get('/:id', authenticate, userAuthorize, checkCardStudents, findById)
cardStudentRouter.get('/', authenticate, userAuthorize, getAllCard)
cardStudentRouter.post('/', authenticate, adminAuthorize, createCard)
cardStudentRouter.put('/:id', authenticate, adminAuthorize, checkCardStudents, updateCard)
cardStudentRouter.delete('/:id', authenticate, adminAuthorize, checkCardStudents, deleteCard)
cardStudentRouter.put('/rechargeCard/:id',authenticate,adminAuthorize,checkUser, rechargeCard)

module.exports = {
    cardStudentRouter,
}

