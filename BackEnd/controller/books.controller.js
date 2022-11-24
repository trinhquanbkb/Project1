const { Books } = require('../models')


const getAllBook = async (req, res) => {
    try{
        const books = await Books.findAll()
        if(books){
            res.status(200).send(books)
        }else{
            throw new Error('Cannot get all books')
        }
    } catch(e){
        res.status(500).send(e)
    }
}

const getBookById = async (req, res) => {
    const { id } = req.params
    try{
        const book = await Books.findOne({
            where: {
                id: id
            }
        })
        if(book){
            res.status(200).send(book)
        }else{
            throw new Error(`Cannot get book by id = ${id}`)
        }
    } catch(e){
        res.status(500).send(e)
    }
}

const createBook = async (req, res) => {
    try {
        const { name, author, title, countPage, year, positionBook } = req.body
        const newBook = await Books.create({ name, author, title, countPage, year, positionBook })
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
        const book = await Books.update({name: name, author: author, title: title, countPage: countPage, year: year, positionBook: positionBook}, {
            where: {
                id,
            }
        })
        if(book){
            res.status(201).send(`Update book success with book id is ${id}`)
        }else{
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
        if(deleteBook){
            res.status(200).send("delete book success")
        }else{
            throw new Error("Cannot delete book")
        }
    }catch(e) {
        res.status(500).send(e)
    }
}

module.exports = {
    createBook,
    deleteBook,
    getAllBook,
    getBookById,
    updateBook,
}