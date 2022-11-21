const express = require('express')
const placesRouter = express.Router()
const {authenticate} = require('../middleware/authentication')
const {adminAuthorize, userAuthorize, userOtherSchoolAuthorize, allAuthorize} = require('../middleware/authorization')
const {getAllPlace} = require('../controller/place.controller')

placesRouter.get('/', authenticate, userAuthorize, getAllPlace)

module.exports ={
    placesRouter
}