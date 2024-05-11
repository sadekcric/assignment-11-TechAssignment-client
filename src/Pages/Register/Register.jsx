import { MdOutlineMailOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { IoMdPhotos } from "react-icons/io";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const { register, logout, loading, setLoading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <div className="rounded-md top-[50%] left-[50%]  h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>;
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const conformPassword = form.conformPassword.value;

    if (password !== conformPassword) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "Opps! Password not match",
        showConfirmButton: false,
        timer: 3000,
      });
    }

    if (password.length < 6) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Opps! Password must be 6 digits or longer!",
        showConfirmButton: false,
        timer: 3000,
      });
    }

    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      // return toast.error("Password must be a Uppercase & Lowercase!");

      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Password must be a Uppercase & Lowercase!",
        showConfirmButton: false,
        timer: 3000,
      });
    }

    register(email, password)
      .then(({ user }) => {
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Success!",
              text: "Registration Successful!",
              showConfirmButton: false,
              timer: 3000,
            });

            logout();
            return navigate("/login");
          })
          .catch((err) => {
            setLoading(false);
            return Swal.fire({
              icon: "error",
              title: "Error!",
              text: err.message,
              showConfirmButton: false,
              timer: 3000,
            });
          });
      })
      .catch((err) => {
        setLoading(false);
        return Swal.fire({
          icon: "error",
          title: "Error!",
          text: err.message,
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };
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
            <form onSubmit={handleRegister} className="max-w-lg w-full mx-auto text-black">
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
                    type="email"
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
                      type={visible1 ? "text" : "password"}
                      required
                      className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                      placeholder="Enter password"
                    />
                    <div className="absolute right-3">
                      {visible1 ? (
                        <FaRegEye className="text-lg text-gray-400" onClick={() => setVisible1(!visible1)} />
                      ) : (
                        <FaRegEyeSlash className="text-lg text-gray-400" onClick={() => setVisible1(!visible1)} />
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-10 lg:flex-1">
                  <label className="text-xs block mb-2">Conform Password</label>
                  <div className="relative flex items-center">
                    <input
                      name="conformPassword"
                      type={visible2 ? "text" : "password"}
                      required
                      className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                      placeholder="Enter conform password"
                    />
                    <div className="absolute right-3">
                      {visible2 ? (
                        <FaRegEye className="text-lg text-gray-400" onClick={() => setVisible2(!visible2)} />
                      ) : (
                        <FaRegEyeSlash className="text-lg text-gray-400" onClick={() => setVisible2(!visible2)} />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center mt-8">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 rounded" required />
                <label className="ml-3 block text-sm">
                  I accept the <Link className="text-blue-500 font-semibold hover:underline ml-1">Terms and Conditions</Link>
                </label>
              </div>

              <div className="mt-12">
                <input
                  type="submit"
                  value="Register"
                  className="w-full  shadow-xl py-2.5 px-8 text-sm font-semibold rounded-full bg-transparent text-blue-500 border border-blue-400 focus:outline-none"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
