const express = require('express')
const bookRouter = express.Router()
const { checkBook } = require('../middleware/validation')
const {createBook, deleteBook, getAllBook} = require('../controller/books.controller')

bookRouter.post('/', createBook)
bookRouter.delete('/:id', checkBook, deleteBook)
bookRouter.get('/', getAllBook)

module.exports = { 
    bookRouter
}