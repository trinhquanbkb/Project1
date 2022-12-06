const express = require('express')
const bookRouter = express.Router()
const { checkBook } = require('../middleware/validation')
const {createBook, deleteBook, getAllBook, getBookById, updateBook,extendBook,borrowBook, giveBook, totalBook, unborrowListBook,
     historyBookBorrowOfStudent} = require('../controller/books.controller')
const { authenticate } = require('../middleware/authentication')
const { adminAuthorize, userAuthorize, userOtherSchoolAuthorize, allAuthorize } = require('../middleware/authorization')

bookRouter.post('/', authenticate, adminAuthorize, createBook)
bookRouter.delete('/:id', authenticate, adminAuthorize, checkBook, deleteBook)
bookRouter.get('/', authenticate, userAuthorize, getAllBook)
bookRouter.get('/:id', authenticate, userAuthorize, checkBook, getBookById)
bookRouter.put('/:id', authenticate, adminAuthorize, updateBook)
bookRouter.put('/extendBook/:id',authenticate,userAuthorize,extendBook)
bookRouter.put('/borrowBook/:idBook',authenticate,userAuthorize,borrowBook)
bookRouter.put('/giveBook/:id',authenticate,userAuthorize,checkBook,giveBook)
bookRouter.get('/totalBook/:name', authenticate, allAuthorize, totalBook)
bookRouter.get('/unborrowListBook', authenticate, allAuthorize,unborrowListBook)
bookRouter.get('/historybookborrowofstudent/:userId', authenticate, adminAuthorize, historyBookBorrowOfStudent)


module.exports = { 
    bookRouter,
}
