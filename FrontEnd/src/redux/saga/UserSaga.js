import { takeLatest, put } from 'redux-saga/effects'
import { login, getAllStudent, deleteStudent, registerUser, updateAccount } from '../../services/UserService'
import { getAllBooks } from '../../services/BookService'
import { LOGIN, GET_STUDENT_BY_ADMIN, DELETE_STUDENT_SAGA, UPDATE_ACCOUNT } from '../type/UserType'
import { TOKEN } from '../../utils/constant/data'
import { GET_BOOK_BORROW_BY_STUDENTID } from '../type/BookType'


function* loginAdmin(action) {
    try {
        let promise = yield login(action.userLogin.mssv, action.userLogin.password)
        if (promise) {
            localStorage.setItem(TOKEN, promise.data.token)
            yield put({
                type: LOGIN,
                data: {
                    statusLogin: promise.status,
                    dataLogin: {
                        token: promise.data.token
                    }
                }
            })
        }
    } catch (err) {
        localStorage.removeItem(TOKEN)
        yield put({
            type: LOGIN,
            data: {
                statusLogin: '400',
            }
        })
    }
}

function* getAllStudentSaga() {
    try {
        let promise = yield getAllStudent()
        yield put
            ({
                type: GET_STUDENT_BY_ADMIN,
                data: promise.data
            })
    } catch (error) {
    }
}

function* deleteStudentSaga(action) {
    try {
        let promise = yield deleteStudent(action.id)
        yield put
            ({
                type: DELETE_STUDENT_SAGA,
                data: {
                    status: promise.status,
                    iddb: action.id
                }
            })
    } catch (error) {

    }
}

function* registerSaga(action) {
    try {
        yield registerUser(action.dataRegister.name, action.dataRegister.mssv, action.dataRegister.phoneNumber, action.dataRegister.email, action.dataRegister.password, action.dataRegister.userType)
    } catch (error) {

    }
}

function* updateStudent(action) {
    try {
        let promise = yield updateAccount(action.id)
        yield put
            ({
                type: UPDATE_ACCOUNT,
                data: {
                    status: promise.status,
                    iddb: action.id
                }
            })
    } catch (error) {

    }
}

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

function* getBookById(action) {
    try {
        yield put({
            type: 'GET_BOOK_USERID',
            data: action.data
        })
    }
    catch (err) {

    }
}

export function* getUserSaga() {
    yield takeLatest('LOGIN_USER', loginAdmin)
    yield takeLatest('GET_ALL_STUDENT', getAllStudentSaga)
    yield takeLatest('DELETE_STUDENT', deleteStudentSaga)
    yield takeLatest('REGISTER_USER', registerSaga)
    yield takeLatest('UPDATE_STUDENT', updateStudent)
    yield takeLatest('GET_BOOK_BORROW_STUDENT', getBookBorrowStudent)
    yield takeLatest('GET_DATA_BOOK_BY_USERID', getBookById)
}
