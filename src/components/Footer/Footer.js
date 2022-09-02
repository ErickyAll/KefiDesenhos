import './Footer.css'
import Instagram from '../../assets/images/instagram.svg'
import Linkedin from '../../assets/images/linkedin 1.svg'
import GitHub from '../../assets/images/GITHUB 1.svg'
import FilterImg from '../../assets/images/filter 1.svg'

export default function Footer() {
  return (
    <main>
      <section>
        <div className="main">
          <div className="filter">
            <label>
              Filtrar
              <img src={FilterImg}></img>
              <input type="search"></input>
            </label>
            <hr />
          </div>
          <div className="drawings">
            <div className="drawing dr1 ">
              <h1>Polvo com olhos @Dududedu</h1>
            </div>
            <div className="drawing dr2">
              <h1>Olho na mão @Dududedu</h1>
            </div>
          </div>
          <div className="drawings">
            <div className="drawing dr3">
              <h1>Peixe sem olho @Dududedu</h1>
            </div>
            <div className="drawing dr4">
              <h1>Peixe olhudo @Dududedu</h1>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <img
          src={Instagram}
          alt="Instagram Logo"
          className="imgSocialMedia"
        ></img>
        <img
          src={Linkedin}
          alt="Linkedin Logo"
          className="imgSocialMedia"
        ></img>
        <img src={GitHub} alt="GitHub Logo" className="imgSocialMedia"></img>
      </footer>
    </main>
  )
}
