import "./styles/footer.css"
import { FaGithub, FaLinkedin } from "react-icons/fa"
const Footer = () => {
  return (
    <nav className="footer-container">
      <div className="footer-logo">
        <h1 className="title-footer">Kevin Duhamel</h1>
      </div>
      <div className="footer-links">
        <ul className="ul-footer">
          <li className="li-footer">home</li>
          <li className="li-footerr">about</li>
          <li className="li-footer">stack</li>
          <li className="li-footer">projects</li>
          <li className="li-footer">contact</li>
        </ul>
        <ul className="footer-icons">
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
export default Footer
