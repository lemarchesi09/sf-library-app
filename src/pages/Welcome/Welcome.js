import "./welcome.css";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <div className="welcome-cont">
      <div className="welc-text">
        <h1>Welcome to LibraryApp</h1>
        <p>
          Find in a lot of books <span>Incredibles</span>.
        </p>
        <p>Also, you can upload your own books and increase the collection.</p>
      </div>
      <Link to="/" className="welc-btn">
        Start!
      </Link>
    </div>
  );
};
