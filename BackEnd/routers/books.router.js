const express = require('express')
const bookRouter = express.Router()
const { checkBook } = require('../middleware/validation')
const {createBook, deleteBook, getAllBook, getBookById, updateBook,extendBook,borrowBook, giveBook, totalBook, unborrowListBook, historyBookBorrowOfStudent, listUser, minTime} = require('../controller/books.controller')
const { authenticate } = require('../middleware/authentication')
const { adminAuthorize, userAuthorize, userOtherSchoolAuthorize, allAuthorize } = require('../middleware/authorization')


bookRouter.post('/createBook', authenticate, adminAuthorize, createBook)
bookRouter.delete('/deleteBook/:id', authenticate, adminAuthorize, checkBook, deleteBook)
bookRouter.get('/getAllBook', authenticate, allAuthorize, getAllBook)
bookRouter.get('/findById/:id', authenticate, userAuthorize, checkBook, getBookById)
bookRouter.put('/updateBook/:id', authenticate, adminAuthorize, updateBook)
bookRouter.put('/extendBook/:id',authenticate,userAuthorize,extendBook)
bookRouter.put('/borrowBook/:id',authenticate,userAuthorize,borrowBook)
bookRouter.put('/giveBook/:id',authenticate,userAuthorize,checkBook,giveBook)
bookRouter.get('/totalBook/:name', authenticate, allAuthorize, totalBook)
bookRouter.get('/unborrowListBook', authenticate, allAuthorize,unborrowListBook)
bookRouter.get('/historybookborrowofstudent', authenticate, userAuthorize, historyBookBorrowOfStudent)
bookRouter.get('/listUser',authenticate, adminAuthorize, listUser)
bookRouter.get('/minTime/:name', authenticate, userAuthorize,minTime)

module.exports = { 
    bookRouter,
}