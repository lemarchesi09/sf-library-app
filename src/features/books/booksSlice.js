import { createSlice } from '@reduxjs/toolkit'
import json from"../../json/books.json";

const initialState = json

const booksSlice = createSlice({
   name: 'books',
   initialState,
   reducers: {
    addBook: (state, action)=>{
        state.unshift(action.payload)
    },
    editBook: (state, action)=>{
        const { index, title, imageLink, country, year, author, synopsis } = action.payload
        //console.log(index)
        state[index].title = title
        state[index].imageLink = imageLink
        state[index].country = country
        state[index].year = year
        state[index].author = author
        state[index].synopsis = synopsis
    },
    deleteBook: (state, action)=>{
        return state.filter(book => book.title !== action.payload)
    },
   },
})


//editBooks
export const { addBook, deleteBook, editBook } = booksSlice.actions
export default booksSlice.reducer