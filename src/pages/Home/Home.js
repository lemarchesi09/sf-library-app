import "./styles.css";
import "../../styles/styles.css";
import imageBooks from "../../assets/images/background-main.jpg";

export const Home = () => {
  return (
    <div className="wrapper">
      <div className="home__wrapper">
        <div className="container home__firstSection">
          <div className="home__title">
            <h2>Te damos la bienvenida a Library App</h2>
            <img className="home__image" src={imageBooks} alt=""></img>
          </div>
          <div className="home__paragraph">
            <p>Aqui podras agregar agregar tus propios libros para la comunidad.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
