import aboutimage from "../assets/about-img-4.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-[100vh] flex flex-col items-center w-full  px-4 py-[2em] md:px-[2em] xl:px-[4em] md:py-[3em]">
      <div className="flex flex-col md:flex-row w-full md:justify-between md:items-center">
        <h3 className="w-full md:w-[50%] text-left md:text-[1.7em] lg:text-[2em] xl:text-[3em] text-[#02193B] uppercase font-bold fonts">Ut imperdiet nulla id ugiat In ultricies.</h3>
        <div className="w-full md:w-[40%] flex flex-col items-start">
            <p className="text-left text-[0.7em] md:text-[0.7em] lg:text-[1em]">Elsadave Consulting is a people-focused consulting firm that bridges the gap between organizations.</p>
            <button className="bg-[#002651] w-[50%] text-[0.7em] md:text-[0.7em] md:w-[70%] lg:w-[60%] xl:w-[40%] px-2 py-2 lg:text-[0.9em] text-white mt-4 font-normal fonts">Explore Our Services</button>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 md:py-10 gap-10">
        <div className="bg-image2 h-[396px] p-4 flex flex-col justify-end">
            <h3 className="uppercase text-white fonts font-bold text-left">For Organizations</h3>
            <p className="text-xs text-white fonts text-left font-light pr-16">HR outsourcing, audits, and background checks tailored to your growth.</p>
        </div>
        <div className="bg-image1 h-[396px] p-4 flex flex-col justify-end">
            <h3 className="uppercase text-white fonts font-bold text-left">For Individuals</h3>
            <p className="text-xs text-white fonts text-left font-light pr-16">Career training and accountability coaching that unlocks your next level.</p>
        </div>
        <div className="bg-image3 h-[396px] p-4 flex flex-col justify-end">
            <h3 className="uppercase text-white fonts font-bold text-left  ">For Business Owners</h3>
            <p className="text-xs text-white fonts text-left pr-16 font-light">Structure, clarity, and accountability to scale sustainably.</p>
        </div>
      </div>
      <div className="w-full min-h-[40vh] lg:flex about-bg1 md:min-h-[36vh] lg:min-h-[38vh] xl:min-h-[100vh] 2xl:min-h-[100vh] xl:mt-10">
        <div className=" w-full hidden xl:flex lg:w-full xl:w-[50%] 2xl:w-[50%] h-full relative">
          <img className="w-full h-full top-0 left-[7px]" src={aboutimage} alt="about-image" loading="lazy" />
        </div>
         <div className=" w-full xl:w-[50%] 2xl:w-[50%] px-4 flex md:pl-14 flex-col">
            <div className="pt-2 xl:pt-4 mt-4 xl:mt-20">
              <h3 className="uppercase text-left  text-base text-xl/10 sm:text-xl text-white font-bold  text-2xl/15 lg:text-4xl/20">Who We Are</h3>
              <p className="text-white text-xs sm:text-sm font-light text-left pr-[1em] xl:pr-[4em]">Elsadave Consulting is a people-focused consulting firm that bridges the gap between organizations and individuals. From HR outsourcing solutions to career growth programs and accountability coaching, we create clarity, structure, and systems that empower long-term success.</p>
            </div>
             <div className=" py-4 xl:py-8">
              <h3 className="uppercase text-left  text-base text-xl/10 sm:text-xl text-white font-bold text-2xl lg:text-4xl/20">Our Promise</h3>
              <ul className="list-inside text-left list-disc">
                  <li className="text-white text-xs sm:text-sm">Clear guidance, not jargon</li>
                  <li className="text-white text-xs sm:text-sm">Practical solutions that work</li>
                  <li className="text-white text-xs sm:text-sm">A partner who walks the journey with you</li>
              </ul>
            </div>
            <Link to="/" className="bg-white text-[#002651] p-2  w-[40%] sm:w-[30%] text-xs sm:text-sm">Meet Our Team</Link>
         </div>
      </div>
    </div>
  );
}


