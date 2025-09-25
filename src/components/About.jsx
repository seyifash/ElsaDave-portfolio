export default function About() {
  return (
    <div className="min-h-[100vh] lg:min-h-[50vh] flex flex-col items-center w-full  px-4 py-[1.5em] md:px-[4em] md:py-[3em]">
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
    </div>
  );
}


