
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/home'

// pages
import AboutUs from './pages/aboutUs'
import Menu from './pages/menu'
import Request from './pages/request'
import Contacts from './pages/contacts'
import Confirmation from './pages/confirmation'
import RequestTracking from './pages/requestTracking'

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
                path="/request/tracking"
                element={<RequestTracking />}
              />

              <Route 
                path="/contacts"
                element={<Contacts />}
              />

              <Route 
                path="/confirmation"
                element={<Confirmation />}
              />

            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
  )
}

