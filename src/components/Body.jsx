import "./styles/body.css"

const Body = () => {
  return (
    <div id="About" className="body-container">
      <div className="body-title">
        <h1 className="title-body">Welcome to my portfolio</h1>
        <h1 className="title-body-gradient"> </h1>
        <p className="body-p">
          Meet me, a skilled and dynamic programmer, fully equipped to conquer
          new challenges in the realm of software development. My passion for
          cutting-edge technologies, coupled with a proven track record of
          delivering exceptional results, ensures that I bring the perfect blend
          of creativity and precision to every project I undertake.
        </p>

        <ul className="ul-body">
          What sets me apart?
          <li className="li-body">
            🌟 Proficiency in multiple programming languages, ranging from
            Python and JavaScript to CSS and beyond, enables me to thrive in
            diverse tech landscapes.
          </li>
          <li className="li-body">
            🌟 I continuously refine my skills, keeping abreast of the latest
            industry trends, making me a valuable asset for your team.
          </li>
          <li className="li-body">
            🌟 Collaborative and communicative, I excel in team environments,
            fostering seamless coordination and collective success.
          </li>
          <li className="li-body">
            Don't hesitate to take a peek at my detailed CV in PDF format. The
            future of your projects awaits!
          </li>
        </ul>
        <button className="btn-dounload">Download mi cv</button>
      </div>
    </div>
  )
}

export default Body
