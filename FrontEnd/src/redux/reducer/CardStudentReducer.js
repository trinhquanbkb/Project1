import { CHARGE_CARD_USERID, GET_USERID_CLICK, SUBMIT_CHARGE } from "../type/CardStudentType"

const cardStudentData = {
    userIdClick: null,
    status: 500,
    clickCharge: 0
}
const cardStudentReducer = (state = cardStudentData, action) => {
    switch (action.type) {
        case GET_USERID_CLICK: {
            state.userIdClick = action.data
            return { ...state }
        }
        case CHARGE_CARD_USERID: {
            if (action.data === 201) {
                state.status = 201
            } else {
                state.status = 500
            }
            return { ...state }
        }
        case SUBMIT_CHARGE: {
            state.clickCharge = action.data
            return { ...state }
        }
        default: {
            return { ...state }
        }
    }
}

export default cardStudentReducer