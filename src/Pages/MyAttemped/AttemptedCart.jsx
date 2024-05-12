import { ImCancelCircle } from "react-icons/im";

const AttemptedCart = ({ attempt, index, setLoading }) => {
  const { title, status, marks, obtainedMarks, feedBack, _id } = attempt;

  return (
    <tr className="font-semibold">
      <th>{index + 1}</th>
      <td>{title}</td>
      <td>
        <p
          className={`${
            status === "pending" ? "bg-yellow-100  text-yellow-600  border-yellow-600" : "bg-green-100  text-green-600  border-green-600"
          } inline px-6 font-semibold rounded-full py-1 border`}
        >
          {status}
        </p>
      </td>
      <td>{marks}</td>
      <td>{obtainedMarks || "No Published"}</td>
      <th>
        <button
          disabled={status === "pending"}
          onClick={() => document.getElementById("my_modal_4").showModal()}
          type="button"
          className={`py-2 px-6  text-white rounded-lg ${status === "pending" ? "bg-gray-500" : "bg-blue-400"}`}
        >
          Feedback
        </button>

        <div>
          <dialog id="my_modal_4" className="modal ">
            <div className="modal-box w-11/12 max-w-5xl relative">
              <h3 className="font-bold text-lg text-center">Give Mark</h3>
              <p className="pb-4 pt-2">
                While marking assignments <span className="text-red-700 font-bold">Feedback</span> Feedback must be Provide.
              </p>

              <div className="my-5">{/* <iframe src={doc} width="100%" height="600"></iframe> */}</div>

              <div className=" p-3">
                <form /*onSubmit={handleMarked}*/ className="lg:w-4/5 lg:mx-auto" method="dialog">
                  <div className="mb-5">
                    <p className="font-semibold">
                      Assignment Marks<span className="text-red-600 font-bold">*</span>
                    </p>

                    <input type="number" name="mark" className="py-2 px-4 bg-blue-100 rounded-md w-full" required />
                  </div>

                  <div className="mb-5">
                    <p className="font-semibold">
                      Assignment Feedback<span className="text-red-600 font-bold">*</span>
                    </p>
                    <textarea required name="feedback" id="" className="bg-blue-100 w-full  py-2 px-4 rounded-md" rows="4"></textarea>
                  </div>

                  <div className="text-center">
                    <input type="submit" value="Submit" className="py-3 text-white font-semibold px-6 bg-blue-500 rounded-md min-w-36" />
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
      </th>
    </tr>
  );
};

export default AttemptedCart;
