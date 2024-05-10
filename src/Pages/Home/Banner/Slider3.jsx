import { Link } from "react-router-dom";
import slider3 from "../../../assets/slider3.jpg";

const Slider3 = () => {
  return (
    <section className="dark:bg-gray-100 lg:min-h-[calc(100vh-64px)] dark:text-gray-800 flex items-center justify-center bg-blue-400 fira">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Unlock Your
            <span className="dark:text-violet-600 inline-block my-5">Assignment </span> Awaits!
          </h1>

          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Step into the realm of TechAssignment and embark on a quest for knowledge like never before.
            <br className="hidden md:inline lg:hidden" />
            Your journey to success starts here.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link to="/register" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
              REGISTER
            </Link>
            <Link to="/assignments" className="px-8 py-3 text-lg font-semibold border border-blue-900 rounded dark:border-gray-800">
              ASSIGNMENTS
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src={slider3} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 shadow-2xl rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Slider3;
