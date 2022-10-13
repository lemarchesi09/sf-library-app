//import { Link } from 'react-router-dom'
import moment from 'moment';
/* import image from '../assets/welcome-bg-1jpg' */
import logo from '../../assets/images/testBook.png'
import './details.css'

export const Details = () => {
  const bookCard = {
    title: "La vida invisible de Addie LaRue",
    gender: "Literatura fantástica, Ficción histórica, Fantasía histórica",
    year: "2020",
    author: "V. E. Schwab; seba dalessandro",
    synopsis:
      "Una de las novelas más esperadas de 2020. Un libro autoconclusivo perfecto para los lectores de The Time's Traveler Wife.Una vida que nadie recuerda. Una historia que nunca olvidarás. Tras hacer un pacto con el diablo, Addie entrega su alma a cambio de la inmortalidad. Sin embargo, ningún trato faustiano está exento de consecuencias: el diablo le entregará la inmortalidad que tanto desea, pero le quitará algo que ella anhelará durante toda su existencia: la posibilidad de ser recordada. Addie abandona su pequeño pueblo natal en la Francia del siglo xviii y comienza un viaje que la lleva por todo el mundo, mientras aprende a vivir una vida en la que nadie la recuerda y todo lo que posee acaba perdido o roto. Durante trescientos años, Addie LaRue no será más que la musa de numerosos artistas a lo largo de la historia, y tendrá que aprender a enamorarse de nuevo cada día, y a ser olvidada a la mañana siguiente. Su único compañero en este viaje es su oscuro demonio de hipnóticos ojos verdes, quien la visita cada año en el día del aniversario de su trato. Completamente sola, a Addie no le queda más remedio que enfrentarse a él, comprenderlo y, tal vez, ganarle la partida. Pero un día, en una librería de segunda mano de Manhattan, Addie conoce a alguien que pone su mundo del revés... Por primera vez, alguien la recuerda. ¿Será este el punto final de la vida de Addie LaRue? ¿O tan solo serán puntos suspensivos?",
    id: "f9dc02d7-e4bb-44e3-b55a-7be910a1dd48",
    //y la imagen??? <---- falta agregar este input en el componente Create Book
  };
  

  function splitString(stringToSplit, separator) {
    const arrayOfStrings = stringToSplit.split(separator)
  
    console.log('The original string is: ', stringToSplit)
    console.log('The separator is: ', separator)
    console.log('The array has ', arrayOfStrings.length, ' elements: ', arrayOfStrings.join(' / '))
  }

  console.log('bookCard: ',bookCard)
  const arrayToSplit = Object.values(bookCard)
  console.log('stringToSplit: ',arrayToSplit)
  console.log('type of Autor: ',typeof(arrayToSplit[3]))
  console.log('Autor: ', arrayToSplit[3])

  const stringToSplit = arrayToSplit[3]

  const comma = ';'

  splitString(stringToSplit, comma)
  

  return (
    <div className="bookCard">
      <div className="bookCard__container">

        <h2 className="property__book-title">{bookCard.title}</h2>
        <h2 className="property__book"><span className="data-author">Author:</span> {bookCard.author}</h2>

        <div className='bookCard__img-container'>
          <img className="bookCard__img" src={logo} alt="Img Book"/>
        </div>

        <div className="bookCard__details">
          <h2 className="property__book"><span className="data-year">Year:</span>{" "}
            {moment(bookCard.year).format("DD/MM/YY")}
          </h2>
          <h2 className="property__book"><span className="data-gender">Gender:</span> {bookCard.gender}</h2>
          <h2 className="property__book synopsis"><span className="data-synopsis">Synopsis:</span> {bookCard.synopsis}</h2>
        </div>

      </div>
      

{/*       <Link to={back}>
      </Link> */}
        <button className="button__back">back</button>

    </div>
    
  );
};
