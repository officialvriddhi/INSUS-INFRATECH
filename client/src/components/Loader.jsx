import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className='fixed inset-0 z-[9999] flex justify-center items-center'>
        <div className="absolute inset-0 bg-black opacity-45 backdrop-blur-xl"></div>
        <ClipLoader size={60} color="#2F80ED" />
    </div>
  );
};

export default Loader;
