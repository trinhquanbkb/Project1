import { takeLatest, put } from 'redux-saga/effects'
import { login, getAllStudent, deleteStudent, registerUser, updateAccount, registerAdmin } from '../../services/UserService'
import { LOGIN, GET_STUDENT_BY_ADMIN, DELETE_STUDENT_SAGA, UPDATE_ACCOUNT, STATUS_REGISTER_ADMIN } from '../type/UserType'
import { TOKEN } from '../../utils/constant/data'
import { STATUS_CODE } from '../../utils/constant/statusCode'



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

function* registerAdminSaga(action){
    try {
        const values = {
            name: action.data.name,
            password: action.data.password,
            email: action.data.email,
            phoneNumber: action.data.phoneNumber,
            mssv: action.data.mssv
        }
        let promise = yield registerAdmin(values)
        if(promise.status === STATUS_CODE.SUCCESS_PUT){
            yield put({
                type: STATUS_REGISTER_ADMIN,
                data: STATUS_CODE.SUCCESS_PUT
            })
        }
    } catch (error) {
        yield put({
            type: STATUS_REGISTER_ADMIN,
            data: STATUS_CODE.SERVER_ERROR
        })
    }
}

export function* getUserSaga() {
    yield takeLatest('LOGIN_USER', loginAdmin)
    yield takeLatest('GET_ALL_STUDENT', getAllStudentSaga)
    yield takeLatest('DELETE_STUDENT', deleteStudentSaga)
    yield takeLatest('REGISTER_USER', registerSaga)
    yield takeLatest('UPDATE_STUDENT', updateStudent)
    yield takeLatest('GET_DATA_BOOK_BY_USERID', getBookById)
    yield takeLatest('CONFIRM_REGISTER_ADMIN', registerAdminSaga)
}
