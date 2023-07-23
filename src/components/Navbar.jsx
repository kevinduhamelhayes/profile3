import "./styles/navbar.css"
import { FaGithub, FaLinkedin } from "react-icons/fa"
const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <h1 className="title-navbar">Kevin Duhamel</h1>
      </div>
      <div className="navbar-links">
        <ul className="ul-navbar">
          <li className="li-navbar">
            <a href="#Home">Home</a>
          </li>
          <li className="li-navbar">
            <a href="#About">About</a>
          </li>
          <li className="li-navbar">
            <a href="#Stack">Stack</a>
          </li>
          <li className="li-navbar">
            <a href="#Projecs">Projects</a>
          </li>
          <li className="li-navbar">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <ul className="ul-icons">
          <li className="li-navbar-icon">
            <a
              href="https://github.com/kevinduhamelhayes"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li className="li-navbar-icon">
            <a
              href="https://www.linkedin.com/in/kevin-duhamel-hayes"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
