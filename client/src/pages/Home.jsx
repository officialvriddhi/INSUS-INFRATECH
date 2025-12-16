import { Image } from '@imagekit/react';
import Stack from '../components/HomeCarousel.jsx'
import SplitText from '../components/SplitText.jsx';
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';


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

  return (
        <main className="relative z-10 flex h-full w-full items-center justify-around px-10">

            <div className='w-1/2 relative -top-5'>
                <h1 className='inline rounded-lg'>
                            <SplitText
                                text="INSUS INFRATECH"
                                className="font-bold text-slate-900 text-center text-7xl font-mono tracking-wider"
                                delay={100}
                                duration={0.6}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 50 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="center"
                                onLetterAnimationComplete={handleAnimationComplete}
                            />

                </h1>

                <p className='text-slate-500 font-semibold text-2xl mt-4 text-right'> - Building Landmarks That Stand the Test of Time</p>

                <motion.p 
                initial={{opacity:0,x:-300}}
                animate={{opacity:1,x:0}}
                transition={{duration:0.6,delay:0.8}}
                className='text-slate-700 text-lg mt-20 font-light'>INSUS INFRATECH Private Limited is a trusted construction and infrastructure company delivering premium hotels, commercial spaces, and public landmarks across India since 2005.</motion.p>


                <div className='text-xl text-slate-700 flex gap-14 mt-12'>

                    <NavLink to={'/about'} className="relative inline-block 
                    after:absolute after:left-1/2 after:-translate-x-1/2 
                    after:bottom-1 after:h-[3px] after:w-[50px] 
                    after:bg-black after:content-[''] hover:after:w-[70px] after:transition-all after:duration-300 after:ease-in-out">About us</NavLink>

                    <button className='rounded-lg border text-xl border-gray-200 px-4 py-2 bg-slate-700 text-white'>
                        contact us
                    </button>
                </div>

            </div>

                <div className='w-[30rem] h-[35rem] mt-10'>
                    <Stack
                        randomRotation={true}
                        sensitivity={180}
                        sendToBackOnClick={true}
                        cards={images.map((src, i) => (
                        <Image
                            key={i} 
                            src={src}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                        ))}
                    />
                </div>
        </main>


  );
};

export default Home;
