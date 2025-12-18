import { Image } from "@imagekit/react";
import { motion } from "motion/react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      
      {/* Glass Background */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-xl"></div>

      {/* Loader Content */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        
        {/* Logo Animation */}
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/logo3.jpeg"
            alt="INSUS Infratech logo"
            className="w-24 h-24 rounded-full object-contain shadow-lg"
            loading="lazy"
          />
        </motion.div>

        {/* Text */}
        <p className="text-lg font-medium text-slate-700 tracking-wide">
          Loading please wait ...
        </p>
      </div>
    </div>
  );
};

export default Loader;
