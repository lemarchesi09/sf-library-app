import { configureStore } from "@reduxjs/toolkit";
import booksReducer from '../features/books/booksSlice'
import loginReducer from '../features/login/loginSlice'

export const store = configureStore({
    reducer: {
        books: booksReducer,
        users: loginReducer,
    }
})