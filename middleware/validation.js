const { Books, CardStudent, Places, Users } = require('../models/index')

const checkBook = async (req, res, next) => {
    const id = req.params.id
    const book = await Books.findOne({
        where: {
            id: id
        }
    })
    if (book) {
        next()
    } else {
        res.status(400).send(`Cannot find book with id = ${id}`)
    }
}

module.exports = {
    checkBook,
}