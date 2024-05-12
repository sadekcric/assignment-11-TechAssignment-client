import PropTypes from "prop-types";

const AttemptedCart = ({ attempt, index }) => {
  const { title, status, marks, obtainedMarks, feedBack, examiner } = attempt;

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
          onClick={() => document.getElementById("my_modal_5").showModal()}
          type="button"
          className={`py-2 px-6  text-white rounded-lg ${status === "pending" ? "bg-gray-500" : "bg-blue-400"}`}
        >
          Feedback
        </button>

        <div>
          <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg text-center">Assignment Feedback</h3>
              <div>
                <p className="mb-2 pt-2">
                  Assignment Title <span className="text-red-700 font-bold">{title}</span>.
                </p>
                <p className="mb-4 pt-2">
                  Examiner: <span className="text-red-700 font-bold">{examiner}</span>.
                </p>
              </div>

              <div className="w-4/5 mt-5 mx-auto p-3 border-2 border-blue-600 rounded-lg bg-blue-100">
                <p className="font-semibold">{feedBack}</p>
              </div>

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="px-6 py-4 bg-blue-500 rounded-lg text-white">Close</button>
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

AttemptedCart.propTypes = {
  attempt: PropTypes.object,
  index: PropTypes.number,
};
