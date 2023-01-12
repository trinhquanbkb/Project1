import { takeLatest, put } from 'redux-saga/effects'
import { login, getAllStudent } from '../../services/UserService'
import { LOGIN, GET_STUDENT_BY_ADMIN } from '../type/UserType'
import { TOKEN } from '../../utils/constant/data'

function* loginAdmin(action) {
    try {
        let promise = yield login(action.userLogin.mssv, action.userLogin.password)
        if (promise) {
            localStorage.setItem(TOKEN, promise.data.token)
            yield put({
                type: LOGIN,
                statusLogin: promise.status
            })
        }
    } catch (err) {

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

export function* getUserSaga() {
    yield takeLatest('LOGIN_USER', loginAdmin)
    yield takeLatest('GET_ALL_STUDENT', getAllStudentSaga)
}
