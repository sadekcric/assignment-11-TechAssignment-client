import PropTypes from "prop-types";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

const AttemptedCart = ({ attempt, index }) => {
  const [openModal, setOpenModal] = useState(false);
  // const [data, setData] = useState({});

  // const {  } = data;
  const { obtainedMarks, title, status, marks, feedBack, examinerName } = attempt;

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
        <Button
          disabled={status === "pending"}
          onClick={() => setOpenModal(true)}
          className={`py-2 px-6  text-white rounded-lg ${status === "pending" ? "bg-gray-500" : "bg-blue-400"}`}
        >
          Feedback
        </Button>

        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header className="text-black font-semibold">Assignment Feedback</Modal.Header>

          <Modal.Body>
            <p className="mb-4 pt-2">
              Examiner: <span className="text-red-700 font-bold">{examinerName}</span>.
            </p>

            <div className="w-4/5 mt-5 mx-auto p-3 border-2 border-blue-600 rounded-lg  bg-blue-100">
              <p className="font-semibold text-black">{feedBack}</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpenModal(false)} className="bg-blue-500">
              Back
            </Button>
          </Modal.Footer>
        </Modal>
      </th>
    </tr>
  );
};

export default AttemptedCart;

AttemptedCart.propTypes = {
  attempt: PropTypes.object,
  index: PropTypes.number,
};
