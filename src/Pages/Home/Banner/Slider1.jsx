import { Link } from "react-router-dom";
import slider1 from "../../../assets/slider1.jpg";

const Slider1 = () => {
  return (
    <section className="dark:bg-gray-100 lg:min-h-[calc(100vh-64px)] dark:text-gray-800 flex items-center justify-center bg-blue-400 fira">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Empower Your
            <span className="dark:text-violet-600 inline-block my-5">Skills</span>with Tech Assignment
          </h1>

          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Discover a new era of learning with TechAssignment. Unleash your potential,
            <br className="hidden md:inline lg:hidden" />
            sharpen your skills, and embrace the future of education.
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
          <img src={slider1} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 shadow-2xl rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Slider1;
