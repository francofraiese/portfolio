import About from "../About/About.js";
import Contact from "../Contact/Contact.js";
import Header from "../Header/Header.js";
import Portfolio from "../Portfolio/Portfolio.js";
import Skills from "../Skills/Skills.js";
import './Home.css'

const Home = () => {
    return (
    <div className="home">
        <Header/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
    </div>  
    )
}

export default Home