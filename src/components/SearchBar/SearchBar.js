import { BsSearch} from "react-icons/bs";
import "./searchBar.css"
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {searchBook} from "../../features/books/booksSlice";

export const SearchBar = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const books = useSelector((state) => state.books)
    const [search, setSearch] = useState('')

    const tiping = (e) =>{
        setSearch(e.target.value)
        console.log('value onchange', e.target.value);
    }
    const searchMovie = (search) =>{
        const searchListo = search.toUpperCase();

        const searchResult = books.filter((book) => book.title.toUpperCase().includes(searchListo))

        console.log('Book Finded', searchResult);
        console.log('Handlesubmit', searchListo);
        // dispatch(searchBook(searchResult))
        // navigate('/dashboard')
    }

    console.log('Search en useState', search);
    return (
        <div className="searchbar__item-search-container">
          <li className="searchbar__item-search">
            <input className="searchbar__item-search-input" type="text" name="search" placeholder="Search" value={search} onChange={tiping}/>
          </li>
          <li className="searchbar__item-btn-search" onClick={() => {searchMovie(search)}}>
            <BsSearch />
          </li>
        </div>
    )
}

