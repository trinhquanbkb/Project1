const { Places } = require('../models/index')
//getAllPlace, findById, createPlace, updatePlace, deletePlace

const getAllPlace = async (req, res) => {
    try {
        const places = await Places.findAll()
        if (places) {
            res.status(200).send(places)
        } else {
            throw new Error('Cannot get all places')
        }
    } catch (e) {
        res.status(500).send(e)
    }
}

const getPlaceById = async (req, res) => {
    const { id } = req.params
    try {
        const place = await Places.findOne({
            where: {
                id: id
            }
        })
        if (place) {
            res.status(200).send(place)
        } else {
            throw new Error(`Cannot get place by id = ${id}`)
        }
    } catch (e) {
        res.status(500).send(e)
    }
}

const createPlace = async (req, res) => {
    try {
        const { positionPlace } = req.body
        const newPlace = await Places.create({ positionPlace })
        if (newPlace) {
            res.status(201).send(newPlace)
        } else {
            throw new Error('Cannot create place')
        }
    } catch (e) {
        res.status(500).send(e)
    }
}

const updatePosition = async (req, res) => {
    const { id } = req.params
    const { positionPlace } = req.body
    try {
        const place = await Places.update({ positionPlace: positionPlace }, {
            where: {
                id,
            }
        })
        if (place) {
            res.status(201).send(`Update place success with place id is ${id}`)
        } else {
            throw new Error('Update place failure with place id is ${id}')
        }
    } catch (e) {
        res.status(500).send(e)
    }
}

const deletePlace = async (req, res) => {
    try {
        const { id } = req.params
        const deletePlace = await Places.destroy({
            where: {
                id: id
            }
        });
        if (deletePlace) {
            res.status(200).send("delete place success")
        } else {
            throw new Error('Cannot delete place')
        }
    } catch (e) {
        res.status(500).send(e)
    }
}
//Tìm kiếm theo vị trí của Place
const findPlaceByPositionPlace = async (req, res) => {
    const { positionPlace } = req.params
    try {
        const place = await Places.findOne({
            where: {
                positionPlace: positionPlace,
            }
        })
        console.log(place)
     if(place==null) {
            throw new Error(`Cannot find place with position is ${positionPlace}`)
        }
    } catch (e) {
        res.status(500).send(e)
    }
}

module.exports = {
    getAllPlace,
    createPlace,
    deletePlace,
    updatePosition,
    getPlaceById,
    findPlaceByPositionPlace
}