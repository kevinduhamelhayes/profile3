
import "./styles/stack.css"

const Stack = () => {
  return (
    <div id="Stack" className="container-stack">
      <div className="title-stack-container">
        <h1 className="title-stack">Stack</h1>
        <h2 className="subtitlestack">
          I'm a Full Stack Developer, I have experience with the following
        </h2>
      </div>
      <div className="stack-container-icons">
        <div className="stack-icons">
          <figure className="container-img-stack">
            <img className="image-stack" src="/html.svg" alt="html-stack" />
          </figure>
          <figure className="container-img-stack">
            <img className="image-stack" src="/css.svg" alt="css-stack" />
          </figure>
          <figure className="container-img-stack">
            <img className="image-stack" src="/js.svg" alt="js-stack" />
          </figure>
          <figure className="container-img-stack">
            <img className="image-stack" src="/react.svg" alt="react-stack" />
          </figure>
          <figure className="container-img-stack">
            <img className="image-stack" src="/gitlab.svg" alt="gitlab-stack" />
          </figure>
          <figure className="container-img-stack">
            <img
              className="image-stack-python"
              src="/python.svg"
              alt="python-stack"
            />
          </figure>
          <figure className="container-img-stack">
            <img className="image-stack" src="/git.svg" alt="git-stack" />
          </figure>
          <figure className="container-img-stack">
            <img
              className="image-stack"
              src="/tailwind.svg"
              alt="tailwind-stack"
            />
          </figure>
          <figure className="container-img-stack">
            <img className="image-stack" src="/vscode.svg" alt="vscode-stack" />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Stack
