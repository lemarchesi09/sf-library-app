import "../styles/footer.css";
import { Link } from "react-router-dom";
export const Footer = () =>{
    return(
        
        <div className="foot-cont">
            <div className="foot-text">
                <a href="https://github.com/SebaDAlessandro">Sebastian D.</a>
                <a href="https://github.com/lemarchesi09">Enzo M.</a>
            <a href="https://www.avalith.net/"  className="avalith__link" target="_blank" rel="noreferrer"><p className="avalith">AVALITH<span className="punto">.</span></p></a>
            </div>
        </div>
    )
}