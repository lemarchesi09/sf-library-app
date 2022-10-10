import { useEffect, useState } from "react";
import "./dashboard.css";
import json from"../../json/books.json";
import { Link } from "react-router-dom";

export const Dashboard = () =>{
    const [books, setBooks] = useState([{}]) 

    // const getBooks = async () =>{
    //     const response = await fetch(json)
    //     console.log('response', response);
    //     const data = await response.json()
    //     console.log('data',data);
    //     setBooks(data)
    // }

    // Controlador para borrar -> Hay que traspasarlo al store
    const deleteBook = (title) =>{
        const updBooks = books.filter(book => book.title !== title)
        setBooks(updBooks)
        console.log('Delete Book');
    }

    // LLamado y seto de estado
    useEffect(() =>{
        setBooks(json)
    }, [])
    console.log('books', books);
    return(
        <div className="dashboard-cont">
        {books.map((book,index) => {
            return(
                <div key={index} className="book-item">
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    <img src={book.imageLink} />
                    <div className="button-cont">

                        <button className="button btn-upd"><Link to="/update">Update</Link></button>
                        <button className="button btn-dlt" onClick={() =>{deleteBook(book.title)}}>Delete</button>
                    </div>
                </div>

            )
        })}
       </div> 
    )
}