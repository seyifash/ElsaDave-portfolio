import logo from '../assets/elsa-logo.png'

export default function Navbar() {
  return (
    <nav className="bg-[#FAF4EC] flex justify-between items-center fixed top-0 w-full  px-[1em]  md:px-[2em] xl:px-[4em] py-[1em] z-10 border-b border-[#00000014]">
      <div>
        <a href="#home" className="text-base text-black">HOME </a>
        <a href="#about" className="text-black text-base" style={{ margin: "0 1rem" }}>ABOUT</a>
      </div>
      <div className="w-[80px] md:w-[120px]">
        <img className="w-full" src={logo} alt="logo" loading='lazy'/>
      </div>
      <div>
        <a href="#services" className="text-black text-base" style={{ margin: "0 1rem" }}>SERVICES</a>
        <a href="#contact" className="text-black text-base" style={{ margin: "0 1rem" }}>CONTACT</a>
      </div>
    </nav>
  );
}