import "./styles.css";
import "../../styles/styles.css";
import imageBooks from "../../assets/images/background-main.jpg";
import imageHome from "../../assets/images/image-main.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="wrapper">
      <div className="home__wrapper">
        <div className="container home__firstSection">
          <div className="home__title">
            <h2>Welcome to Library App.</h2>
            <h3>Find in a lot of books Incredibles. Also, you can upload your own books and increase the collection.</h3>
          </div>
          <div className="home__image">
            <img src={imageBooks} alt=""></img>
          </div>
        </div>

        <div className="container home__secondSection">
          <div className="home__image">
            <img src={imageHome} alt=""></img>
          </div>
          <div className="home__paragraph">
            <p>
              Read and add in your own books into for all community. Enjoy reading books whenever and wherever you want with our multiple paltform.
            </p>
            <div className="home__container__btn">
              <button className="home__btn">
                {" "}
                <Link to="/dashboard">DISCOVER ALL</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
