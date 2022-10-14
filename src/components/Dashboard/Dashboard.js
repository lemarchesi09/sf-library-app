import { useEffect, useState } from "react";
import "./dashboard.css";
import json from"../../json/books.json";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


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
        Swal.fire({
            title: "Are you shure?",
            text: `You are about to delete this Book`,
            icon: "warning",
            confirmButtonText: "I'm Shure",
        }).then(()=>{
            const updBooks = books.filter(book => book.title !== title)
            setBooks(updBooks)
            console.log('Delete Book');
        })
        
    }

    // LLamado y seteo de estado
    useEffect(() =>{
        setBooks(json)
    }, [])
    console.log('books', books);
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
                        <p><span>Author: </span>{book.author}</p>
                        <img src={book.imageLink} alt="img-card" />
                        <Link to={`/details/${book.title}`}><button className="button btn-info">Info</button></Link>            
                        <div className="button-cont">
                            <button className="button btn-upd"><Link to="/update">Update</Link></button>
                            <button className="button btn-dlt" onClick={() =>{deleteBook(book.title)}}>Delete</button>
                        </div>
                    </div>

                )
            })}
        </div> 
        </div>
    )
}