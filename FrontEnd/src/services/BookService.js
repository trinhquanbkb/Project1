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

export const deleteBookById = async (id) => {
    return await Axios.put(`${DOMAIN_SERVER}/books/deleteBook?id=${id}`, { params: { id: id } }, {
        headers: {
            token: localStorage.getItem(TOKEN)
        }
    })
}

export const recreateBookById = async (id) => {
    return await Axios.put(`${DOMAIN_SERVER}/books/recreateBookById?id=${id}`, { params: { id: id } }, {
        headers: {
            token: localStorage.getItem(TOKEN)
        }
    })
}

export const updateBookById = async (id, values) => {
    return await Axios.put(`${DOMAIN_SERVER}/books/updateBook?id=${id}`, values,
        {
            headers: {
                token: localStorage.getItem(TOKEN)
            }
        })
}

export const createBook = async (values) => {
    return await Axios.post(`${DOMAIN_SERVER}/books/createBook`, { name: values.name, author: values.author, title: values.title, countPage: values.countPage, year: values.year, positionBook: values.positionBook },
        {
            headers: {
                token: localStorage.getItem(TOKEN)
            }
        })
}

export const borrowBook = async (idBook, userId) => {
    return await Axios.put(`${DOMAIN_SERVER}/books/borrowBook?userId=${userId}&idBook=${idBook}`, { params: { userId: userId, idBook: idBook } },
        {
            headers: {
                token: localStorage.getItem(TOKEN)
            }
        })
}

