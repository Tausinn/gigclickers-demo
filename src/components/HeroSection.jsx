
const HeroSection = () => {
  return (
    // <div>
    //       <section className="hero flex justify-between lg:flex-row flex-col lg:items-center items-start lg:gap-4 gap-3">
    //         <div>
    //         <h1>Location Of Small And Large Jobs</h1>
    //           <p>
    //             The Free Jobs is an open online marketplace that connects employers and skilled workers.
    //           </p>
    //           <button className="hero-signup-button">Get Sign Up</button>
    //         </div>
    //         <div>
    //           <img src="/bg.png" className="lg:w-[451px] lg:h-[451px] w-[331px] h-[346px]"></img>
    //         </div>

    // </section>
    
    // </div>

        <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 py-10">
          
          {/* Left Section (Text/Content) */}
          <div className="flex-1 text-start lg:text-left mb-8 lg:mb-0">
            <h1 className="text-3xl text-[#20AC57] lg:text-5xl font-bold mb-4">Welcome to Our The free job Platform</h1>
            <p className="text-gray-700 text-lg lg:text-xl mb-6">
            Best Microjob & Freelancing Site to Make Money Online
            </p>
            <button className="bg-[#20AC57] text-white py-3 px-6 rounded-lg hover:bg-green-700 transition">Get Started</button>
          </div>
    
          {/* Right Section (Image) */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img src="/bg.png" className="lg:w-[451px] lg:h-[451px] w-[331px] h-[346px]" alt="Background" />
          </div>
          
        </div>
     
    
  )
}

export default HeroSection