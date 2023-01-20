import { GET_BOOK_BORROW_BY_STUDENTID } from '../type/BookType'

const bookData = {
    listBookBorrowOfStudent: [],
    bookById: []
}
const bookReducer = (state = bookData, action) => {
    switch (action.type) {
        case GET_BOOK_BORROW_BY_STUDENTID: {
            let array = []
            action.data.forEach((item) => {
                array.push({
                    id: item.id,
                    author: item.author,
                    countPage: item.countPage,
                    dayBorrow: item.dayBorrow,
                    name: item.name,
                    positionBook:item.positionBook,
                    title: item.title,
                    userId: item.userId,
                    year: item.year
                })
            })
            state.listBookBorrowOfStudent = [...array]
            return { ...state }
        }
        case 'GET_BOOK_USERID': {
            state.bookById = [...action.data]
            return {...state}
        }
        default: {
            return { ...state }
        }
    }
}

export default bookReducer