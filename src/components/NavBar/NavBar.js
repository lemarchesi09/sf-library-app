import { Link } from "react-router-dom";
import "../../styles/styles.css";
import "./navBar.css";
import { BsSearch, BsPersonCircle } from "react-icons/bs";
import { FiBook, FiBookOpen } from "react-icons/fi";
import logo from "../../assets/images/bookstore-removebg.png";
import { useSelector, useDispatch } from "react-redux";
import { logged } from "../../features/login/loginSlice";
import { SearchBar } from "../SearchBar/SearchBar";

export const NavBar = () => {
  const usersFromStore = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const userFinded = usersFromStore.find((usuario) => usuario.active === true);
  const handleLog = (id) => {
    dispatch(logged(id));
    console.log("userFinded", id);
  };
  console.log("userFinded", userFinded);
  console.log("fuera del handle", usersFromStore);
  return (
    <nav className="navbar__container shadow-lg">
      <ul className="navbar__links container">
        <div className="navbar__item">
          <Link to="/" className="navbar__item-logo">
            <img className="navbar__item-logo-img" src={logo} alt="img logo"></img>
          </Link>
          {!userFinded ? (
            <Link to="/login" className="navbar__item-btn-login-mobil">
              <FiBook /> Login
            </Link>
          ) : (
            <p className="navbar__item-loged-mobil" onClick={() => handleLog(userFinded.id)}>
              <FiBookOpen /> Logged
            </p>
          )}
        </div>
        <SearchBar />
        {!userFinded ? (
          <Link to="/login" className="navbar__item-btn-login">
            <FiBook /> Login
          </Link>
        ) : (
          <p className="navbar__item-loged" onClick={() => handleLog(userFinded.id)}>
            <FiBookOpen /> Logged
          </p>
        )}
      </ul>
    </nav>
  );
};
