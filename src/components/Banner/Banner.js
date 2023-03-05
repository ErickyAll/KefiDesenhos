import './Banner.css'
import KefiLogo from '../../assets/images/KefiLogo.svg'

function Banner() {
  return (
    <main>
      <div className="Banner">
        <div className="Banner-Title">
          <h1>
            <span>Sua</span> Galeria de Arte Online
          </h1>
          <br />
          <p>Para compartilhar e prestigiar </p>
        </div>

        <img
          src={KefiLogo}
          alt="Logo kefi"
          className="LogoKefi LogoKefi1"
          data-aos="fade-up"
        />

        <img src={KefiLogo} alt="Logo kefi" className="LogoKefi LogoKefi2 " />

        <img src={KefiLogo} alt="Logo kefi" className="LogoKefi LogoKefi3 " />

        <div className="Banner-Title2" data-aos="zoom-in-up">
          <h1>Explore o mundo</h1>
          <br />
          <p>
            Bem-vindo ao KefiDesenhos! Este é um site dedicado a todos aqueles
            que adoram arte e querem compartilhar suas criações com o mundo.
            Aqui você encontrará uma plataforma fácil e acessível para postar
            seus desenhos e ilustrações online, além de ter a oportunidade de
            interagir com outros artistas e receber feedback sobre seu trabalho.
            <br />
            No KefiDesenhos, queremos que você se sinta inspirado e motivado a
            criar cada vez mais.
            <br />
            Então, não hesite em fazer o upload de suas criações e comece a
            explorar tudo o que o KefiDesenhos tem a oferecer.
            <br />
            Mal podemos esperar para ver o que você tem a compartilhar conosco!
          </p>
        </div>
      </div>
    </main>
  )
}

export default Banner
