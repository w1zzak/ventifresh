import { Routes, Route } from "react-router-dom"

import AboutUs from "./components/About"
import Header from "./components/Header"
import Landing from "./pages/Landing"
import Footer from "./components/Footer"
import Servicios from "./pages/Servicios"
import SobreNosotros from "./pages/SobreNosotros"
import Contacto from "./pages/Contacto"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </main>
    </>
  )
}

export default App