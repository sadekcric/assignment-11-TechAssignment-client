import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Cart from "./Cart";
import { useLoaderData } from "react-router-dom";

const Assignments = () => {
  const [active, setActive] = useState(false);
  const [data, setData] = useState([]);
  const { totalItems } = useLoaderData();
  const [perPageItems, setPerPageItems] = useState(6);
  const [pageNumber, setPageNumber] = useState(0);
  const totalPages = Math.ceil(totalItems / perPageItems);
  const pages = [...Array(totalPages).keys()];

  const handlePages = (e) => {
    const pagesInt = parseInt(e.target.value);
    setPerPageItems(pagesInt);
    setPageNumber(0);
  };

  const handlePrev = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNext = () => {
    if (pages.length - 1 > pageNumber) {
      setPageNumber(pageNumber + 1);
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/assignments?pages=${pageNumber}&size=${perPageItems}`).then((res) => setData(res.data));
  }, [pageNumber, perPageItems]);

  // const { isPending, error, data } = useQuery({
  //   queryKey: ["assignments"],
  //   queryFn: () => axios.get(`http://localhost:5000/assignments?pages=${pageNumber}&size=${perPageItems}`).then((res) => res.data),
  // });

  // if (isPending) {
  //   return <div className="rounded-md top-[50%] left-[50%]  h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>;
  // }

  // console.log(data);

  // if (error) return "An error has occurred: " + error.message;

  return (
    <div className="mt-10 ">
      <div className="mb-10">
        <h1 className="text-center text-3xl lg:text-5xl font-bold">Explore All Assignments</h1>
        <p className="lg:w-2/3 lg:mx-auto text-center font-semibold mt-3">
          Browse through our comprehensive collection of assignments covering a wide range of topics and difficulty levels. From
          beginner-friendly tasks to advanced challenges, there's something for everyone. Dive into the world of learning, discover new
          opportunities, and embark on your educational journey with TechAssignment's All Assignments page
        </p>
      </div>

      <div>
        <div className="text-center relative">
          <button
            onClick={() => setActive(!active)}
            className="py-3  px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-900 transition font-semibold"
          >
            <span className="flex items-center gap-3">
              <span>Assignment Difficulty Level</span>
              <span>
                <FaChevronDown />
              </span>
            </span>
          </button>

          <ul
            className={`bg-blue-600 bg-opacity-30   rounded-lg border-2 border-blue-600 max-w-[270px] mx-auto transition duration-1000 ease-in-out ${
              active ? "translate-y-0 opacity-100" : "translate-y-80 opacity-0 -z-10"
            }`}
          >
            <li className="border-b-2 border-blue-600">
              <button className="py-2 w-full font-semibold">All</button>
            </li>
            <li className="border-b-2 border-blue-600">
              <button className="py-2 w-full font-semibold">Easy</button>
            </li>
            <li className="border-b-2 border-blue-600">
              <button className="py-2 w-full font-semibold">Medium</button>
            </li>
            <li>
              <button className="py-2 w-full font-semibold">Hard</button>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`grid grid-cols-1 transition duration-1000 ease-in-out md:grid-cols-2 lg:grid-cols-3 container mx-auto p-3 gap-5 ${
          active ? "translate-y-5" : "-translate-y-24"
        }`}
      >
        {data.map((assignment) => (
          <Cart key={assignment._id} assignment={assignment} />
        ))}
      </div>

      <div className="text-center mb-10 ">
        <button onClick={handlePrev} className="px-4 py-1 mr-3 rounded-md bg-blue-100 font-semibold">
          Prev
        </button>
        {pages.map((page) => (
          <button
            onClick={() => setPageNumber(page)}
            key={page}
            className={`px-4 py-1 mr-3 rounded-md bg-blue-100 font-semibold ${pageNumber === page ? "bg-blue-800 text-white" : ""}`}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNext} className="px-4 py-1 mr-3 rounded-md bg-blue-100 font-semibold">
          Next
        </button>

        <select className="px-4 py-1 mr-3 rounded-md bg-blue-100 font-semibold" value={perPageItems} onChange={handlePages}>
          <option value="6">6</option>
          <option value="10">10</option>
        </select>
      </div>
    </div>
  );
};

export default Assignments;
