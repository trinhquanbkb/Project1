import { takeLatest, put } from 'redux-saga/effects'
import { DELETE_BOOK_BY_ID, GET_BOOK_BORROW_BY_STUDENTID, RECREATE_BOOK_BY_ID, UPDATE_BOOK_BY_ID } from '../type/BookType'
import { deleteBookById, getAllBooks, recreateBookById, updateBookById, createBook } from '../../services/BookService'
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
        yield createBook(action.data)
    } catch (error) {
        
    }
}


export function* getBookSaga() {
    yield takeLatest('GET_BOOK_BORROW_STUDENT', getBookBorrowStudent)
    yield takeLatest('DELETE_BOOK', deleteBook)
    yield takeLatest('RECREATE_BOOK', recreateBook)
    yield takeLatest('UPDATE_BOOK', updateBook)
    yield takeLatest('CONFIRM_CREATE_BOOK', createNewBook)
}
