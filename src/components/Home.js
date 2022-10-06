import { useEffect, useState } from "react";
import "../styles/home.css";
import { BookCard } from "./BookCard";

export const Home = () =>{
    //  Creacion del array de libros
    const [books, setBooks] = useState([
        {
            title: "El Señor De Los Anillos La Comunidad del Anillo",
            gender: "fantasia",
            year: 1954,
            author: "J.R.R. Tolkien",
            synopsis: "En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo Único y emprender el viaje para su destrucción en las Grietas del Destino. Consciente de la importancia de su misión, Frodo abandona la Comarca e inicia el camino hacia Mordor con la compañía de inesperada de Sam, Pippin y Merry.",
            imagen:"https://i0.wp.com/circusa.com/wp-content/uploads/2021/04/p-esdlacomunidaddelanillo.jpg",
            id:1
        },
        {
            title: "El Señor De Los Anillos Las Dos Torres",
            gender: "fantasia",
            year: 1954,
            author: "J.R.R. Tolkien",
            synopsis: " La Compañía se ha disuelto y sus integrantes emprenden caminos separados. Frodo y Sam continúan solos su viaje a lo largo del gran río Anduin, perseguidos por la sombra misteriosa de un ser extraño que también ambiciona la posesión del Anillo.",
            imagen: "https://www.curriculumnacional.cl/614/articles-76090_thumbnail.thumb_iNormal.jpg",
            id:2
        },
        {
            title: "El Señor De Los Anillos El Retorno del Rey",
            gender: "fantasia",
            year: 1954,
            author: "J.R.R. Tolkien",
            synopsis: "Hombres, elfos y enanos unen sus fuerzas para presentar batalla contra Sauron y sus huestes. Ajenos a estos preparativos, Frodo y Sam se internan cada vez más en el país de Mordor en su heroico viaje para destruir el Anillo de Poder en las Grietas del Destino.",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGtcNizXOBKQre9aAZSgnLYwhNW2x84cSUsU1LGOnVgNeCniLMmtXAFjqd0qgJl7Xuksc&usqp=CAU",
            id:3
        },
        {
            title: "El Señor De Los Anillos La Comunidad del Anillo",
            gender: "fantasia",
            year: 1954,
            author: "J.R.R. Tolkien",
            synopsis: "En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo Único y emprender el viaje para su destrucción en las Grietas del Destino. Consciente de la importancia de su misión, Frodo abandona la Comarca e inicia el camino hacia Mordor con la compañía de inesperada de Sam, Pippin y Merry.",
            imagen:"https://i0.wp.com/circusa.com/wp-content/uploads/2021/04/p-esdlacomunidaddelanillo.jpg",
            id:4
        },
        {
            title: "El Señor De Los Anillos Las Dos Torres",
            gender: "fantasia",
            year: 1954,
            author: "J.R.R. Tolkien",
            synopsis: " La Compañía se ha disuelto y sus integrantes emprenden caminos separados. Frodo y Sam continúan solos su viaje a lo largo del gran río Anduin, perseguidos por la sombra misteriosa de un ser extraño que también ambiciona la posesión del Anillo.",
            imagen: "https://www.curriculumnacional.cl/614/articles-76090_thumbnail.thumb_iNormal.jpg",
            id:5
        },
        {
            title: "El Señor De Los Anillos El Retorno del Rey",
            gender: "fantasia",
            year: 1954,
            author: "J.R.R. Tolkien",
            synopsis: "Hombres, elfos y enanos unen sus fuerzas para presentar batalla contra Sauron y sus huestes. Ajenos a estos preparativos, Frodo y Sam se internan cada vez más en el país de Mordor en su heroico viaje para destruir el Anillo de Poder en las Grietas del Destino.",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGtcNizXOBKQre9aAZSgnLYwhNW2x84cSUsU1LGOnVgNeCniLMmtXAFjqd0qgJl7Xuksc&usqp=CAU",
            id:6
        },
        
    ])
    //  Pedido a la API 
    // const getBooks = async () =>{
    //     const response = await fetch('https://rickandmortyapi.com/api/character');
    //     console.log('response' , response);
    //     const data = await response.json();
    //     console.log('data', data);
    // }

    // useEffect(()=>{
    //     getBooks()
    // },[])
    return(
        <div>
            <h1>
                LibreriApp
            </h1>
            <div className="home-cont">
                {/*Return del array y mapeo del mismo para renderizar todas las cards*/ }
                {books.map((book) =>{
                    return(
                        <BookCard book={book} />
                        
                    )
                })}
            </div>
        </div>
    )
}