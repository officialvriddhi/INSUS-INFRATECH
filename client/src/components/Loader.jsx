import { Image } from "@imagekit/react";
import { ClipLoader } from "react-spinners";
import {motion} from 'motion/react'
const Loader = () => {
  return (
    <div className='fixed inset-0 z-[9999] flex justify-center items-center'>
        <div className="absolute inset-0 bg-white opacity-20 backdrop-blur-xl"></div>
        <div
          className="flex flex-col gap-5 justify-center items-center"
        >
          <motion.div
            initial={{scale:1.1}}
            animate={{scale:1}}
            transition={{duration:0.5, delay:0.2,repeat:Infinity,repeatType:"loop"}}
            className="size-24"
          >
              <Image
              src="/logo3.jpeg"
              alt="logo"
              className="w-full h-full rounded-full object-contain shadow-md cursor-pointer"
              loading="lazy"
              />
          </motion.div>


              <h1 className="text-xxl text-gray-600 font-medium">Loading Please wait ..</h1>
        </div>
    </div>
  );
};

export default Loader;
