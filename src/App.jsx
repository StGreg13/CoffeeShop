import './App.scss'

import { Routes, Route, Link } from 'react-router-dom'
import MainPage from './components/main-page/main-page.jsx'
import AboutPage from "./components/about-page/about-page.jsx";
import MarketPage from "./components/market-page/market-page.jsx";
import Notfoudpage from "./components/notfound-page/notfound-page.jsx";
import logoB from "./assets/img/beans-black-logo.png";

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Coffee house</Link>
          <Link to="/market">Our coffee</Link>
          <Link to="/about">For you pleasure</Link>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/market' element={<MarketPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='*' element={<Notfoudpage/>}/>
      </Routes>

      <footer>
        <nav>
          <Link to="/">Coffee house</Link>
          <Link to="/market">Our coffee</Link>
          <Link to="/about">For you pleasure</Link>
        </nav>
        <img src={logoB} alt="black logo"/>
      </footer>
    </>
  )
}

export default App
