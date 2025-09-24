import logo from '../assets/elsa-logo.png'

export default function Navbar() {
  return (
    <nav className=" bg-[#FAF4EC] flex justify-between items-center fixed top-0 w-full px-4 md:px-[4em] py-[1em] z-10 border-b border-[#00000014]">
      <div>
        <a href="#home" className="text-base">HOME </a>
        <a href="#about" style={{ margin: "0 1rem" }}>ABOUT</a>
      </div>
      <div className="w-[80px] md:w-[120px]">
        <img className="w-full" src={logo} alt="logo" loading='lazy'/>
      </div>
      <div>
        <a href="#services" style={{ margin: "0 1rem" }}>SERVICES</a>
        <a href="#contact" style={{ margin: "0 1rem" }}>CONTACT</a>
      </div>
    </nav>
  );
}