import "./welcome.css";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <div className="welcome-cont">
      <div className="welc-text">
        <h1>Bienvenid@s a LibreriApp</h1>
        <p>
          Encontra un listado de libros <span>Increíbles</span>
        </p>
        <p>También podes subir tus libros y agrandar la colección</p>
      </div>
      <Link to="/" className="welc-btn">
        Comenzar !
      </Link>
    </div>
  );
};
