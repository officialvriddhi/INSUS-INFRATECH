import React from 'react';
import SplitText from '../components/SplitText.jsx';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Video } from '@imagekit/react';
import CountUp from '../components/Counter.jsx';
import { SiTrustpilot } from "react-icons/si";


const Home = () => {
  const navigate = useNavigate();



  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <main className="relative h-screen w-full overflow-hidden" id='home'>

        {/* ---------- Background Video ---------- */}
        <div className="absolute inset-0 z-0">
          <Video
            src="/video1.MOV"
            autoPlay
            muted
            loop
            loading="eager"
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* ---------- Dark Overlay ---------- */}
        <div className="absolute inset-0 bg-black/10 z-10"></div>

        {/* ---------- Content ---------- */}
        <div className="relative z-20 w-[100%] lg:w-[80%] mx-auto h-full 
        flex flex-col justify-center items-center text-center px-4">

          {/* Title */}
          <h1 className="mb-4">
            <SplitText
              text="INSUS INFRATECH"
              className="font-extrabold tracking-wide text-slate-300 
              text-4xl md:text-5xl lg:text-7xl drop-shadow-xl"
              delay={100}
              duration={0.4}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.5}
              rootMargin="-100px"
              textAlign="center"
            />
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl text-gray-200 
            text-[14px] sm:text-base md:text-lg font-light leading-relaxed"
          >
            INSUS INFRATECH Private Limited is a trusted construction and infrastructure
            company delivering premium hotels, commercial spaces, and public landmarks
            across India since 2005.
          </motion.p>

          {/* Tagline */}

          <span className="text-rotate mt-6 flex justify-end">
            <span className='h-fit'>
              <p className="text-sm md:text-lg font-medium text-right bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500
   bg-clip-text text-transparent">
                  " Infrastructure That Stands the Test of Time "
              </p>
              <p className="text-sm md:text-lg font-medium text-right bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500
 bg-clip-text text-transparent">
                  " Strong Foundations for a Stronger Tomorrow "
              </p>
              <p className="text-sm md:text-lg font-medium text-right bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500
 bg-clip-text text-transparent">
                  " Engineering Excellence. Building the Future "
              </p>

            </span>
          </span>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 w-full text-white">

            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">
                <CountUp from={0} to={100} duration={1} />+
              </div>
              <p className="text-xs md:text-sm text-gray-300 mt-1">Projects</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">
                <CountUp from={0} to={20} duration={1} />+
              </div>
              <p className="text-xs md:text-sm text-gray-300 mt-1">Years Experience</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">
                <CountUp from={0} to={10} duration={1} />+
              </div>
              <p className="text-xs md:text-sm text-gray-300 mt-1">Cities Served</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">
                <SiTrustpilot />
              </div>
              <p className="text-xs md:text-sm text-gray-300 mt-1">
                Customer Trusted
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-14 flex gap-6">
            <button
              onClick={() => navigate('/work')}
              className="px-6 py-2 rounded-md 
              bg-amber-500 text-black font-semibold
              hover:bg-amber-400 transition"
            >
              Our Work
            </button>

              <button 
              onClick={()=>navigate('/contact')}
                className="px-6 py-2 rounded-md 
                border border-white text-white
              hover:bg-white hover:text-black transition"
                >Contact us</button>;
          </div>

        </div>
      </main>

      {/* Divider */}
      <hr className="w-full mx-auto h-[2px] border-0 
      bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300" />

      {/* About Section */}
      {/* <About /> */}
    </>
  );
};

export default Home;
