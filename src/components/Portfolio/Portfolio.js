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
        </div>
    )
}

export default Portfolio