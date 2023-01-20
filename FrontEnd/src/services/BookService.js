import Axios from 'axios'
import { TOKEN } from '../utils/constant/data'
import { DOMAIN_SERVER } from '../utils/constant/domain'

export const historyBookBorrowOfStudent = async (id) => {
    return await Axios.put(`${DOMAIN_SERVER}/books/historybookborrowofstudent?id=${id}`, { params: { id: id } }, {
        headers: {
            token: localStorage.getItem(TOKEN)
        }
    })
}

export const getAllBooks = async () => {
    return await Axios.get(`${DOMAIN_SERVER}/books/getAllBook`, {
        headers: {
            token: localStorage.getItem(TOKEN)
        }
    })
}