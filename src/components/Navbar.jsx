import logo from '../assets/elsa-logo.png'
import { useState } from 'react'

export default function Navbar() {

  const [active, setActive] = useState(false)
  return (
    <nav className="bg-[#FAF4EC] relative flex justify-between items-center fixed top-0 w-full  px-[1em]  md:px-[2em] xl:px-[4em] py-[1em] z-10 border-b border-[#00000014]">
      <div className="hidden lg:flex">
        <a href="#home" className="text-base text-black" style={{ margin: "0 1rem" }}>HOME </a>
        <a href="#about" className="text-black text-base" style={{ margin: "0 1rem" }}>ABOUT</a>
      </div>
      <div className="w-[80px] md:w-[120px]">
        <img className="w-full" src={logo} alt="logo" loading='lazy'/>
      </div>
      <div className="hidden lg:flex">
        <a href="#services" className="text-black text-base" style={{ margin: "0 1rem" }}>SERVICES</a>
        <a href="#contact" className="text-black text-base" style={{ margin: "0 1rem" }}>CONTACT</a>
      </div>
      <div className="flex text-2xl lg:hidden"><i className="bx bx-menu" onClick={() => setActive(prevState => !prevState)}></i></div>
      <div className={`${active ? 'right-0': '-right-[50%]'} transition-all ease-in duration-400 mobile-nav px-4 py-4 text-left flex flex-col absolute w-[50%] h-[100vh] top-15 sm:top-19 bg-[#FAF4EC] lg:hidden`}> 
          <a href="#home" className="text-base text-black py-4" style={{ margin: "0 1rem" }}>HOME </a>
          <a href="#about" className="text-black text-base py-4" style={{ margin: "0 1rem" }}>ABOUT</a>
          <a href="#services" className="text-black text-base py-4" style={{ margin: "0 1rem" }}>SERVICES</a>
          <a href="#contact" className="text-black text-base py-4" style={{ margin: "0 1rem" }}>CONTACT</a>
      </div>
    </nav>
  );
}