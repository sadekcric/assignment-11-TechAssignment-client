import fakeProfile from "../../assets/fateuser.png";
import PropTypes from "prop-types";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

const PendingCart = ({ assignment, index, setSubmittedAssignment, submittedAssignments, setLoading }) => {
  const [openModal, setOpenModal] = useState(false);
  const { title, examinee, marks, doc, _id, note } = assignment;
  const { user } = useAuth();
  const verifyUser = user.email;
  const examineeVerify = examinee.email;

  const handleMarked = (e) => {
    setLoading(true);
    const form = e.target;
    const obtainedMarks = form.mark.value;
    const feedBack = form.feedback.value;
    const status = "completed";
    const examiner = verifyUser;
    const examinerName = user.displayName;
    const data = { obtainedMarks, feedBack, status, examiner, examinerName };

    axios
      .put(`https://assignment-server-teal.vercel.app/marked/${_id}`, data, { withCredentials: true })

      .then((res) => {
        if (res.data.modifiedCount > 0) {
          setOpenModal(false);
          const remaining = submittedAssignments.filter((item) => item._id !== _id);
          setSubmittedAssignment(remaining);
          setLoading(false);
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Successfully Updated!",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      })

      .catch((err) => {
        setLoading(false);
        return Swal.fire({
          icon: "error",
          title: "Error",
          text: err.message,
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={examinee?.photo || fakeProfile} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{examinee.name}</div>
            <div className="text-sm opacity-50">{examinee.email}</div>
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td>{marks}</td>
      <th>
        <Button
          disabled={verifyUser === examineeVerify}
          onClick={() => setOpenModal(true)}
          className={`py-2 px-6  text-white rounded-lg ${verifyUser === examineeVerify ? "bg-gray-500" : "bg-blue-400"}`}
        >
          Give Mark
        </Button>

        <Modal className="text-black font-semibold" show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header className="text-center">Give Mark</Modal.Header>

          <Modal.Body>
            <div className="pb-4 pt-2 space-y-2">
              <p>
                While marking assignments <span className="text-red-700 font-bold">Feedback</span> Feedback must be Provide.
              </p>
              <p>
                Assignment URL:{" "}
                <a href={doc} target="blank" className="text-red-700 font-bold">
                  {doc}
                </a>
              </p>

              {note && (
                <p>
                  <span className="text-red-700 font-bold">Note:</span> {note}
                </p>
              )}
            </div>

            <div className="my-5">
              <iframe src={doc} width="100%" height="600"></iframe>
            </div>

            <form onSubmit={handleMarked} className="lg:w-4/5 lg:mx-auto" method="dialog">
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
                <textarea
                  required
                  name="feedback"
                  id=""
                  className="bg-blue-100 text-black w-full  py-2 px-4 rounded-md"
                  rows="4"
                ></textarea>
              </div>

              <Modal.Footer className="text-center">
                <input type="submit" value="Submit" className="py-3 text-white font-semibold px-6 bg-blue-500 rounded-md min-w-36" />
              </Modal.Footer>
            </form>
          </Modal.Body>
        </Modal>
      </th>
    </tr>
  );
};

export default PendingCart;

PendingCart.propTypes = {
  assignment: PropTypes.object,
  index: PropTypes.number,
  setSubmittedAssignment: PropTypes.func,
  submittedAssignments: PropTypes.array,
  setLoading: PropTypes.func,
};
