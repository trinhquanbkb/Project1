import Axios from 'axios'
import { TOKEN } from '../utils/constant/data'
import { DOMAIN_SERVER } from '../utils/constant/domain'

export const login = async (mssv, password) => {
    return await Axios.post(`${DOMAIN_SERVER}/users/login`, { mssv, password })
}

export const getAllStudent = async () => {
    return await Axios.get(`${DOMAIN_SERVER}/users/getAllStudent`, {
        headers: {
            token: localStorage.getItem(TOKEN)
        }
    })
}

export const deleteStudent = async (iddb) => {
    return await Axios.put(`${DOMAIN_SERVER}/users/deleteAccount?id=${iddb}`, { params: { id: iddb } }, {
        headers: {
            token: localStorage.getItem(TOKEN)
        }
    })
}

export const registerUser = async (name, mssv, phoneNumber, email, password, userType) => {
    return await Axios.post(`${DOMAIN_SERVER}/users/registerUser`, { name, mssv, phoneNumber, email, password, userType })
}

export const updateAccount = async (iddb) => {
    return await Axios.put(`${DOMAIN_SERVER}/users/recreateAccount?id=${iddb}`, { params: { id: iddb } }, {
        headers: {
            token: localStorage.getItem(TOKEN)
        }
    })
}

export const getUserByMssv = async (mssv) => {
    return await Axios.get(`${DOMAIN_SERVER}/users/getUserByMssv?mssv=${mssv}`,
        {
            headers: {
                token: localStorage.getItem(TOKEN)
            }
        })
}