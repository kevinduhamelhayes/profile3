import React from "react"
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
            <img
              className="image-stack"
              src="./public/html.svg"
              alt="html-stack"
            />
          </figure>
          <figure className="container-img-stack">
            <img
              className="image-stack"
              src="./public/css.svg"
              alt="css-stack"
            />
          </figure>
          <figure className="container-img-stack">
            <img className="image-stack" src="./public/js.svg" alt="js-stack" />
          </figure>
          <figure className="container-img-stack">
            <img
              className="image-stack"
              src="./public/react.svg"
              alt="react-stack"
            />
          </figure>
          <figure className="container-img-stack">
            <img
              className="image-stack"
              src="./public/gitlab.svg"
              alt="gitlab-stack"
            />
          </figure>
          <figure className="container-img-stack">
            <img
              className="image-stack-python"
              src="./public/python.svg"
              alt="python-stack"
            />
          </figure>
          <figure className="container-img-stack">
            <img
              className="image-stack"
              src="./public/git.svg"
              alt="git-stack"
            />
          </figure>
          <figure className="container-img-stack">
            <img
              className="image-stack"
              src="./public/tailwind.svg"
              alt="tailwind-stack"
            />
          </figure>
          <figure className="container-img-stack">
            <img
              className="image-stack"
              src="./public/vscode.svg"
              alt="vscode-stack"
            />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Stack
