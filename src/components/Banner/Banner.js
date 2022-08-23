import './Banner.css'
import KefiLogo from '../../assets/images/KefiLogo.svg'

function Banner() {
  return (
    <main>
      <div className="Banner">
        <div className="Banner-Title">
          <h1>Sua galeria de Arte Online</h1>
          <br />
          <p>Para compartilhar e prestigiar </p>
        </div>

        <img src={KefiLogo} alt="Logo kefi" className="LogoKefi" />

        <div className="Banner-Title2">
          <h1>Explore o mundo</h1>
          <br />
          <p>
            Lorem Ipsum itext of the printing and industry. Lorem Ipsum has been
            the industry's ever since the 1500s,g industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown when an unknown
          </p>
        </div>
      </div>
    </main>
  )
}

export default Banner
