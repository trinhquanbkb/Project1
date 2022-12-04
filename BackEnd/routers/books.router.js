const express = require('express')
const bookRouter = express.Router()
const { checkBook } = require('../middleware/validation')
const {createBook, deleteBook, getAllBook, getBookById, updateBook,extendBook} = require('../controller/books.controller')
const { authenticate } = require('../middleware/authentication')
const { adminAuthorize, userAuthorize, userOtherSchoolAuthorize, allAuthorize } = require('../middleware/authorization')

bookRouter.post('/', authenticate, adminAuthorize, createBook)
bookRouter.delete('/:id', authenticate, adminAuthorize, checkBook, deleteBook)
bookRouter.get('/', authenticate, userAuthorize, getAllBook)
bookRouter.get('/:id', authenticate, userAuthorize, checkBook, getBookById)
bookRouter.put('/:id', authenticate, adminAuthorize, updateBook)
bookRouter.put('/extendBook/:id',authenticate,userAuthorize,extendBook)

module.exports = { 
    bookRouter,
}