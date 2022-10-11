import "./footer.css";
import "../../styles/styles.css";

export const Footer = () => {
  return (
    <div className="foot-cont">
      <div className="foot-text">
        <div className="footer__text">
          <p>Made by</p>
          <p>
            <a href="https://github.com/SebaDAlessandro">Sebastian D.</a>
          </p>
          <p>
            <a href="https://github.com/lemarchesi09">Enzo M.</a>
          </p>
          <p>
            <a href="https://github.com/CamiStefano">Camila S.</a>
          </p>
        </div>
        <div className="footer__avalith">
          <a href="https://www.avalith.net/" className="avalith__link" target="_blank" rel="noreferrer">
            <p className="avalith">
              AVALITH<span className="punto">.</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};
