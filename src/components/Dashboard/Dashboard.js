//import { useEffect, useState } from "react";
import "./dashboard.css";
//import json from"../../json/books.json";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { deleteBook } from '../../features/books/booksSlice'


export const Dashboard = () =>{
    //const [books, setBooks] = useState([{}]) 

    const books = useSelector((state)=> state.books)

    const dispatch = useDispatch()

    // const getBooks = async () =>{
    //     const response = await fetch(json)
    //     console.log('response', response);
    //     const data = await response.json()
    //     console.log('data',data);
    //     setBooks(data)
    // }

    // Controlador para borrar -> Hay que traspasarlo al store
    const handleDelete = (title) =>{
        dispatch(
            deleteBook(title)
          )
    }

    // LLamado y seteo de estado
/*     useEffect(() =>{
        setBooks(booksFromStore)
    }, []) */
    //console.log('books', books);
    return(
        <div className="dashboard">
            <div className="dashboard-text">
                <h2>Libros</h2>
                <button className="btn-crt"><Link to="/createBook">ADD Book</Link></button>
            </div>
            <div className="dashboard-cont">
            {books.map((book,index) => {
                return(
                    <div key={index} className="book-item">
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        <img src={book.imageLink} alt="img-card" />
                        <Link to={`/details/${index}`}><button className="button btn-info">More info</button></Link>            
                        <div className="button-cont">
                            <button className="button btn-upd"><Link to="/update">Update</Link></button>
                            <button className="button btn-dlt" onClick={() =>{handleDelete(book.title)}}>Delete</button>
                        </div>
                    </div>

                )
            })}
        </div> 
        </div>
    )
}