import { all } from 'redux-saga/effects'
import { getCardStudentSaga } from './CardStudentSaga'
import { getUserSaga } from './UserSaga'

export function* rootSaga() {
    yield all([
        // xử lý user
        getUserSaga(),
        //xử lý card student
        getCardStudentSaga(),
        //..
    ])
}

