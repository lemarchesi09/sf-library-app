import "../styles/bookCard.css"

export const BookCard = ({book}) =>{
    // Intento poner la imagen como fondo de la tarjeta
    // const bookCard = document.querySelector('.book-card')
    // console.log(book.imagen);
    // bookCard.style.backgroundImage = `url("${book.imagen}")`
    return(
        <div key={book.id} className="book-card">
            <div className="text-card">
                <h4>{book.title}</h4>
            </div>
            <div>
                <img src={book.imagen} />
                <p>{book.author}</p>

            </div>
        </div>
    )
}