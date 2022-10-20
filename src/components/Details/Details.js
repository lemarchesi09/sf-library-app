//import moment from 'moment';
import "./details.css";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const Details = () => {
  const books = useSelector((state) => state.books);
  const { index } = useParams();
  console.log(books[index]);

  return (
    <div className="bookCard wrapper">
      <div className="bookCard__container container">
        <div className="bookCard__img-container">
          <img className="bookCard__img" src={books[index].imageLink} alt="Img Book" />
        </div>
        <div className="bookCard__details">
          <p className="property__book-title">{books[index].title}</p>
          <p className="property__book">
            <span className="data">Author:</span> {books[index].author}
          </p>
          <p className="property__book">
            <span className="data">Language:</span> {books[index].language}
          </p>
          <p className="property__book">
            <span className="data">Pages:</span> {books[index].pages}
          </p>
          <p className="property__book">
            <span className="data">Year:</span> {books[index].year}
          </p>
          <p className="property__book">
            <span className="data">Country:</span> {books[index].country}
          </p>
          <p className="property__book">
            <a href={`${books[index].link}`} target="_blank">
              <span className="data">Link:</span> {books[index].link}
            </a>
          </p>
        </div>
      </div>
      <div className="bookCard__btn__back__container container">
        <Link to={"/dashboard"}>
          <button className="button__back">Go back</button>
        </Link>
      </div>
    </div>
  );
};
