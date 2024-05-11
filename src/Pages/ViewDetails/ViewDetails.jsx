import moment from "moment";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { ImCancelCircle } from "react-icons/im";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ViewDetails = () => {
  const details = useLoaderData();
  const { user } = useAuth();

  const { title, description, dueDate, level, marks, publisher, thumbnail } = details;
  const [loading, setLoading] = useState(false);
  const futureDate = moment(dueDate);
  const currentDate = moment();
  const deadLine = futureDate.diff(currentDate, "days");

  if (loading) {
    return <div className="rounded-md top-[50%] left-[50%]  h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>;
  }

  const handleSubmit = (e) => {
    setLoading(true);

    const form = e.target;
    const doc = form.doc.value;
    const note = form.note.value;
    const status = "pending";
    const obtainedMarks = null;
    const feedBack = null;
    const examinee = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    };

    const file = { doc, note, status, examinee, title, marks, obtainedMarks, feedBack };

    axios
      .post(`https://assignment-server-teal.vercel.app/submitted`, file)
      .then((res) => {
        if (res.data) {
          setLoading(false);
          return Swal.fire({
            icon: "success",
            title: "Successful",
            text: " Successfully Submitted!",
            showConfirmButton: false,
            timer: 3000,
          });
        }
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

    console.log(file);
    form.reset();
  };

  return (
    <div className="container mx-auto p-3">
      <div className="font-sans">
        <div className="py-10 lg:py-24">
          <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 bg-gray-100 rounded-sm w-full h-[100%]  text-center p-8">
              <img src={thumbnail} alt="Product" className="w-full h-[100%] rounded object-cover mx-auto" />
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-gray-800">{title}</h2>
              <div className="">
                <p className=" text-xl font-bold text-red-500"> {deadLine} Days Left</p>
              </div>

              <div className="mt-4">
                <p className="text-xl font-semibold bg-green-100 py-2 px-6 rounded-full text-center text-green-600">
                  Difficulty Level: {level}
                </p>
                <p className="text-xl mt-2 font-semibold bg-red-100 py-2 px-6 rounded-full text-center text-red-600">Marks: {marks}</p>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-800">About the {title}</h3>
                <p className="mt-4 text-lg font-semibold text-gray-800">{description}</p>
              </div>

              {/* Publisher */}
              <div className="mt-8 max-w-md">
                <h3 className="text-lg font-bold text-center bg-yellow-100 py-2 rounded-full text-yellow-600">Publisher</h3>

                <div className="flex items-start mt-4">
                  <img src={publisher.photo} className="w-12 h-12 rounded-full border-2 border-white" />
                  <div className="ml-3">
                    <h4 className="text-sm font-bold">{publisher.name}</h4>
                    <p>{publisher.email}</p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => document.getElementById("my_modal_5").showModal()}
                  type="button"
                  className="w-full mt-8 px-4 py-2 bg-blue-500 text-white  font-bold rounded-lg"
                >
                  Take assignment
                </button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box relative">
                    <h3 className="font-bold text-lg text-center">Submit Form</h3>
                    <p className="pb-4 pt-2">
                      Please Submit Your Assignment <span className="text-red-700 font-bold">PDF/Doc</span> file. Without{" "}
                      <span className="text-red-700 font-bold">PDF/Doc</span> file{" "}
                      <span className="text-red-700 font-bold">not Allowed</span>.
                    </p>
                    <div className=" p-3">
                      <form onSubmit={handleSubmit} className="lg:w-4/5 lg:mx-auto" method="dialog">
                        <div className="mb-5">
                          <p className="font-semibold">
                            Your PDF/Doc Link <span className="text-red-600 font-bold">*</span>
                          </p>

                          <input type="link" name="doc" className="py-2 px-4 bg-blue-100 rounded-md w-full" required />
                        </div>

                        <div className="mb-5">
                          <p className="font-semibold">Quick Note</p>
                          <textarea name="note" id="" className="bg-blue-100 w-full py-2 px-4 rounded-md"></textarea>
                        </div>

                        <div className="text-center">
                          <input
                            type="submit"
                            value="Submit"
                            className="py-3 text-white font-semibold px-6 bg-blue-500 rounded-md min-w-36"
                          />
                        </div>
                      </form>

                      <form method="dialog" className=" absolute top-5 right-5">
                        <button className="text-red-500 text-2xl ">
                          <ImCancelCircle />
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
