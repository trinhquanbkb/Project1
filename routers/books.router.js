const express = require('express')
const bookRouter = express.Router()
const {createBook, deleteBook, getAllBook} = require('../controller/books.controller')

bookRouter.post('/', createBook)
bookRouter.delete('/:id', deleteBook)
bookRouter.get('/', getAllBook)

module.exports = {
    bookRouter
}