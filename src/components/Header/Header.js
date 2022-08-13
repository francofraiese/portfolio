import './Header.css'


const Header = () => {
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 25) {
          document.querySelector("#Header")?.classList.add("scroll")
        } else {
          document.querySelector("#Header")?.classList.remove("scroll")
        }
      }
    return (
    <header className="navbar" id="Header">
        <a href="./images/CVFrancoFraiese.pdf" target="_blank"  >&lt;CV/&gt;</a>
        <a href="#aboutme">&lt;AboutMe/&gt;</a>
        <a href="#skills">&lt;Skills/&gt;</a>
        <a href="#portfolio">&lt;Portfolio/&gt;</a>
        <a href="#contact">&lt;Contact/&gt;</a>
    </header>
    )
}

export default Header