import "./styles/header.css"
const Header = () => {
  return (
    <header className="header-container">
      <div className="header-tittle">
        <h1 className="title-header">Hi! my name is Kevin Duhamel</h1>
        <h2 className="subtitle-header">I'm a Full Stack Developer</h2>
      </div>
      <div className="header-logo">
        <figure className="profile-header">
          <img
            className="img-header"
            src="/profile-header.jpg"
            alt="aqui va mi logo"
          />
        </figure>
      </div>
    </header>
  )
}

export default Header
