import './Footer.css'
import Instagram from '../../assets/images/instagram.svg'
import Linkedin from '../../assets/images/linkedin 1.svg'
import GitHub from '../../assets/images/GITHUB 1.svg'
import FilterImg from '../../assets/images/filter 1.svg'

export default function Footer() {
  return (
    <main>
      <section>
        <div className="main" data-aos="fade-left">
          <div className="filter">
            <label>
              Filtrar
              <img src={FilterImg}></img>
              <input type="search"></input>
            </label>
            <hr />
          </div>
          <div className="drawings">
            <div className="drawing dr1 " data-aos="fade-up">
              <h1>Polvo com olhos @Dududedu</h1>
            </div>
            <div className="drawing dr2" data-aos="fade-right">
              <h1>Olho na mão @Dududedu</h1>
            </div>
          </div>
          <div className="drawings">
            <div className="drawing dr3" data-aos="fade-left">
              <h1>Peixe sem olho @Dududedu</h1>
            </div>
            <div className="drawing dr4" data-aos="fade-right">
              <h1>Peixe olhudo @Dududedu</h1>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="siteInfo" data-aos="fade-up-right">
          <div className="row">
            <div className="services">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Web design</a>
                </li>
                <li>
                  <a href="#">Development</a>
                </li>
                <li>
                  <a href="#">Hosting</a>
                </li>
              </ul>
            </div>
            <div className="about">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="company">
            <h3>Kefi Desenhos</h3>
            <p>
              Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus
              ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique
              lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
            </p>
          </div>
          <p className="copyright">KefiDesenhos © 2021</p>
        </div>
        <div className="socialMedia" data-aos="fade-up">
          <a href="https://www.instagram.com/kefidesenhos/" target="_blank">
            <img
              src={Instagram}
              alt="Instagram Logo"
              className="imgSocialMedia"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/%C3%A9rick-almeida/"
            target="_blank"
          >
            <img
              src={Linkedin}
              alt="Linkedin Logo"
              className="imgSocialMedia"
            />
          </a>
          <a href="https://github.com/ErickyAll" target="_blank">
            <img src={GitHub} alt="GitHub Logo" className="imgSocialMedia" />{' '}
          </a>
        </div>
      </footer>
    </main>
  )
}
