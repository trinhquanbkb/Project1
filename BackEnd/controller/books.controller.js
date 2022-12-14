const { DATE } = require('sequelize')
const { Books, Users } = require('../models')
const { statusBook } = require('../constant/index')
const { Op } = require("sequelize");

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
//Gia h???n m?????n S??ch
const extendBook = async (req, res) => {
    try {
        //L???y id c???a s??ch
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
                //Ki???m tra s??ch ???? ???????c gia h???n ch??a
                if (book.status === statusBook.notExtend) {
                    //So s??nh th???i gian hi???n t???i c?? n???m trong kho???ng m?????n-h???n tr???
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
                    //Th???i gi???n hi???n t???i l???n h??n newEndDate 
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
                //N???u s??ch ???? ???????c gia h???n
                else if (book.status === statusBook.extended) {
                    //Ki???m tra endDate v???i th???i gian hi???n t???i
                    //N???u c??n h???n m?????n s??ch
                    if (endDate > dateNow) {
                        //Hien thi so ngay muon con lai
                        const remainDay = ((endDate - dateNow) / (24 * 3600 * 1000)).toFixed()
                        res.status(200).send(`Remaining days of borrowing book is ${remainDay} day`)
                    }
                    //N???u s??ch h???t h???n 
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
                //N???u s??ch ???? h???t h???n v?? status ??ang l?? : time borrow book is expired
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
//M?????n s??ch borrowBook( m?????n s??ch theo idBook)
const borrowBook = async (req, res) => {
    const { id } = req.params
    const { userId } = req.user
    const dateNow = new Date()
    const newEndDate = new Date(dateNow).getTime() + 60 * 24 * 3600 * 1000
    try {
        const book = await Books.findOne({
            where: {
                id: id,
            }
        })
        if (book) {
            //Ki???m tra s??ch ???? ???????c m?????n hay ch??a
            if (!book.dataValues.userId) {
                //Ch??a ???????c m?????n--c???p nh???t dayBorrow, userId, endDate
                const updateBook = await Books.update({ userId: userId, dayBorrow: dateNow, endDate: newEndDate }, {
                    where: {
                        id: id,
                    }
                })
                if (updateBook) {
                    res.status(201).send("Borrow successful!")
                } else {
                    res.status(500).send("Borrow failed!")
                }
            } else {
                //S??ch ???? ???????c m?????n--In ra th??ng b??o
                res.status(200).send("This book has been borrowed!")
            }
        } else {
            throw new Error(`Couldn't find book by id is ${id}`)
        }
    } catch (e) {
        res.status(500).send(e)
    }
}
//Tr??? s??ch giveBook
const giveBook = async (req, res) => {
    const { id } = req.params
    try {
        const book = await Books.findOne({
            where: {
                id,
            }
        })
        if (book) {
            const updateBook = await Books.update({
                userId: null,
                dayBorrow: null,
                status: statusBook.notExtend,
                endDate: null
            }, {
                where: {
                    id,
                }
            })
            if (updateBook) {
                res.status(201).send("Give book successful!")
            } else {
                res.status(500).send("Give book failed!")
            }
        } else {
            throw new Error(`Couldn't find book by this id ${id}`)
        }
    } catch (e) {
        res.status(500).send(e)
    }
}

const totalBook = async (req, res) => {
    const { name } = req.params
    try {
        const books = await Books.findAll({
            where: {
                name: {
                    [Op.substring]: `${name}`,
                },
                userId: null,
            }
        })
        const data = {
            "totalBook": books.length
        }
        if (books) {
            res.status(200).send(data)
        } else {
            res.status(500).send("Can't get total book")
        }
    } catch (e) {
        res.status(500).send(e)
    }
}
//Li???t k?? nh???ng cu???n s??ch ch??a ???????c m?????n
const unborrowListBook = async (req, res) => {
    try {
        const book = await Books.findAll({
            where: {
                userId: null,
            }
        })
        if (book) {
            res.status(200).send("Successfully list unborrowed books!")
        } else {
            throw new Error("Fail to list unborrowed books!")
        }
    } catch (e) {
        res.status(500).send(e)
    }
}

//xem l???ch s??? m?????n s??ch c???a sinh vi??n v??? s??ch ch??a tr???
const historyBookBorrowOfStudent = async (req, res) => {
    const { userId } = req.user
    try {
        const user = await Users.findOne({
            where: {
                id: userId
            }
        })
        if (user) {
            const book = await Books.findAll({
                where: {
                    userId: userId,
                }
            })
            if (book) {
                res.status(200).send(book)
            }
            else {
                res.status(500).send("Can't find books user borrow")
            }
        } else {
            throw new Error("Can't find id of user")
        }
    } catch (e) {
        res.status(500).send(e)
    }
}

const listUser = async (req, res) => {
    try {
        const user = await Users.findAll()
        const arrayUserId = user.map((item) => {
            return item.dataValues.id
        })
        let arrayRes = []
        for(let i=0; i< arrayUserId.length;i++){
            const item = arrayUserId[i]
            const listBook = await Books.findAll({
                where: {
                    userId: item,
                }
            })
            const books = listBook.map((item) => {
                return item.dataValues
            })
            const nameUser = await Users.findOne({
                where: {
                    id: item,
                }
            })
            arrayRes[arrayRes.length] = {
                id: item,
                nameUser: nameUser.dataValues.name,
                listBookBorrow: books
            }
        }
        res.status(200).send(arrayRes)
    } catch (e) {
        res.status(500).send(e)
    }
}

//Lay ra thoi gian ngan nhat sinh vien co the muon sach
const minTime = async (req, res) => {
    const { name } = req.params
    const allBook = await Books.findAll({
        where: {
            name: {
                [Op.substring]: `${name}`,
            }
        }
    })
    if (allBook.length) {
        const allNames = allBook.map(element => {
            return element.name
        })
        const allNameDistince = new Set(allNames)
        let arrayRes = []
        const allName = []

        allNameDistince.forEach((name) => {
            allName.push(name)
        })
        allName.forEach((name, index) => {
            const books = allBook.filter(element => element.dataValues.name == name)
            const dateNow = new Date()
            let book1 = books.filter(book => book.userId == null)
            if (book1.length) {
                book1.forEach(element => arrayRes.push(element))
            }
            else {
                let book2 = books.map((book, index) => {
                    let endDate
                    if (book.status === '0') {
                        endDate = new Date(book.endDate).getTime() + 14 * 24 * 3600 * 1000
                    } else {
                        endDate = new Date(book.endDate).getTime()
                    }
                    const count = Number(((endDate - dateNow) / (24 * 3600 * 1000)).toFixed())
                    return {
                        id: book.id,
                        name: book.name,
                        countDate: count,
                        endDate: new Date(endDate)
                    };
                })
                let minDate = book2[0].countDate
                let bookEarly = book2[0]
                const length_book2 = book2.length
                for (let i = 1; i < length_book2; i++) {
                    if (minDate > book2[i].countDate) {
                        minDate = book2[i].countDate
                        bookEarly = book2[i]
                    }
                }
                arrayRes.push(bookEarly)
            }
        })

        const dataRes = []
        arrayRes.forEach(element => {
            const data = {
                "name": element.name,
                "minDate": element.endDate ? element.endDate : "C??n s??ch"
            }
            dataRes.push(data)
        })
        res.status(200).send(dataRes)
    } else {
        res.status(500).send(`Cannot find book has name is ${name}`)
    }

}

module.exports = {
    createBook,
    deleteBook,
    getAllBook,
    getBookById,
    updateBook,
    extendBook,
    borrowBook,
    giveBook,
    totalBook,
    unborrowListBook,
    historyBookBorrowOfStudent,
    listUser,
    minTime
}