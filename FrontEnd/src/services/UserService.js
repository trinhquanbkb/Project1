import Axios from 'axios'
import { DOMAIN_SERVER } from '../utils/constant/domain'

export const login = async (mssv, password) => {
    return await Axios.post(`${DOMAIN_SERVER}/users/login`, { mssv, password })
}

export const getAllStudent = async () => {
    return await Axios.get(`${DOMAIN_SERVER}/users/getAllStudent`)
}