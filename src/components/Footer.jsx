import "./styles/footer.css"
import { FaGithub, FaLinkedin } from "react-icons/fa"
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <ul className="ul-footer">
          <li className="li-footer">
            <a href="#Home">Home</a>
          </li>
          <li className="li-footer">
            <a href="#About">About</a>
          </li>
          <li className="li-footer">
            <a href="#Stack">Stack</a>
          </li>
          <li className="li-footer">
            <a href="#Projecs">Projects</a>
          </li>
          <li className="li-footer">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <ul className="footer-icons">
          <li className="icons">
            <a href="https://github.com/kevinduhamelhayes"
              target="_blank"
              rel="noreferrer">
              <FaGithub />
            </a>
          </li>
          <li className="icons">
            <a href="https://www.linkedin.com/in/kevin-duhamel-hayes"
              target="_blank"
              rel="noreferrer">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-logo">
        <p className="title-footer">
          sitio construido con amor para ti con REACT
        </p>
      </div>
    </footer>
  )
}
export default Footer
