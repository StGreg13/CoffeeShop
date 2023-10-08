import './App.css'


import { Routes, Route, Link } from 'react-router-dom'
import MainPage from './components/main-page/main-page.jsx'
import AboutPage from "./components/about-page/about-page.jsx";
import MarketPage from "./components/market-page/market-page.jsx";
import Notfoudpage from "./components/notfound-page/notfound-page.jsx";

function App() {
  return (
    <>
        <header>
            <Link to="/">1</Link>
            <Link to="/market">2</Link>
            <Link to="/about">3</Link>
        </header>

        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/market' element={<MarketPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='*' element={<Notfoudpage/>}/>
        </Routes>
    </>
  )
}

export default App
