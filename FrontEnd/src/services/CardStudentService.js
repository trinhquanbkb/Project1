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
