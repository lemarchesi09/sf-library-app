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
        const { index, title, imageLink, country, year, author,language, pages, link } = action.payload
        //console.log(index)
        state[index].title = title
        state[index].imageLink = imageLink
        state[index].country = country
        state[index].year = year
        state[index].author = author
        state[index].language = language
        state[index].pages = pages
        state[index].link = link
    },
    deleteBook: (state, action)=>{
        return state.filter(book => book.title !== action.payload)
    },
    searchBook: (state, action) =>{
        // const newState = state.filter((book) => book.title.toUpperCase().includes(searchListo))
        state = action.payload;
        console.log('Action en SearchBook', action.payload);
        console.log('state en SearchBook', state);
        return state
    }
   },
})


//editBooks
export const { addBook, deleteBook, editBook, searchBook } = booksSlice.actions
export default booksSlice.reducer