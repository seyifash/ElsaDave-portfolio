import { Link } from "react-router-dom";
import hero1 from "../assets/heroImage1.jpg";
import Marquee from "react-fast-marquee";
import { HashLink } from "react-router-hash-link";

export default function Home() {
  return (
    <div className="w-full pt-[2em] md:min-h-[70vh]  lg:min-h-[60vh] xl:min-h-[100vh]">
    <div  className="w-full flex flex-col  items-center 2xl:justify-center py-4 md:py-5 lg:min-h-[40vh] px-4 md:px-[2em] xl:px-[4em] ">
      <h1 className="w-full uppercase pb-[1em]">Clarity. Structure. Growth</h1>

      <div className="md:flex md:justify-between w-full  md:h-[35vh] lg:min-h-[35vh] xl:min-h-[60vh] ">
        <div className="w-full md:w-[57%] lg:w-[60%] lg:hfull xl:h-full xl:w-[45%]">
            <img className="w-full md:w-[93%] h-full  object-cover object-left-top" 
            src={hero1}
            loading="eager"
            fetchpriority="high" 
            alt="hero-image" />
        </div>
        <div className="w-full md:w-[43%] lg:w-[40%] xl:w-[55%] md:pl-[1em] xl:pl-[3em] pt-4 md:pt-0 flex  flex-col">
            <p className="text-left text-[0.7em] md:text-[0.8em] lg:text-[1em]">Elsadave Consulting is a people-focused consulting firm that bridges the gap between organizations and individuals. From HR outsourcing solutions to career growth programs and accountability coaching, we create clarity, structure, and systems that empower long-term success.</p>
                <br />
                <br />
            <p className="text-left text-[0.7em] md:text-[0.8em]  lg:text-[1em]">Helping organizations and individuals gain clarity, build structure, and achieve growth — in business, career, and life</p>
            <br />
            <HashLink smooth to="#contact" className="btn">
              Work with us
            </HashLink>
        </div>
      </div>
    </div>
    <div>
        <div className="border-y-2 border-[#00000033] py-1 mt-4 md:mt-2 lg:mt-16">
            <Marquee speed={60} gradient={false} pauseOnHover>
                <h2>
                    Talent Acquisition     &nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;    HR Department SetUp  &nbsp;&nbsp;&nbsp;    •    &nbsp;&nbsp;&nbsp;   Background Checks    &nbsp;&nbsp;&nbsp;     •    &nbsp;&nbsp;&nbsp;    HR Advisory
                </h2>
            </Marquee>
        </div>
        <div className="border-b-2 border-[#00000033] py-3">
            <Marquee speed={60} gradient={false}>
                <h2>
                Career Launchpad  &nbsp;&nbsp;&nbsp;  •   &nbsp;&nbsp;&nbsp;  HR Career Training  &nbsp;&nbsp;&nbsp;   • &nbsp;&nbsp;&nbsp;   Remote HR Executive Programme    &nbsp;&nbsp;&nbsp;   •     &nbsp;&nbsp;&nbsp; Career Transition Support
            </h2>
            </Marquee>
        </div>
      </div>
    </div>
  );
}
