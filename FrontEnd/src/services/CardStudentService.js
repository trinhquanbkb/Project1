import Axios from 'axios'
import { TOKEN } from '../utils/constant/data'
import { DOMAIN_SERVER } from '../utils/constant/domain'

export const rechargeCard = async (id, balance) => {
    return await Axios.put(`${DOMAIN_SERVER}/cardStudents/rechargeCard?id=${id}`, { balance: balance }, {
        headers: {
            token: localStorage.getItem(TOKEN)
        }
    })
}

export const findCardByUserId = async (userId) => {
    return await Axios.get(`${DOMAIN_SERVER}/cardStudents/findByUserId?userId=${userId}`, {
        headers: {
            token: localStorage.getItem(TOKEN)
        }
    })
}

