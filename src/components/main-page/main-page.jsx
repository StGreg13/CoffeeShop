import './main-page.scss'
import logo from '../../assets/img/beans-white-logo.png'
import logoB from '../../assets/img/beans-black-logo.png'
import solimo from '../../assets/img/coffee/815O9ktyfUL.jpg'
import presto from '../../assets/img/coffee/91Ryk2gKejL.jpg'
import aromi from '../../assets/img/coffee/71qBQnpQFYL.jpg'

const MainPage = () => {
  return (
    <main className="main">
      <div className="banner">
        <h1>Everything you love about Coffee</h1>
        <img src={logo} alt="logo"/>
        <h2>We makes every day full of energy and taste <br/>
          Want try our beans?
        </h2>
        <button>More</button>
      </div>
      <section className="about">
        <h2>About Us</h2>
        <img src={logoB} alt="black logo"/>
        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
          Afraid at highly months do things on at. Situation recommend objection do intention
          so questions. As greatly removed calling pleased improve an. Last ask him cold feel
          met spot shy want. Children me laughing we prospect answered followed. At it went
          is song that held help face.</p>
        <p>Now residence dashwoods she excellent you. Shade being under his bed her, Much
          read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
          horrible but confined day end marriage. Eagerness furniture set preserved far
          recommend. Did even but nor are most gave hope. Secure active living depend son
          repair day ladies now.</p>
      </section>
      <section className="best">
        <h2>Our best</h2>
        <div className="items">
          <div className="item">
            <div className="img">
              <img src={solimo} alt="Solimo Coffee Beans 2 kg"/>
            </div>
            <p className="name">Solimo Coffee Beans 2 kg</p>
            <p className="cost">10.73$</p>
          </div>
          <div className="item">
            <div className="img">
              <img src={presto} alt="Presto Coffee Beans 1 kg"/>
            </div>
            <p className="name">Presto Coffee Beans 1 kg</p>
            <p className="cost">15.99$</p>
          </div>
          <div className="item">
            <div className="img">
              <img src={aromi} alt="AROMISTICO Coffee 1 kg"/>
            </div>
            <p className="name">AROMISTICO Coffee 1 kg</p>
            <p className="cost">6.99$</p>
          </div>
        </div>
      </section>
    </main>
  )
}
export default MainPage