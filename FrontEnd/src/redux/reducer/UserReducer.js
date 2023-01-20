import { DELETE_STUDENT_SAGA, GET_STUDENT_BY_ADMIN, LOGIN, UPDATE_ACCOUNT } from "../type/UserType"
import { STATUS_CODE } from '../../utils/constant/statusCode'

const userLoginData = {
    dataLogin: {},
    status: 400,
    getAllStudent: []
}

const userReducer = (state = userLoginData, action) => {
    switch (action.type) {
        case LOGIN: {
            state.status = action.data.statusLogin
            state.dataLogin = {...action.data.dataLogin}
            return { ...state }
        }
        case GET_STUDENT_BY_ADMIN: {
            let arrayStudent = []
            if (state.getAllStudent.length === 0) {
                let t = 1
                action.data.forEach((item) => {
                    arrayStudent.push({
                        "iddb": item.id,
                        "id": t,
                        "name": item.name,
                        "mssv": item.mssv,
                        "phoneNumber": item.phoneNumber,
                        "email": item.email,
                        "createdAt": item.createdAt,
                        "isDelete": item.isDelete,
                        "userType": item.userType
                    })
                    t++;
                })
            } else {
                let t = state.getAllStudent.length + 1
                action.data.forEach((item) => {
                    arrayStudent.push({
                        "iddb": item.id,
                        "id": t,
                        "name": item.name,
                        "mssv": item.mssv,
                        "phoneNumber": item.phoneNumber,
                        "email": item.email,
                        "createdAt": item.createdAt,
                        "isDelete": item.isDelete,
                        "userType": item.userType
                    })
                    t++;
                })
            }
            state.getAllStudent = arrayStudent
            return { ...state }
        }
        case DELETE_STUDENT_SAGA: {
            let array = []
            if (action.data.status === STATUS_CODE.SUCCESS_PUT){
                state.getAllStudent.forEach((item) =>{
                    if(item.iddb === action.data.iddb){
                        item.isDelete = 1
                    }
                    array.push(item)
                })
            }
            state.getAllStudent = [...array]
            return {...state}
        }
        case UPDATE_ACCOUNT: {
            let array = []
            if (action.data.status === STATUS_CODE.SUCCESS_PUT){
                state.getAllStudent.forEach((item) =>{
                    if(item.iddb === action.data.iddb){
                        item.isDelete = 0
                    }
                    array.push(item)
                })
            }
            state.getAllStudent = [...array]
            return {...state}
        }
        default: {
            return { ...state }
        }
    }
}

export default userReducer