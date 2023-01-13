import Axios from 'axios'
import { DOMAIN_SERVER } from '../utils/constant/domain'

export const login = async (mssv, password) => {
    return await Axios.post(`${DOMAIN_SERVER}/users/login`, { mssv, password })
}

export const getAllStudent = async () => {
    return await Axios.get(`${DOMAIN_SERVER}/users/getAllStudent`)
}

export const deleteStudent = async (iddb) => {
    return await Axios.put(`${DOMAIN_SERVER}/users/deleteStudent?id=${iddb}`)
}

export const registerUser = async (name, mssv, phoneNumber, email, password, userType) => {
    return await Axios.post(`${DOMAIN_SERVER}/users/registerUser`, {name, mssv, phoneNumber, email, password, userType})
}

export const updateAccount = async (iddb) => {
    return await Axios.put(`${DOMAIN_SERVER}/users/updateAccount?id=${iddb}`)
}