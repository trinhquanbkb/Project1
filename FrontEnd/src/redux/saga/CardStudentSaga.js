import { takeLatest, put } from 'redux-saga/effects'
import { STATUS_CODE } from '../../utils/constant/statusCode'
import { rechargeCard } from '../../services/CardStudentService'
import { CHARGE_CARD_USERID } from '../type/CardStudentType'

function* rechargeCardStudent(action) {
    try {
        let promise = yield rechargeCard(action.data.userId, parseInt(action.data.balance.rechargeCard))
        if (promise.status === STATUS_CODE.SUCCESS_PUT) {
            yield put({
                type: CHARGE_CARD_USERID,
                data: promise.status
            })
        }
    }
    catch (err) {
        yield put({
            type: CHARGE_CARD_USERID,
            data: 500
        })
    }
}

export function* getCardStudentSaga() {
    yield takeLatest('RECHARGE_CARD_BY_USERID', rechargeCardStudent)
}
