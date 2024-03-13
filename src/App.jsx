import About from "./Pages/About/About.jsx";
import Home from "./Pages/Home/Home.jsx";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import Portfolio from "./Pages/Portfolio/Portfolio.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Services from "./Pages/Services/Services.jsx";
import ScrollToTop from "./components/scrollToTop/ScrollToTop.jsx";
import BackToTop from "./components/backToTop/backToTop.jsx";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;
