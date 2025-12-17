import { Image } from '@imagekit/react';
import Stack from '../components/HomeCarousel.jsx'
import SplitText from '../components/SplitText.jsx';
import { motion } from 'motion/react';
import { NavLink, useNavigate } from 'react-router-dom';
import React from 'react';
import CountUp from '../components/Counter.jsx';
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GrUserWorker } from "react-icons/gr";

const About = React.lazy(()=>import('./About.jsx'))

const images = [
  "/IMG5.PNG",
  "/IMG4.PNG",
  "//IMG21.HEIC",
  "/IMG8.JPG",
];

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const Home = () => {
const navigate = useNavigate();
  return (
    <>
        <main className="relative z-10 flex h-full w-full items-center justify-around px-10 mb-20">

            <div className='w-1/2 relative '>
                <h1 className='inline rounded-lg'>
                            <SplitText
                                text="INSUS INFRATECH"
                                className="font-bold text-slate-900 text-center text-4xl font-mono rounded-lg shadow-lg p-3 mb-5  lg:text-6xl md:text-6xl"
                                delay={100}
                                duration={0.4}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 50 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="center"
                            />

                </h1>


                <motion.p 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.6,delay:0.2}}
                className='text-slate-700 text-xl font-semibold bg-gradient-to-r  from-zinc-900 via-yellow-500 via-stone-700 to-amber-600 bg-clip-text text-transparent'>INSUS INFRATECH Private Limited is a trusted construction and infrastructure company delivering premium hotels, commercial spaces, and public landmarks across India since 2005.</motion.p>


                <span className="text-rotate text-7xl w-full flex justify-end mt-6">
                    <span className="justify-items-center">
                        <p className='text-slate-400 font-semibold text-sm text-right lg:text-[16px]'> - "A trusted construction & infrastructure company since 2005."</p>

                        <p className='text-slate-400 font-semibold text-sm text-right lg:text-[16px]'> - “Delivering premium hotels, commercial spaces across India."</p>
                        
                        <p className='text-slate-400 font-semibold text-sm text-right lg:text-[16px]'> - "Building Landmarks That Stand the Test of Time"</p>

                    </span>
                </span>


                <div className='w-[90%] h-fit flex items-center justify-start mt-10 flex-1 gap-[2rem]'>

                    <div className='w-fit items-center justify-center  px-4 py-2  text-slate-900 rounded-lg flex flex-col shadow-sm'>
                        <div className='flex-1 text-4xl'>              
                            <CountUp
                            from={0}
                            to={100}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        />+</div>
                        <p className='text-md text-gray-400'>Project</p>
                    </div>

                    <div className='w-fit items-center justify-center  px-4 py-2 text-slate-900 rounded-lg flex flex-col shadow-sm'>
                        <div className='flex-1 text-4xl'>              
                            <CountUp
                            from={0}
                            to={19}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        />+</div>
                        <p className='text-md text-gray-400'>Years Experience</p>
                    </div>

                    <div className='w-fit items-center justify-center  px-4 py-2 text-slate-900  rounded-lg flex flex-col shadow-sm'>
                        <div className='flex-1 text-4xl'> 
                            <CountUp
                                from={0}
                                to={10}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />+
                        </div>
                        <p className='text-md text-gray-400'>Cities Served</p>
                    </div>

                    <div className='w-fit items-center justify-center  px-2 py-2 text-slate-900 rounded-lg flex flex-col shadow-sm'>
                        <div className='flex-1 text-4xl'>              
                          <VscWorkspaceTrusted />    
                        </div>
                        <p className='text-md text-gray-400'>Customer's Trusted</p>
                    </div>


                </div>


                <div className='text-lg flex gap-10 mt-12'>

                    <button onClick={()=>navigate('/work')} className='flex justify-center items-center gap-2 rounded-md border px-3 py-1  text-white bg-slate-700 border-slate-700 hover:border-2transition-all duration-300 ease'>
                        View Projects
                        <GrUserWorker />
                    </button>


                    <button onClick={()=>navigate('/contact')} className='rounded-md border px-3 py-1  bg-white text-slate-700 border-slate-700 hover:border-2 transition-all duration-300 ease'>
                        Contact us
                    </button>


                </div>

            </div>

                <div className='w-[33%] h-[35rem] mt-10'>
                    <Stack
                        randomRotation={true}
                        sensitivity={1000}
                        autoplay={true}
                        autoplayDelay={1800}
                        pauseOnHover={true}
                        sendToBackOnClick={true}
                        className="shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                        cards={images.map((src, i) => (
                        <Image
                            key={i} 
                            src={src}
                            alt="Hero"
                            style={{ width: '100%', height: '100%', objectFit: 'cover'}} 
                            loading="lazy"
                        />
                        ))}
                    />
                </div>

        </main>
    <hr className='w-full mx-auto h-[2px] border-0 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300'/>
        <About/>
</>
  );
};

export default Home;
