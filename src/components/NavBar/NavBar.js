import { Link } from "react-router-dom";
import "./navBar.css";
import { BsSearch, BsPersonCircle } from "react-icons/bs";
import {FiBook, FiBookOpen} from "react-icons/fi";
import logo from "../../assets/images/bookstore-removebg.png";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const usersFromStore = useSelector((state)=> state.users)
  return (
    <div className="navbar__container">
      <ul className="navbar__links">
        <div className="navbar__item">
          <Link to="/" className="navbar__item-logo">
            <img className="navbar__item-logo-img" src={logo} alt="img logo"></img>
          </Link>
          {usersFromStore.active === false ?
          <Link to="/login" className="navbar__item-btn-login-mobil">
              <FiBook /> Login
          </Link>
          :  <p><FiBookOpen/> Logeado</p>}
        </div>
        <div className="navbar__item-search-container">
          <li className="navbar__item-search">
            <input className="navbar__item-search-input" type="text" name="search" placeholder="Search" />
          </li>
          <li className="navbar__item-btn-search">
            <BsSearch />
          </li>
        </div>
        {usersFromStore.active === false ? 
        <Link to="/login" className="navbar__item-btn-login">
          <FiBook /> Login
        </Link>
        : <p><FiBookOpen/> Logeado</p>}

        {/*****************/}
        {/*<Link to='/book'>AddBook</Link>  <------BORRAR!! */}
        {/*****************/}
      </ul>
    </div>
  );
};
