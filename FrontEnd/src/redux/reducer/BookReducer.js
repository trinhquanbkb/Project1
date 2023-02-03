import { BORROW_BOOK_BY_USERID, CHECK_ID_BOOK_REDUCER, DELETE_BOOK_BY_ID, GET_BOOK_BORROW_BY_STUDENTID, RECREATE_BOOK_BY_ID, SUBMIT_UPDATE_BOOK, UPDATE_BOOK_BY_ID } from '../type/BookType'
import { STATUS_CODE } from '../../utils/constant/statusCode'

const bookData = {
    listBookBorrowOfStudent: [],
    bookById: [],
    idBookDb: null,
    //clickBook cho biết đã ấn vào nút cập nhật sách chưa, nếu ấn vào thì sẽ là 1, nếu chưa ấn sẽ là 0
    clickBook: 0,
    //statusUpdate cho biết đã tạo thành công hay chưa, thành công là 201
    statusUpdate: STATUS_CODE.SERVER_ERROR,
    //lấy ra dữ liệu của quyển sách đang muốn update để ném vào value inpit
    book: {

    },
    //values là giá trị của sách mới chuẩn bị được tạo ra
    newBook: {},
    //statusBorrow cho biết khi mượn sách sẽ thành công hay đã có người mượn
    statusBorrow: null,
    //check id book
    checkIdBook: null,
    //id của quyển sách khi được tạo ra
    idBookCreate: null,
}

const bookReducer = (state = bookData, action) => {
    switch (action.type) {
        case GET_BOOK_BORROW_BY_STUDENTID: {
            let array = []
            action.data.forEach((item) => {
                array.push({
                    id: item.id,
                    author: item.author,
                    countPage: item.countPage,
                    dayBorrow: item.dayBorrow,
                    name: item.name,
                    positionBook: item.positionBook,
                    title: item.title,
                    userId: item.userId,
                    year: item.year,
                    status: item.status
                })
            })
            state.listBookBorrowOfStudent = [...array]
            return { ...state }
        }
        case 'GET_BOOK_USERID': {
            state.bookById = [...action.data]
            return { ...state }
        }
        case DELETE_BOOK_BY_ID: {
            let array = [...state.listBookBorrowOfStudent]
            let newArray = []
            array.forEach((item) => {
                if (item.id === action.data.id && action.data.status === STATUS_CODE.SUCCESS) {
                    newArray.push({
                        id: item.id,
                        author: item.author,
                        countPage: item.countPage,
                        dayBorrow: item.dayBorrow,
                        name: item.name,
                        positionBook: item.positionBook,
                        title: item.title,
                        userId: item.userId,
                        year: item.year,
                        status: '1'
                    })
                } else {
                    newArray.push({
                        id: item.id,
                        author: item.author,
                        countPage: item.countPage,
                        dayBorrow: item.dayBorrow,
                        name: item.name,
                        positionBook: item.positionBook,
                        title: item.title,
                        userId: item.userId,
                        year: item.year,
                        status: item.status
                    })
                }
            })
            state.listBookBorrowOfStudent = [...newArray]
            return { ...state }
        }
        case RECREATE_BOOK_BY_ID: {
            let array = [...state.listBookBorrowOfStudent]
            let newArray = []
            array.forEach((item) => {
                if (item.id === action.data.id && action.data.status === STATUS_CODE.SUCCESS) {
                    newArray.push({
                        id: item.id,
                        author: item.author,
                        countPage: item.countPage,
                        dayBorrow: item.dayBorrow,
                        name: item.name,
                        positionBook: item.positionBook,
                        title: item.title,
                        userId: item.userId,
                        year: item.year,
                        status: '0'
                    })
                } else {
                    newArray.push({
                        id: item.id,
                        author: item.author,
                        countPage: item.countPage,
                        dayBorrow: item.dayBorrow,
                        name: item.name,
                        positionBook: item.positionBook,
                        title: item.title,
                        userId: item.userId,
                        year: item.year,
                        status: item.status
                    })
                }
            })
            state.listBookBorrowOfStudent = [...newArray]
            return { ...state }
        }
        case 'GET_BOOK_ID': {
            state.idBookDb = action.data
            const bookArray = state.listBookBorrowOfStudent.filter(item => item.id === state.idBookDb)
            state.book = bookArray[0]
            return { ...state }
        }
        case SUBMIT_UPDATE_BOOK: {
            state.clickBook = action.data
            return { ...state }
        }
        case UPDATE_BOOK_BY_ID: {
            if (action.data === STATUS_CODE.SUCCESS_PUT) {
                state.statusUpdate = STATUS_CODE.SUCCESS_PUT
            } else {
                state.statusUpdate = STATUS_CODE.SERVER_ERROR
            }
            return { ...state }
        }
        case 'VALUE_CREATE_BOOK': {
            state.newBook = action.data
            return { ...state }
        }
        case BORROW_BOOK_BY_USERID: {
            if (action.data === STATUS_CODE.SUCCESS_PUT) {
                state.statusBorrow = STATUS_CODE.SUCCESS_PUT
            } else if (action.data === STATUS_CODE.CLIENT_ERROR) {
                state.statusBorrow = STATUS_CODE.CLIENT_ERROR
            } else if (action.data === STATUS_CODE.NOT_FOUND) {
                state.statusBorrow = STATUS_CODE.NOT_FOUND
            } else {
                state.statusBorrow = null
            }
            return { ...state }
        }
        case CHECK_ID_BOOK_REDUCER: {
            state.checkIdBook = action.data
            return { ...state }
        }
        case 'ID_BOOK_CREATE': {
            state.idBookCreate = action.data
            return { ...state }
        }
        default: {
            return { ...state }
        }
    }
}

export default bookReducer