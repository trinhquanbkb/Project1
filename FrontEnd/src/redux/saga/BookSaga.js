import { takeLatest, put } from 'redux-saga/effects'
import { BORROW_BOOK_BY_USERID, DELETE_BOOK_BY_ID, GET_BOOK_BORROW_BY_STUDENTID, RECREATE_BOOK_BY_ID, UPDATE_BOOK_BY_ID } from '../type/BookType'
import { deleteBookById, getAllBooks, recreateBookById, updateBookById, createBook, borrowBook} from '../../services/BookService'
import { getUserByMssv } from '../../services/UserService'
import { STATUS_CODE } from '../../utils/constant/statusCode'


//lấy tát cả quyển sách 
function* getBookBorrowStudent(action) {
    try {
        let promise = yield getAllBooks()
        yield put({
            type: GET_BOOK_BORROW_BY_STUDENTID,
            data: promise.data
        })
    } catch (error) {

    }
}

function* deleteBook(action) {
    try {
        let promise = yield deleteBookById(action.data)
        if (promise.status === STATUS_CODE.SUCCESS)
            yield put({
                type: DELETE_BOOK_BY_ID,
                data: {
                    id: action.data,
                    status: promise.status
                }
            })
    } catch (error) {

    }
}

function* recreateBook(action) {
    try {
        let promise = yield recreateBookById(action.data)
        if (promise.status === STATUS_CODE.SUCCESS) {
            yield put({
                type: RECREATE_BOOK_BY_ID,
                data: {
                    id: action.data,
                    status: promise.status
                }
            })
        }
    } catch (error) {

    }
}

function* updateBook(action) {
    try {
        if (action.data.values === 'errorInput') {
            yield put({
                type: UPDATE_BOOK_BY_ID,
                data: 500
            })
        } else {
            let promise = yield updateBookById(action.data.bookId, action.data.values)
            yield put({
                type: UPDATE_BOOK_BY_ID,
                data: promise.status
            })
        }
    } catch (error) {

    }
}

function* createNewBook(action){
    try {
        console.log(action.data)
        yield createBook(action.data)
    } catch (error) {
        
    }
}

function* borrowBookSaga(action){
    try {
        let acc = yield getUserByMssv(action.data.mssv)
        let promise = yield borrowBook(action.data.idBook, acc.data.id)
        if(promise.status === STATUS_CODE.SUCCESS_PUT){
            yield put({
                type: BORROW_BOOK_BY_USERID,
                data: STATUS_CODE.SUCCESS_PUT
            })
        }else if(promise.status === STATUS_CODE.SUCCESS){
            yield put({
                type: BORROW_BOOK_BY_USERID,
                data: STATUS_CODE.CLIENT_ERROR
            })
        }
        // yield borrowBook(action.data)
    } catch (error) {
        
    }
}


export function* getBookSaga() {
    yield takeLatest('GET_BOOK_BORROW_STUDENT', getBookBorrowStudent)
    yield takeLatest('DELETE_BOOK', deleteBook)
    yield takeLatest('RECREATE_BOOK', recreateBook)
    yield takeLatest('UPDATE_BOOK', updateBook)
    yield takeLatest('CONFIRM_CREATE_BOOK', createNewBook)
    yield takeLatest('BORROW_BOOK', borrowBookSaga)
}
