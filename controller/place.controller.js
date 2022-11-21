const { Places } = require('../models/index')
//getAllPlace, findById, createPlace, updatePlace, deletePlace

const getAllPlace = async (req, res) => {
    try{
        const places = await Places.findAll()
        if(places){
            res.status(200).send(places)
        }else{
            throw new Error('Cannot get all places')
        }
    } catch(e){
        res.status(500).send(e)
    }
}


module.exports = {
    getAllPlace,
    
}