import { CiMenuBurger } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "./../../Hooks/useAuth";
import { useState } from "react";
import fakeuser from "../../assets/fateuser.png";

const Header = () => {
  const { user, logout } = useAuth();
  const [menu, setMenu] = useState(false);
  const [profile, setProfile] = useState(false);

  const navLink = (
    <>
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

          <li onClick={() => setProfile(!profile)} className="w-12 h-12 rounded-full hidden lg:flex">
            <img src={user?.photoURL || fakeuser} alt="" className="w-full h-full rounded-full" />
          </li>
        </>
      ) : (
        <>
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
