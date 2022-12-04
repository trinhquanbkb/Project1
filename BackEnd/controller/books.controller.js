const { DATE } = require('sequelize')
const { Books, Users } = require('../models')
const { statusBook } = require('../constant/index')

const getAllBook = async (req, res) => {
    try {
        const books = await Books.findAll()
        if (books) {
            res.status(200).send(books)
        } else {
            throw new Error('Cannot get all books')
        }
    } catch (e) {
        res.status(500).send(e)
    }
}

const getBookById = async (req, res) => {
    const { id } = req.params
    try {
        const book = await Books.findOne({
            where: {
                id: id
            }
        })
        if (book) {
            res.status(200).send(book)
        } else {
            throw new Error(`Cannot get book by id = ${id}`)
        }
    } catch (e) {
        res.status(500).send(e)
    }
}

const createBook = async (req, res) => {
    try {
        const { name, author, title, countPage, year, positionBook } = req.body
        const newBook = await Books.create({ name, author, title, countPage, year, positionBook, status: '0' })
        if (newBook) {
            res.status(201).send(newBook)
        }
        else {
            throw new Error('Cannot create book')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateBook = async (req, res) => {
    const { id } = req.params
    const { name, author, title, countPage, year, positionBook } = req.body
    try {
        const book = await Books.update({ name: name, author: author, title: title, countPage: countPage, year: year, positionBook: positionBook }, {
            where: {
                id,
            }
        })
        if (book) {
            res.status(201).send(`Update book success with book id is ${id}`)
        } else {
            throw new Error("Update book failure with book id is ${id}")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params
        const deleteBook = await Books.destroy({
            where: {
                id: id
            }
        });
        if (deleteBook) {
            res.status(200).send("delete book success")
        } else {
            throw new Error("Cannot delete book")
        }
    } catch (e) {
        res.status(500).send(e)
    }
}
//Gia hạn mượn Sách
const extendBook = async (req, res) => {
    try {
        //Lấy id của sách
        const { id } = req.params
        const book = await Books.findOne({
            where: {
                id,
            }
        })
        const dateNow = new Date()
        const endDate = new Date(book.endDate).getTime()
        const newEndDate = endDate + 14 * 24 * 3600 * 1000
        if (book) {
            if (book.dataValues.userId) {
                //Kiểm tra sách đã được gia hạn chưa
                if (book.status === statusBook.notExtend) {
                    //So sánh thời gian hiện tại có nằm trong khoảng mượn-hạn trả
                    if (dateNow < newEndDate) {
                        const updateBook = await Books.update({
                            status: statusBook.extended,
                            endDate: newEndDate
                        }, {
                            where: {
                                id,
                            }
                        })
                        if (updateBook) {
                            res.status(201).send("Extend successful!")
                        } else {
                            res.status(500).send("Couldn't update this book")
                        }
                    }
                    //Thời giạn hiện tại lớn hơn newEndDate 
                    else {
                        const updateBook = await Books.update({
                            status: statusBook.expired,
                        }, {
                            where: {
                                id,
                            }
                        })
                        if (updateBook) {
                            res.status(201).send("Your loan period has expired. Please return of the library.")
                        } else {
                            res.status(500).send("Couldn't update this book")
                        }
                    }
                }
                //Nếu sách đã được gia hạn
                else if (book.status === statusBook.extended) {
                    //Kiểm tra endDate với thời gian hiện tại
                    //Nếu còn hạn mượn sách
                    if (endDate > dateNow) {
                        //Hien thi so ngay muon con lai
                        const remainDay = ((endDate - dateNow) / (24 * 3600 * 1000)).toFixed()
                        res.status(200).send(`Remaining days of borrowing book is ${remainDay} day`)
                    }
                    //Nếu sách hết hạn 
                    else {
                        const updateBook = await Books.update({
                            status: statusBook.expired,
                        }, {
                            where: {
                                id,
                            }
                        })
                        if (updateBook) {
                            res.status(201).send("Your loan period has expired. Please return of the library.")
                        } else {
                            res.status(500).send("Couldn't update this book")
                        }
                    }
                }
                //Nếu sách đã hết hạn và status đang là : time borrow book is expired
                else if (book.status === statusBook.expired) {
                    res.status(200).send("Your loan period has expired. Please return of the library.")
                }
            } else {
                res.status(200).send(`This book wasn't borrowed`)
            }
        } else {
            throw new Error(`Couldn't find book by id is ${id}`)
        }
    } catch (e) {
        res.status(500).send(e)
    }
}


module.exports = {
    createBook,
    deleteBook,
    getAllBook,
    getBookById,
    updateBook,
    extendBook
}