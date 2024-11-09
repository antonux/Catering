
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/home'
import AboutUs from './pages/aboutUs'
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

            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
  )
}

