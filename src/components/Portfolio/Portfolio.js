import './Portfolio.css'

const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            <div className="frikipedia">
                <a href="http://frikipedia.vercel.app" target="_blank" title="Frikipedia">
                <h1>FRIKIPEDIA</h1>
                </a>
                <a href="http://frikipedia.vercel.app" target="_blank" title="Frikipedia">
                    <img src="./images/frikipedia.png" alt="Frikipedia"/>
                </a>
                <h3>SPA for searching games by their platforms and genres </h3>
            </div>
            <div className="rework">
                <a href="http://re-work-ten.vercel.app" target="_blank" title="REwork">
                <h1>REwork</h1>
                </a>
                <a href="http://re-work-ten.vercel.app" target="_blank" title="REwork">
                    <img src="./images/Rework.jpg" alt="REwork"/>
                </a>
                <h3>Working-Social Network to connect freelancers</h3>
                <h3> with people who needs to meet a need.</h3>
            </div>
            <div className="madeira">
                <a href="https://madeiraproject.vercel.app/" target="_blank" title="Madeira Project">
                <h1>Madeira Project</h1>
                </a>
                <a href="https://madeiraproject.vercel.app/" target="_blank" title="Madeira Project">
                    <img src="./images/Madeira.png" alt="REwork"/>
                </a>
                <h3>A website for a card videogame where players can create</h3>
                <h3>accounts, view other players' profiles and check ranking.</h3>
            </div>
        </div>
    )
}

export default Portfolio