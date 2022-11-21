const { Books, CardStudent, Places, Users } = require('../models/index')

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
    const cardStudent = await CardStudent.findOne({
        where: { id: id }
    })
    if (cardStudent) {
        next()
    } else {
        res.status(400).send(`Cannot find card student with id = ${id}`)
    }
}

module.exports = {
    checkBook,
    checkCardStudents
}