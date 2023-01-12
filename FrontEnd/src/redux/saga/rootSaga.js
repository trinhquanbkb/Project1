import { all } from 'redux-saga/effects'
import { getUserSaga } from './UserSaga'

export function* rootSaga() {
    yield all([
        // xử lý user
        getUserSaga()

        //....
    ])
}

