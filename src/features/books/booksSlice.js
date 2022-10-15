import { createSlice } from '@reduxjs/toolkit'
import json from"../../json/books.json";

const initialState = json

const booksSlice = createSlice({
   name: 'books',
   initialState,
   reducers: {
    addBook: (state, action)=>{
        state.push(action.payload)
    },
    deleteBook: (state, action)=>{
        return state.filter(book => book.title !== action.payload)
    },
   },
})


//export const {addBooks, deleteBooks, editBooks} = booksSlice.actions
export const { addBook, deleteBook } = booksSlice.actions
export default booksSlice.reducer