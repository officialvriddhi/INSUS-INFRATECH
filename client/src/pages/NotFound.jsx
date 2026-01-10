
import { useNavigate } from 'react-router-dom';
import { FaArrowRightToBracket } from "react-icons/fa6";
import notfound from '../assets/404-error.mp4'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <>

    <div className="min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
                <video
                  src={notfound}
                  autoPlay
                  muted
                  loop
                  loading="lazy"
                  playsInline
                 className="block w-full lg:w-[50%] lg:h-[50%] object-contain"
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