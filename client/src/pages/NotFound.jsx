import React, { useContext } from 'react'
import notfoundVideo from '../assets/404-error.mp4'
import { useNavigate } from 'react-router-dom';
import { LoadingContext } from '../context/Loading';
import Loader from '../components/Loader';
import { FaArrowRightToBracket } from "react-icons/fa6";

const NotFound = () => {
    const {loading} = useContext(LoadingContext)
    const navigate = useNavigate()
  return (
    <>
    {loading&&<Loader/>}
    <div className="min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      <video
        src={notfoundVideo}
        className="block w-full lg:w-[50%] lg:h-[50%] object-contain"
        autoPlay
        muted
        playsInline
        loop
      />

      <button onClick={()=>navigate(-1)} className="mt-4 btn rounded-md bg-blue-800 px-6 py-2 text-white flex gap-2">
        Back
        <FaArrowRightToBracket />
      </button>
    </div>
    </>
  );
};


export default NotFound