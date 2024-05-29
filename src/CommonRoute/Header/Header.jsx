import { CiMenuBurger } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "./../../Hooks/useAuth";
import { useEffect, useState } from "react";
import fakeuser from "../../assets/fateuser.png";

const Header = () => {
  const { user, logout } = useAuth();
  const [menu, setMenu] = useState(false);
  const [profile, setProfile] = useState(false);

  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  console.log(theme);

  const handleToggle = () => {
    if (theme === "light") {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localThem = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localThem);
  }, [theme]);

  const navLink = (
    <>
      {/* Home */}
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-blue-900 px-6 py-2 rounded-md shadow-lg" : "bg-blue-400 px-4 py-2 rounded-md shadow-lg"
          }
        >
          Home
        </NavLink>
      </li>

      {/* Assignments */}
      <li>
        <NavLink
          to="/assignments"
          className={({ isActive }) =>
            isActive ? "bg-blue-900 px-6 py-2 rounded-md shadow-lg" : "bg-blue-400 px-4 py-2 rounded-md shadow-lg"
          }
        >
          Assignments
        </NavLink>
      </li>

      {/* Pending Assignments */}
      <li>
        <NavLink
          to="/pending"
          className={({ isActive }) =>
            isActive ? "bg-blue-900 px-6 py-2 rounded-md shadow-lg" : "bg-blue-400 px-4 py-2 rounded-md shadow-lg"
          }
        >
          Pending Assignments
        </NavLink>
      </li>

      {user ? (
        <>
          {/* Create Assignments */}
          <li>
            <NavLink
              to="/create"
              className={({ isActive }) =>
                isActive ? "bg-blue-900 px-6 py-2 rounded-md shadow-lg" : "bg-blue-400 px-4 py-2 rounded-md shadow-lg"
              }
            >
              Create Assignment
            </NavLink>
          </li>

          {/* Profile for dextop */}
          <li onClick={() => setProfile(!profile)} className="w-12 h-12 rounded-full hidden lg:flex">
            <img src={user?.photoURL || fakeuser} alt="" className="w-full h-full rounded-full" />
          </li>
        </>
      ) : (
        <>
          {/* Login */}
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "bg-blue-900 px-6 py-2 rounded-md shadow-lg" : "bg-blue-400 px-4 py-2 rounded-md shadow-lg"
              }
            >
              Log In
            </NavLink>
          </li>

          {/* Register */}
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? "bg-blue-900 px-6 py-2 rounded-md shadow-lg" : "bg-blue-400 px-4 py-2 rounded-md shadow-lg"
              }
            >
              Register
            </NavLink>
          </li>
        </>
      )}

      {/* Dark light Btn */}
      <li>
        <label
          className="swap swap-rotate hidden lg:flex lg:items-center 
        
        
        "
        >
          {theme === "light" ? (
            <input type="checkbox" value={theme} className="opacity-0" onChange={handleToggle} />
          ) : (
            <input type="checkbox" value={theme} className="opacity-0" onChange={handleToggle} checked={true} />
          )}

          {theme === "light" ? (
            <svg className=" goldenText fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
          ) : (
            <svg className=" goldenText  fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          )}
        </label>
      </li>
    </>
  );
  return (
    <div>
      <nav className="bg-blue-500 relative z-50 lg:static text-white border-gray-200 dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto p-4 ">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <FaBook className="text-red-300 text-2xl" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Tech<span className="text-red-300 font-bold">A</span>ssignment
            </span>
          </Link>

          {/* for Mobile menu start */}
          <div className="flex items-center gap-3">
            {user && (
              <div onClick={() => setProfile(!profile)} className="w-10 h-10 rounded-full lg:hidden">
                <img src={user?.photoURL || fakeuser} alt="" className="w-full h-full rounded-full" />
              </div>
            )}
            <button
              onClick={() => setMenu(!menu)}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm z-30 text-gray-500 rounded-lg lg:hidden hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <CiMenuBurger className="text-2xl font-bold text-white" />
            </button>
          </div>
          <div
            className={`lg:hidden z-50 mt-3 bg-blue-600 bg-opacity-30 border-4 border-blue-600 shadow-2xl py-8 ${
              menu ? "translate-y-2 opacity-100" : "-translate-y-96 opacity-0"
            } transition duration-1000 ease-in-out px-6 rounded-lg shadow-lg absolute top-14 right-3 `}
          >
            <ul className="flex flex-col gap-5  items-end">{navLink}</ul>
          </div>
          {/* Mobile menu end */}
          {/* Profile start*/}
          <ul
            className={`${
              profile ? "translate-y-2 opacity-100" : "-translate-y-60 opacity-0"
            } transition duration-1000 ease-in-out absolute right-[10%] top-16 z-30 bg-blue-500 bg-opacity-50  px-10 py-5 rounded-b-xl flex flex-col gap-5  items-end`}
          >
            <li className="bg-blue-400 px-4 py-2 rounded-md shadow-lg">
              <Link to="/my-assignment"> My Attempted</Link>
            </li>
            <li className="bg-blue-400 px-4 py-2 rounded-md shadow-lg">
              <button
                onClick={() => {
                  logout();
                  setProfile(false);
                }}
              >
                {" "}
                Log Out
              </button>
            </li>
          </ul>
          {/* Profile End */}
          <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
            <ul className="flex items-center font-semibold gap-3">{navLink}</ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
