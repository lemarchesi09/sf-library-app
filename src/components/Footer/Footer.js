import "./footer.css";
import "../../styles/styles.css";

export const Footer = () => {
  return (
    <div className="foot-cont">
      <div className="foot-text">
        <div className="footer__text">
          <p>
            Made by{" "}
            <a href="https://github.com/SebaDAlessandro" target="_blank" rel="noreferrer">
              Sebastian D.
            </a>{" "}
            <a href="https://github.com/lemarchesi09" target="_blank" rel="noreferrer">
              Enzo M.
            </a>{" "}
            <a href="https://github.com/CamiStefano" target="_blank" rel="noreferrer">
              Camila S.
            </a>
          </p>
        </div>
        <div className="footer__avalith">
          <p className="avalith">
            <a href="https://www.avalith.net/" className="avalith__link" target="_blank" rel="noreferrer">
              AVALITH<span className="punto">.</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
