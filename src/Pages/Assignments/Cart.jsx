import PropTypes from "prop-types";
import moment from "moment";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import fakeProfile from "../../assets/fateuser.png";

const Cart = ({ assignment, handleDelete }) => {
  const { publisher, thumbnail, title, marks, level, dueDate, _id } = assignment;

  const date = moment(dueDate);
  const deadLine = date.format("Do MMMM YYYY");

  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden text-black rounded-lg bg-blue-50 border-2 border-blue-900 shadow-md dark:bg-gray-50 dark:text-gray-800">
      <div className="flex items-start justify-between">
        <div className="flex space-x-4">
          <img alt="" src={publisher?.photo || fakeProfile} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-semibold">{publisher?.name}</p>
            <p className="text-sm font-semibold text-red-500">DeadLine: {deadLine} </p>
          </div>
        </div>

        <div className="flex flex-row-reverse items-center gap-5">
          <button
            onClick={() => handleDelete(_id)}
            className="w-10 h-10 cursor-pointer rounded-full bg-red-100 border border-red-500 flex items-center justify-center"
            data-tooltip-id="delete"
            data-tooltip-content="Delete"
          >
            <MdDeleteForever className="text-xl text-red-500" />
            <Tooltip id="delete" />
          </button>
          <Link
            to={`/update/${_id}`}
            className="w-10 h-10 cursor-pointer rounded-full bg-green-100 border border-green-500 flex items-center justify-center"
            data-tooltip-id="edit"
            data-tooltip-content="Edit"
          >
            <FiEdit3 className="text-lg text-green-500" title="Edit" />
            <Tooltip id="edit" />
          </Link>
        </div>
      </div>
      <div>
        <img src={thumbnail} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
        <h2 className="mb-1 text-xl font-semibold">{title}</h2>

        <div className="flex flex-col lg:flex-row-reverse justify-between gap-2 items-center mt-5">
          <p className="py-2 px-6 rounded-full bg-yellow-100 text-yellow-500 font-bold">Marks: {marks}</p>
          <p className="py-2 px-6 rounded-full bg-green-100 text-green-500 font-bold">Difficulty Level: {level}</p>
        </div>

        <Link to={`/details/${_id}`}>
          <button className="py-3 w-full bg-blue-500 rounded-lg shadow-md font-semibold text-white text-center mt-5">
            View Assignment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  assignment: PropTypes.object,
  handleDelete: PropTypes.func,
  handleUpdate: PropTypes.func,
};
