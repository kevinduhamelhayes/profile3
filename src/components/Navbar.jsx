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
          <li className="li-navbar">home</li>
          <li className="li-navbar">about</li>
          <li className="li-navbar">stack</li>
          <li className="li-navbar">projects</li>
          <li className="li-navbar">contact</li>
        </ul>
        <ul className="navbar-icons">
          <li className="icons">
            <FaGithub />
          </li>
          <li className="icons">
            <FaLinkedin />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
