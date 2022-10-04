import "../styles/footer.css";
import AvLogo from "../assets/avalith-logo-tp-sm.png";
import { Link } from "react-router-dom";
export const Footer = () =>{
    return(
        
        <div className="foot-cont">
            <div className="foot-text">
                <p>Autores:</p>
                <a href="https://github.com/SebaDAlessandro">Sebastian D'Alessandro</a>
                <a href="https://github.com/lemarchesi09">Enzo Marchesi</a>
            </div>
            <img src={AvLogo} className="foot-logo" alt="avalith-logo"/>
        </div>
    )
}