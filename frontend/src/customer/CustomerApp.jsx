
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/home'

// pages
import AboutUs from './pages/aboutUs'
import Menu from './pages/menu'

// componentes
import Navbar from './components/navbar'
import Footer from './components/footer'


export default function App() {
  return (
      <div className="App line-bg"> 
        <BrowserRouter>
          <Navbar/>
          <div className="pages">
            <Routes>

              <Route 
                path="/"
                element={<Home />}
              />

              <Route 
                path="/about"
                element={<AboutUs />}
              />

              <Route 
                path="/menu"
                element={<Menu />}
              />

            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
  )
}

