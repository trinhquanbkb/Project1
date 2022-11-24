const { Card } = require('../models/index')
const findById = async (req, res) => {
    const { id } = req.params
    try {
        const cardStudent = await Card.findOne({
            where: { id: id }
        })
        if (cardStudent) {
            res.status(200).send(cardStudent)
        } else {
            throw new Error(`cannot find by id = ${id}`)
        }
    } catch (err) {
        res.status(500).send(err)
    }
}

const getAllCard = async (req, res) => {
    try {
        const cardStudent = await Card.findAll()
        if (cardStudent) {
            res.status(200).send(cardStudent);
        } else {
            throw new Error("Cannot get all card")
        }
    } catch (err) {
        res.status(500).send(err)
    }
}

const createCard = async (req, res) => {
    const { nameUser, school, balance } = req.body
    try {
        const newCard = await Card.create({ nameUser, school, balance })
        if (newCard) {
            res.status(201).send(newCard)
        } else {
            throw new Error("Cannot create new card")
        }
    } catch (e) {
        res.status(500).send(e)
    }
}

const updateCard = async (req, res) => {
    const { id } = req.params
    const { nameUser, school, balance } = req.body
    try {
        const card = await Card.update({ nameUser:nameUser, school:school, balance:balance }, {
            where: {
                id,
            }
        })
        if (card) {
            res.status(201).send(`Update card success with card id is ${id}`)
        } else {
            throw new Error(`Cannot update card with card id is ${id}`)
        }
    } catch (e) {
        res.status(500).send(e)
    }
}

const deleteCard = async (req, res) => {
    const { id } = req.params
    try {
        const card = await Card.destroy({
            where: {
                id,
            }
        })
        if (card) {
            res.status(200).send("delete card success")
        } else {
            throw new Error(`Cannot delete card with card id is ${id}`)
        }
    } catch (e) {
        res.status(500).send(e)
    }
}


//Export
module.exports = {
    findById,
    getAllCard,
    createCard,
    updateCard,
    deleteCard
}
