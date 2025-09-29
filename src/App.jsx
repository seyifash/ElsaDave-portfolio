import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

import './App.css'
import Footer from "./components/Footer";

function App() {

  return (
   <div className="w-full">
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  )
}

export default App
