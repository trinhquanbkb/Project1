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
module.exports = {
    findById
}