import axios from "axios";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

const Assignments = () => {
  const [data, setData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [perPageItems, setPerPageItems] = useState(6);
  const [pageNumber, setPageNumber] = useState(0);
  const [level, setLevel] = useState("");
  const totalPages = Math.ceil(totalItems / perPageItems);
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const pages = [...Array(totalPages).keys()];

  const handlePages = (e) => {
    const pagesInt = parseInt(e.target.value);
    setPerPageItems(pagesInt);
    setPageNumber(0);
  };

  const handlePrev = () => {
    if (pageNumber > 0) {
      setLoading(true);
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNext = () => {
    if (pages.length - 1 > pageNumber) {
      setLoading(true);
      setPageNumber(pageNumber + 1);
    }
  };

  const handleDelete = (id) => {
    if (!user) {
      return navigate("/login");
    }

    axios
      .get(`https://assignment-server-teal.vercel.app/assignments/${id}`)
      .then((res) => {
        const author = res.data.publisher.email;
        const userEmail = user.email;

        if (author !== userEmail) {
          return Swal.fire({
            icon: "error",
            title: "Error",
            text: "You have no Access to Delete",
            showConfirmButton: false,
            timer: 3000,
          });
        }

        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(`https://assignment-server-teal.vercel.app/delete/${id}`).then(() => {
              const remaining = data.filter((d) => d._id !== id);
              setData(remaining);

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                showConfirmButton: false,
                timer: 3000,
              });
            });
          }
        });
      })
      .catch((err) => {
        return Swal.fire({
          icon: "error",
          title: "Error",
          text: err.message,
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  useEffect(() => {
    axios.get(`https://assignment-server-teal.vercel.app/count?level=${level}`).then((res) => {
      setTotalItems(res.data.totalItems);
    });
  }, [level]);

  useEffect(() => {
    axios
      .get(`https://assignment-server-teal.vercel.app/assignments?pages=${pageNumber}&size=${perPageItems}&level=${level}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, [pageNumber, perPageItems, level]);

  if (loading) {
    return <div className="rounded-md top-[50%] left-[50%]  h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>;
  }

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

      <div className="text-center mb-10">
        <select
          onChange={(e) => {
            setLoading(true);
            setLevel(e.target.value);
            setPageNumber(0);
          }}
          value={level}
          className="py-3  px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-900 transition font-semibold"
        >
          <option value="">Difficulty Level</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div className={`grid grid-cols-1 transition duration-1000 ease-in-out md:grid-cols-2 lg:grid-cols-3 container mx-auto p-3 gap-5`}>
        {data.map((assignment) => (
          <Cart key={assignment._id} assignment={assignment} handleDelete={handleDelete} />
        ))}
      </div>

      <div className="text-center my-10 ">
        <button onClick={handlePrev} className="px-4 py-1 mr-3 rounded-md bg-blue-100 font-semibold">
          Prev
        </button>
        {pages.map((page) => (
          <button
            onClick={() => {
              setLoading(true);
              setPageNumber(page);
            }}
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
