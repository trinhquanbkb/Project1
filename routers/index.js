const express = require('express')
const rootRouter = express.Router()
const { bookRouter } = require('./books.router')

rootRouter.use('/books', bookRouter)

module.exports = {
    rootRouter
}