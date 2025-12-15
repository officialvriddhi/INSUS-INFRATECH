import React from 'react'
import notfoundVideo from '../assets/404-error.mp4'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      <video
        src={notfoundVideo}
        className="block w-full lg:w-[50%] lg:h-[50%] object-contain"
        autoPlay
        muted
        playsInline
        loop
      />

      <button onClick={()=>navigate(-1)} className="mt-4 btn rounded-md bg-blue-800 px-6 py-2 text-white">Back</button>
    </div>
  );
};


export default NotFound