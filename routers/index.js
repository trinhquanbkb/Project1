const express = require('express')
const rootRouter = express.Router()
const { bookRouter } = require('./books.router')
const { userRouter } = require('./users.router')
const { placesRouter } = require('./places.router')

rootRouter.use('/books', bookRouter)
rootRouter.use('/users', userRouter)
rootRouter.use('/places', placesRouter)

module.exports = {
    rootRouter
}