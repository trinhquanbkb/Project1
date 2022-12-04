const { DATE } = require('sequelize')
const { Books, Users } = require('../models')
const {statusBook}= require('../constant/index')

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
//Gia han muon tra Sach
const extendBook = async (req, res) => {
    console.log('1')
    try {
        const { bookId, userId } = req.body
        const book = await Books.findOne({
            where: {
                id:bookId,
            }
        })   
        const dateNow= new Date()
        console.log(dateNow)
        if (book) {
                if (book.userId === userId) {
                    //Kiem tra xem sach da duoc gia han chua
                        if (book.status === statusBook.notExtend) {
                            const newEndDate= book.endDate+ 14*24*3600*1000
                            book.update({ 
                                status: statusBook.extended,
                                endDate: newEndDate
                             }, {
                                where: {
                                    id:bookId,
                                }
                            })
                            res.status(201).send("Extend successful!")
                        } else {
                            if (book.status===statusBook.extended) {
                                
                                if(book.status===statusBook.expired){
                                    
                                }
                            }
                        }
                } else {
                    res.status(500).send(`Couldn't find user borrow book by user's id is ${userId}`)
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