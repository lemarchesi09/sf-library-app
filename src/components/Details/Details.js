//import { Link } from 'react-router-dom'
import moment from 'moment';
/* import image from '../assets/welcome-bg-1jpg' */
//import logo from '../../assets/images/testBook.png'
import './details.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Details = () => {
  const books = useSelector((state)=> state.books)
  const { index } = useParams()
  console.log(books[index])  

/*   function splitString(stringToSplit, separator) {
    const arrayOfStrings = stringToSplit.split(separator)
  
    console.log('The original string is: ', stringToSplit)
    console.log('The separator is: ', separator)
    console.log('The array has ', arrayOfStrings.length, ' elements: ', arrayOfStrings.join(' / '))
  } */

 /*  console.log('bookCard: ',bookCard)
  const arrayToSplit = Object.values(bookCard)
  console.log('stringToSplit: ',arrayToSplit)
  console.log('type of Autor: ',typeof(arrayToSplit[3]))
  console.log('Autor: ', arrayToSplit[3])

  const stringToSplit = arrayToSplit[3]

  const comma = ';'

  splitString(stringToSplit, comma)*/
  console.log('imagen: ',books[index].imageLink)
  

  return (
    <div className="bookCard">
      <div className="bookCard__container">

        <div className='bookCard__img-container'>
          <img className="bookCard__img" src={books[index].imageLink} alt="Img Book"/>
        </div>


        <div className="bookCard__details">
          <h2 className="property__book-title">{books[index].title}</h2>
          <h2 className="property__book"><span className="data">Author:</span> {books[index].author}</h2>
          <h2 className="property__book"><span className="data">Lenguage:</span> {books[index].lenguage}</h2>
          <h2 className="property__book"><span className="data">Pages:</span> {books[index].pages}</h2>
            <h2 className="property__book"><span className="data">Year:</span>{" "}
              {moment(books[index].year).format("DD/MM/YY")}
            </h2>
            <h2 className="property__book"><span className="data">Country:</span> {books[index].country}</h2>
            <a href={`${books[index].link}`} target='_blanck' className="property__book"><span className="data">Link:</span> {books[index].link}</a>
            {/* <h2 className="property__book synopsis"><span className="data-synopsis">Synopsis:</span> {books[index].synopsis}</h2> */}
        </div>

      </div>
      

{/*       <Link to={back}>
      </Link> */}
        <button className="button__back">back</button>

    </div>
    
  );
};
