import { Image } from '@imagekit/react';
import Stack from '../components/HomeCarousel.jsx'
import SplitText from '../components/SplitText.jsx';
import { motion } from 'motion/react';
import { NavLink, useNavigate } from 'react-router-dom';


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
        <main className="relative z-10 flex h-full w-full items-center justify-around px-10">

            <div className='w-1/2 relative -top-5'>
                <h1 className='inline rounded-lg'>
                            <SplitText
                                text="INSUS INFRATECH"
                                className="font-bold text-slate-900 text-center text-7xl font-mono rounded-lg shadow-lg p-3 mb-5"
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


                <span className="text-rotate text-7xl w-full flex justify-end">
                    <span className="justify-items-center">
                        <p className='text-slate-500 font-semibold text-2xl text-right bg-gradient-to-r  from-zinc-900 via-stone-700 to-amber-600 bg-clip-text text-transparent'> -  "Strong Foundations. Smarter Infrastructure."</p>
                        
                        <p className='text-slate-500 font-semibold text-2xl text-right bg-gradient-to-r  from-zinc-900 via-stone-700 to-amber-600 bg-clip-text text-transparent'> -  "Building Landmarks That Stand the Test of Time"</p>

                        <p className='text-slate-500 font-semibold text-2xl text-right bg-gradient-to-r  from-zinc-900 via-stone-700 to-amber-600 bg-clip-text text-transparent'> - "Engineering Excellence. Building the Future"</p>

                    </span>
                </span>





                <motion.p 
                initial={{opacity:0,x:-300}}
                animate={{opacity:1,x:0}}
                transition={{duration:0.6,delay:0.8}}
                className='text-slate-700 text-lg mt-20 font-light'>INSUS INFRATECH Private Limited is a trusted construction and infrastructure company delivering premium hotels, commercial spaces, and public landmarks across India since 2005.</motion.p>


                <div className='text-md text-slate-700 flex gap-10 mt-12'>

                    <button onClick={()=>navigate('/work')} className='rounded-lg border border-gray-200 px-3 py-1 bg-slate-900 text-white hover:bg-white hover:text-slate-700 hover:border-slate-700 hover:border-2 transition-all duration-200 ease-in-out'>
                        Our Projects</button>


                    <button onClick={()=>navigate('/contact')} className='rounded-lg border border-gray-200 px-5 py-2 bg-slate-900 text-white hover:bg-white hover:text-slate-700 hover:border-slate-700 hover:border-2 transition-all duration-200 ease-in-out'>
                        Schedule a Call
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


  );
};

export default Home;
