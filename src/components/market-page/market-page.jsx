import "./market-page.scss"

import logoB from "../../assets/img/beans-black-logo.png";
import withCoffee from "../../assets/img/girl-with-coffee.png"
import solimo from "../../assets/img/coffee/815O9ktyfUL.jpg";
import presto from "../../assets/img/coffee/91Ryk2gKejL.jpg";
import aromi from "../../assets/img/coffee/71qBQnpQFYL.jpg";

const MarketPage = () => {
    return (
      <main className="market">
        <div className="banner">
          <h1>Our Coffee</h1>
        </div>
        <section className="about">
          <div className="img">
            <img src={withCoffee} alt=""/>
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
          <div className="search-panel">
            <div className="search">
              <label htmlFor="search">Lookiing&nbsp;for</label>
              <input type="text"
                     id="search"
                     className="form-control search-input"
                     placeholder="start typing here..."
              />
            </div>
            <div className="filter">
              <Filter/>
            </div>
          </div>
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

const Filter = (props) => {
  const buttonsData = [
    {name: 'brazil', label: "Brazil"},
    {name: 'kenya', label: "Kenya"},
    {name: 'columbia', label: "Columbia"},
  ]

  const buttons = buttonsData.map(({name, label}) => {
    const active = name === 'brazil'
    const clazz = active ? 'btn-dark' : 'btn-outline-dark'
    return (
      <button
        type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    )
  })
  return (
    <>
      <p>Or&nbsp;filter</p>
      <div className='btn-group'>
        {buttons}
      </div>
    </>
  )
}

export default MarketPage