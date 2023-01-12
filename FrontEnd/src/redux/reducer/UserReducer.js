import { GET_STUDENT_BY_ADMIN, LOGIN } from "../type/UserType"

const userLoginData = {
    status: 400,
    getAllStudent: []
}

const userReducer = (state = userLoginData, action) => {
    switch (action.type) {
        case LOGIN: {
            state.status = action.statusLogin
            return { ...state }
        }
        case GET_STUDENT_BY_ADMIN: {
            let arrayStudent = []
            if (state.getAllStudent.length === 0) {
                let t = 1
                action.data.forEach((item) => {
                    arrayStudent.push({
                        "id": t,
                        "name": item.name,
                        "mssv": item.mssv,
                        "phoneNumber": item.phoneNumber,
                        "email": item.email,
                        "createdAt": item.createdAt
                    })
                    t++;
                })
            } else {
                let t = state.getAllStudent.length +1
                action.data.forEach((item) => {
                    arrayStudent.push({
                        "id": t,
                        "name": item.name,
                        "mssv": item.mssv,
                        "phoneNumber": item.phoneNumber,
                        "email": item.email,
                        "createdAt": item.createdAt
                    })
                    t++;
                })
            }
            state.getAllStudent = arrayStudent
            return {...state}
        }
        default: {
            return { ...state }
        }
    }
}

export default userReducer