const express = require('express')
const cardStudentRouter = express.Router()
const { authenticate } = require('../middleware/authentication')
const { adminAuthorize, userAuthorize, userOtherSchoolAuthorize, allAuthorize } = require('../middleware/authorization')
const { findById } = require('../controller/cardStudents.controller')
const { checkCardStudents } = require('../middleware/validation')

cardStudentRouter.get('/:id', authenticate, userAuthorize, checkCardStudents, findById)

module.exports = {
    cardStudentRouter
}

