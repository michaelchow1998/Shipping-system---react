import { Link } from "react-router-dom";
//import img
import lama from "../../images/lama256.png";

export default function LoginedPage() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 sm:pt-10 lg:px-8">
        <div className="flex-c py-2xl mx-auto mt-4 flex h-full w-4/5 px-4">
          <i className="fas fa-times mt-1 mr-2 text-xl text-red-600"></i>
          <h2 className="text-2xl font-semibold">Wrong Access</h2>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 sm:pb-10 lg:px-8">
        <div className="py- mx-auto flex h-full w-4/5 flex-col items-center justify-center rounded-md bg-gray-800 px-4">
          <div>
            <img
              className="my-4 mt-12 h-24 w-auto lg:block"
              src={lama}
              alt="lama"
            />
          </div>
          <div>
            <h1 className="mb-5 text-4xl font-bold text-white">ShipSheep</h1>
          </div>
          <div className=" mb-12 flex flex-col items-center font-semibold">
            <h2 className=" text-white">Your already Login,</h2>
            <h2 className=" text-white">Now please click the back Button</h2>
            <h2 className=" text-white">go back Home Page.</h2>
          </div>
          <Link
            className="mb-32 rounded-md bg-blue-700 px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            to="/"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
