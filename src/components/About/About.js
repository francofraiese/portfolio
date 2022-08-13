import './About.css'
const About = () => {
    return (
        <div className="aboutme" id="aboutme">
            <div className="welcome">
                <br className="skip"/>
                <h4>Hi there! I'm</h4   >
                <h1>Franco Fraiese</h1>
                <h2>FullStack Developer</h2>
                <br/>
                <h4>I like to be in challenges and also </h4>
                <h4>like to be constantly <span className="green"> learning    </span> new technologies </h4>
                <h4>and <span className="green">getting better</span> in which i already know.</h4>
                <br className="skip"/>
                <h4>I’m an <span className="aqua">Argentinian</span> citizen of Mar del Plata🌞</h4>
            </div>
            <img src="./images/FrancoFraiese.png" alt="FrancoFraiese"/>
        </div>
    )
}

export default About

    