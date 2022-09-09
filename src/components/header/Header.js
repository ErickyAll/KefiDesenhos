import './Header.css'
import kefiUserImg from '../../assets/images/iconKefiUser.svg'
import SearchIcon from '../../assets/images/Search_Icon.svg'
import './HeaderM.css'

function Header() {
  return (
    <div>
      <header data-aos="fade-up">
        <nav>
          <div className="headerDesktop">
            <a className="textHeader1 textHeader">Sobre</a>

            <a className="textHeader2 textHeader">KefiDesenhos</a>

            <div className="userIcons">
              <img alt="Kefi USer" src={kefiUserImg} className="imgIcon" />
            </div>

            <a className="textHeader3 textHeader">Suporte</a>

            <div className="SearchBox">
              <img src={SearchIcon} className="SearchLabel" alt="Lupa" />

              <input
                id="searchIpt"
                type="search"
                className="textHeader"
                placeholder="Search..."
              />
            </div>
          </div>

          <div className="wrapper">
            <div className="checkbox">
              <input type="checkbox" id="toggle" />
              <div className="checkbox-wrapper">
                <label className="checkbox" for="toggle">
                  <div className="trace"></div>
                  <div className="trace"></div>
                  <div className="trace"></div>
                </label>

                <header className="headerMobile">
                  <nav className="menu ">
                    <div className="SearchBoxM">
                      <img
                        src={SearchIcon}
                        className="SearchLabelM"
                        alt="Lupa"
                      />

                      <input
                        id="searchIptM"
                        type="search"
                        className="menu-text"
                        placeholder="Search..."
                      />
                    </div>
                    <a className="menu-text">Sobre</a>
                    <a className="menu-text">Inicio</a>
                    <a className="menu-text">Suporte</a>
                    <a className="menu-text">Login</a>
                  </nav>
                </header>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
