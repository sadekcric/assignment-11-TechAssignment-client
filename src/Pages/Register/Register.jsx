import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdPhotos } from "react-icons/io";

const Register = () => {
  return (
    <div className="container mx-auto mt-5 font-semibold">
      <div className="font-[sans-serif] bg-white text-white md:min-h-screen ">
        <div className="flex flex-col-reverse p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md md:flex-row items-center  gap-8 h-full">
          <div className="max-md:order-1 p-4 bg-blue-500 rounded-lg">
            <img
              src="https://readymadeui.com/signin-image.webp"
              className="lg:max-w-[70%] w-full h-full object-contain block mx-auto"
              alt="login-image"
            />
          </div>

          <div className="flex items-center md:p-8 p-6 h-full lg:w-11/12 lg:ml-auto">
            <form className="max-w-lg w-full mx-auto text-black">
              <div className="mb-10">
                <h3 className="text-3xl font-extrabold ">Create an account</h3>
                <p className="text-sm mt-2">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-500 font-semibold hover:underline ml-1">
                    Login here
                  </Link>
                </p>
              </div>

              <div>
                <label className="text-xs block mb-2">Full Name</label>
                <div className="relative flex items-center">
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                    placeholder="Enter name"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="mt-10">
                <label className="text-xs block mb-2">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="text"
                    required
                    className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                    placeholder="Enter email"
                  />
                  <MdOutlineMailOutline className="text-gray-400 absolute right-2 text-lg" />
                </div>
              </div>

              <div className="mt-10">
                <label className="text-xs block mb-2">Photo URL</label>
                <div className="relative flex items-center">
                  <input
                    name="photo"
                    type="link"
                    required
                    className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                    placeholder="Enter Photo URL"
                  />
                  <IoMdPhotos className="text-gray-300 absolute right-2 text-lg" />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-3">
                <div className="mt-10 lg:flex-1">
                  <label className="text-xs block mb-2">Password</label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type="password"
                      required
                      className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                      placeholder="Enter password"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                      viewBox="0 0 128 128"
                    >
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div className="mt-10 lg:flex-1">
                  <label className="text-xs block mb-2">Conform Password</label>
                  <div className="relative flex items-center">
                    <input
                      name="conformPassword"
                      type="password"
                      required
                      className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                      placeholder="Enter conform password"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                      viewBox="0 0 128 128"
                    >
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex items-center mt-8">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 rounded" />
                <label className="ml-3 block text-sm">
                  I accept the{" "}
                  <a href="" className="text-blue-500 font-semibold hover:underline ml-1">
                    Terms and Conditions
                  </a>
                </label>
              </div>

              <div className="mt-12">
                <button
                  type="button"
                  className="w-full  shadow-xl py-2.5 px-8 text-sm font-semibold rounded-full bg-transparent text-blue-500 border border-blue-400 focus:outline-none"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
