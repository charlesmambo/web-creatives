import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import CaseStudy from "./pages/study/CaseStudy";


function App() {
  return (
        <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-study" element={<CaseStudy />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
