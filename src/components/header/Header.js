import './Header.css'
import kefiUserImg from '../../assets/images/iconKefiUser.svg'
import SearchIcon from '../../assets/images/Search_Icon.svg'

function Header() {
  return (
    <div>
      <header>
        <nav>
          <div className="headerDesktop">
            <p className="textHeader1 textHeader">Sobre</p>

            <p className="textHeader2 textHeader">KefiDesenhos</p>

            <div className="userIcons">
              <img alt="Kefi USer" src={kefiUserImg} className="imgIcon" />
            </div>

            <p className="textHeader3 textHeader">Suporte</p>

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
              <label className="checkbox" for="toggle">
                <div className="trace"></div>
                <div className="trace"></div>
                <div className="trace"></div>
              </label>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
