const express = require('express')
const bookRouter = express.Router()
const { checkBook } = require('../middleware/validation')
const { createBook, deleteBook, getAllBook, getBookById, updateBook, extendBook, borrowBook, giveBook, totalBook, unborrowListBook, historyBookBorrowOfStudent, listUser, minTime, recreateBookById } = require('../controller/books.controller')
const { authenticate } = require('../middleware/authentication')
const { adminAuthorize, userAuthorize, userOtherSchoolAuthorize, allAuthorize } = require('../middleware/authorization')


bookRouter.post('/createBook', authenticate, adminAuthorize, createBook)
bookRouter.put('/deleteBook', authenticate, adminAuthorize, checkBook, deleteBook)
bookRouter.get('/getAllBook', authenticate, allAuthorize, getAllBook)
bookRouter.get('/findById', authenticate, allAuthorize, checkBook, getBookById)
bookRouter.put('/updateBook', authenticate, adminAuthorize, updateBook)
bookRouter.put('/extendBook/:id', authenticate, userAuthorize, extendBook)
bookRouter.put('/borrowBook', authenticate, adminAuthorize, borrowBook)
bookRouter.put('/giveBook/:id', authenticate, userAuthorize, checkBook, giveBook)
bookRouter.get('/totalBook/:name', authenticate, allAuthorize, totalBook)
bookRouter.get('/unborrowListBook', authenticate, allAuthorize, unborrowListBook)
bookRouter.put('/historybookborrowofstudent', authenticate, adminAuthorize, historyBookBorrowOfStudent)
bookRouter.get('/listUser', authenticate, adminAuthorize, listUser)
bookRouter.get('/minTime/:name', authenticate, userAuthorize, minTime)
bookRouter.put('/recreateBookById', authenticate, adminAuthorize, checkBook, recreateBookById)

//method post upload 
const multer = require('multer')
const storage = multer.diskStorage({
    //tạo đường dẫn gửi ảnh đến
    destination: function (req, file, cb) {
        cb(null, './public/avatarBook')
    },
    //tạo tên ảnh (khác nhau về thời gian gửi)
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix+file.originalname)
    }
})
const upload = multer({
    storage: storage,
    //filter chỉ chấp nhận những file có đuôi là .png, .jpg, .jpeg
    fileFilter: function(req, file, cb){
        const extension = [".png", ".jpg",".jpeg"]
        const extensionOriginFile = file.originalname.slice(-4)
        const checkExtension = extension.includes(extensionOriginFile)
        if(checkExtension){
            cb(null, true)
        }else{
            cb(new Error('Extension file invalid'), false)
        }
    }
}).single('file')
bookRouter.post('/uploadImage', authenticate, adminAuthorize, upload, function (req, res, next) {
    res.status(201).send('upload image book success')
})

module.exports = {
    bookRouter,
}