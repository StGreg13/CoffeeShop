import "./about-page.scss"

import coffee from "../../assets/img/coffee.png"
import logoB from "../../assets/img/beans-black-logo.png";
import solimo from "../../assets/img/coffee/815O9ktyfUL.jpg";
import presto from "../../assets/img/coffee/91Ryk2gKejL.jpg";
import aromi from "../../assets/img/coffee/71qBQnpQFYL.jpg";

const AboutPage = () => {
    return (
      <main className="about">
        <div className="banner">
          <h1>For your pleasure</h1>
        </div>
        <section className="about">
          <div className="img">
            <img src={coffee} alt=""/>
          </div>
          <div className="text">
            <h2>About our beans</h2>
            <img src={logoB} alt="black logo"/>
            <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>

            <p>Afraid at highly months do things on at. Situation recommend objection do intention
              so questions.
              As greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered followed. At it went
              is song that held help face.</p>
          </div>
        </section>
        <hr style={{width: "240px", margin: "57px auto 64px auto"}}/>
        <section className="market">
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
export default AboutPage