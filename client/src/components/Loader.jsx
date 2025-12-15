import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <ClipLoader size={60} color="#2F80ED" />
    </div>
  );
};

export default Loader;
