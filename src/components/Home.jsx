import hero1 from "../assets/heroImage1.jpg";
import Marquee from "react-fast-marquee";


export default function Home() {
  return (
    <div className="pt-[5em] min-h-[100vh]">
    <div  className="flex flex-col  items-center justify-center py-16 px-[4em]">
      <h1 className="uppercase pb-[1em]">Clarity. Structure. Growth</h1>

      <div className="flex w-full h-[60vh]">
        <div className="w-[45%] h-full">
            <img className="w-[93%] h-full  object-cover object-left-top" src={hero1} alt="hero-image" />
        </div>
        <div className="w-[55%] pl-[3em] flex  flex-col">
            <p className="text-left text-[1em]">Elsadave Consulting is a people-focused consulting firm that bridges the gap between organizations and individuals. From HR outsourcing solutions to career growth programs and accountability coaching, we create clarity, structure, and systems that empower long-term success.</p>
                <br />
                <br />
            <p className="text-left text-[1em]">Helping organizations and individuals gain clarity, build structure, and achieve growth — in business, career, and life</p>
            <br />
            <button>Work with us</button>
        </div>
      </div>
    </div>
    <div>
        <div className="border-y-2 border-[#00000033] py-1">
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
