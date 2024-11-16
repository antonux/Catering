
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/home'

// pages
import AboutUs from './pages/aboutUs'
import Menu from './pages/menu'
import Request from './pages/request'
import Contacts from './pages/contacts'

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

              <Route 
                path="/request"
                element={<Request />}
              />

              <Route 
                path="/contacts"
                element={<Contacts />}
              />

            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
  )
}

