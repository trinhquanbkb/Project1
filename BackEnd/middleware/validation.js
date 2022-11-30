const { Books, Card, Users, Places } = require('../models')

//check xem dữ liệu đầu vào id của book có tồn tại hay không
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
//kiem tra id ton tai hay khong
const checkCardStudents = async (req, res, next) => {
    const id = req.params.id
    const cardStudent = await Card.findOne({
        where: { id: id }
    })
    if (cardStudent) {
        next()
    } else {
        res.status(400).send(`Cannot find card student with id = ${id}`)
    }
}

const checkPlace = async (req, res, next) => {
    const id = req.params.id
    const place = await Places.findOne({
        where: { id: id }
    })
    if (place) {
        next()
    } else {
        res.status(400).send(`Cannot find place with id = ${id}`)
    }
}

//Kiem tra user co ton tai k
const checkUser = async (req, res, next) => {
    const id = req.params.id
    const user = await Users.findOne({
        where: { id: id }
    })
    if (user) {
        next()
    } else {
        res.status(400).send(`Cannot find user with id = ${id}`)
    }
}

module.exports = {
    checkBook,
    checkCardStudents,
    checkUser,
    checkPlace
}