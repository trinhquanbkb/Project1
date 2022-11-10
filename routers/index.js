const express = require('express')
const rootRouter = express.Router()
const { bookRouter } = require('./books.router')
const { userRouter } = require('./users.router')

rootRouter.use('/books', bookRouter)
rootRouter.use('/users', userRouter)

module.exports = {
    rootRouter
}