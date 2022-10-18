//import moment from 'moment';
import './details.css'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Details = () => {
  const books = useSelector((state)=> state.books)
  const { index } = useParams()
  console.log(books[index])  

  return (
    <div className="bookCard">
      <div className="bookCard__container">

        <div className='bookCard__img-container'>
          <img className="bookCard__img" src={books[index].imageLink} alt="Img Book"/>
        </div>


        <div className="bookCard__details">
          <h2 className="property__book-title">{books[index].title}</h2>
          <h2 className="property__book"><span className="data">Author:</span> {books[index].author}</h2>
          <h2 className="property__book"><span className="data">Language:</span> {books[index].language}</h2>
          <h2 className="property__book"><span className="data">Pages:</span> {books[index].pages}</h2>
          <h2 className="property__book"><span className="data">Year:</span>{" "}{books[index].year}</h2>
          <h2 className="property__book"><span className="data">Country:</span> {books[index].country}</h2>
          <a href={`${books[index].link}`} target='_blanck' className="property__book"><span className="data">Link:</span> {books[index].link}</a>
        </div>

      </div>

      <Link to={'/dashboard'}><button className="button__back">back</button></Link>
        
    </div>
    
  );
};
