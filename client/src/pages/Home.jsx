import { Image } from '@imagekit/react';
import Stack from '../components/HomeCarousel.jsx'
import SplitText from '../components/SplitText.jsx';
import { motion } from 'motion/react';
import { NavLink, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const About = React.lazy(()=>import('./About.jsx'))

const images = [
  "/IMG5.PNG",
  "/IMG4.PNG",
  "//IMG21.HEIC",
  "/IMG8.JPG",
];

const taglines = [
  "Strong Foundations. Smarter Infrastructure.",
  "Building Landmarks That Stand the Test of Time",
  "Engineering Excellence. Building the Future"
];

const Home = () => {
  const navigate = useNavigate();
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section with Background Gradient */}
      <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-yellow-400/10 to-orange-600/10 rounded-full blur-2xl"
          />
        </div>

        <main className="relative z-10 flex h-full w-full items-center justify-between px-6 md:px-10 lg:px-16 py-20 mb-20">
          {/* Left Content Section */}
          <div className='w-full lg:w-1/2 relative z-10 space-y-8'>
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='relative'
            >
              <div className="inline-block">
                <SplitText
                  text="INSUS INFRATECH"
                  className="font-bold text-center text-6xl md:text-7xl lg:text-8xl font-mono"
                  delay={80}
                  duration={0.4}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 50 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
                  className="h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full mt-4"
                />
              </div>
            </motion.div>

            {/* Animated Taglines */}
            <motion.div
              key={currentTagline}
              initial={{ opacity: 0, y: 20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: -20, x: 20 }}
              transition={{ duration: 0.6 }}
              className="relative h-24 md:h-28 flex items-center justify-end pr-4"
            >
              <div className="text-right">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className='font-semibold text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-gray-700 via-blue-700 to-indigo-700 bg-clip-text text-transparent'
                >
                  "{taglines[currentTagline]}"
                </motion.p>
              </div>
              {/* Decorative Quote Mark */}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute -left-8 -top-4 text-8xl md:text-9xl font-serif text-blue-600/20"
              >
                "
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <p className='text-gray-700 text-lg md:text-xl leading-relaxed max-w-2xl font-light'>
                INSUS INFRATECH Private Limited is a trusted construction and infrastructure company delivering premium hotels, commercial spaces, and public landmarks across India since 2005.
              </p>
              
              {/* Feature Highlights */}
              <div className="flex flex-wrap gap-4 mt-6">
                {[
                  "19+ Years Experience",
                  "100+ Projects Completed",
                  "10+ Cities Served"
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-blue-100"
                  >
                    <FaCheckCircle className="text-blue-600 text-sm" />
                    <span className="text-sm font-medium text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className='flex flex-wrap gap-4 mt-10'
            >
              <motion.button
                onClick={() => navigate('/work')}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className='group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2'
              >
                <span>Our Projects</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                >
                  <FaArrowRight className="text-sm" />
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.button>

              <motion.button
                onClick={() => navigate('/contact')}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(234, 179, 8, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className='bg-white border-2 border-gray-200 text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex items-center gap-2'
              >
                <span>Schedule a Call</span>
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Image Carousel Section */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className='hidden lg:block w-[40%] h-[35rem] mt-10 relative'
          >
            {/* Decorative Frame */}
            <motion.div
              initial={{ opacity: 0, rotate: -5 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -inset-4 bg-gradient-to-br from-blue-200/50 via-indigo-200/50 to-purple-200/50 rounded-3xl blur-xl"
            />
            <div className="relative w-full h-full bg-gradient-to-br from-gray-900/5 to-gray-800/5 rounded-3xl p-4 shadow-2xl border border-gray-200/50 backdrop-blur-sm">
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
                    alt="Construction Project"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                ))}
              />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-xl shadow-xl font-bold text-sm flex items-center gap-2"
            >
              <span>Since 2005</span>
            </motion.div>
          </motion.div>

          {/* Mobile Image Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='lg:hidden w-full h-[25rem] mt-10 relative'
          >
            <div className="relative w-full h-full bg-gradient-to-br from-gray-900/5 to-gray-800/5 rounded-3xl p-4 shadow-2xl border border-gray-200/50">
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
                    alt="Construction Project"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                ))}
              />
            </div>
          </motion.div>
        </main>
      </div>

      <About />
    </>
  );
};

export default Home;
