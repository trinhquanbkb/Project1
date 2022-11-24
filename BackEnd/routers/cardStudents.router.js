const express = require('express')
const cardStudentRouter = express.Router()
const { authenticate } = require('../middleware/authentication')
const { adminAuthorize, userAuthorize, userOtherSchoolAuthorize, allAuthorize } = require('../middleware/authorization')
const { findById, getAllCard, createCard, updateCard, deleteCard } = require('../controller/cardStudents.controller')
const { checkCardStudents } = require('../middleware/validation')

cardStudentRouter.get('/:id', authenticate, userAuthorize, checkCardStudents, findById)
cardStudentRouter.get('/', authenticate, userAuthorize, getAllCard)
cardStudentRouter.post('/', authenticate, adminAuthorize, createCard)
cardStudentRouter.put('/:id', authenticate, adminAuthorize, checkCardStudents, updateCard)
cardStudentRouter.delete('/:id', authenticate, adminAuthorize, checkCardStudents, deleteCard)

module.exports = {
    cardStudentRouter,
}

