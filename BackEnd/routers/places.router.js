const express = require('express')
const placesRouter = express.Router()
const {authenticate} = require('../middleware/authentication')
const {adminAuthorize, userAuthorize, userOtherSchoolAuthorize, allAuthorize} = require('../middleware/authorization')
const {getAllPlace,
    createPlace,
    deletePlace,
    updatePosition,
    getPlaceById} = require('../controller/place.controller')
const {checkPlace} = require('../middleware/validation')

placesRouter.get('/', authenticate, userAuthorize, getAllPlace)
placesRouter.post('/',authenticate, adminAuthorize, createPlace)
placesRouter.delete('/:id',authenticate, adminAuthorize, checkPlace, deletePlace)
placesRouter.put('/:id', authenticate, adminAuthorize, checkPlace, updatePosition)
placesRouter.get('/:id', authenticate, userAuthorize, checkPlace, getPlaceById)

module.exports ={
    placesRouter
}