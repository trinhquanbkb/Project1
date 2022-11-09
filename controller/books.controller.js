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
}