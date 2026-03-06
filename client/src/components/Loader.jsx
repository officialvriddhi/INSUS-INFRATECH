import { Image } from "@imagekit/react";
import { motion } from "motion/react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      
      {/* Glass Background */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-xl"></div>

      {/* Loader Content */}
      <div className="relative z-10 flex flex-col justify-center items-center gap-4">
        
        {/* Logo Animation */}
        {/* Text */}
        <p 
        className="text-xl font-bold text-slate-600 tracking-wide animate-bounce">
          Loading please wait ...
        </p>
      </div>
    </div>
  );
};

export default Loader;
