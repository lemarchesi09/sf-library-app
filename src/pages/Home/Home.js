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
            <h2>
              Welcome to<br></br>Library App
            </h2>
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
            <p>You can read and add your own books into for all community. Enjoy it!</p>
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
