import './Contact.css'

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="linkedin">
                <a href="https://www.linkedin.com/in/francofraiese" target="_blank"><img src="./images/linkedin.png" alt="LinkedIn"/></a>
            </div>
            <div className="github">
                <a href="https://github.com/francofraiese/" target="_blank"><img src="./images/github.png" alt="Github"/></a>
            </div>
            <div className="mail">
                <a href="mailto:fraancofraiese@gmail.com"><img src="./images/gmail.png" alt="Copy email"/></a>
            </div>
        </div>
    )
}

export default Contact