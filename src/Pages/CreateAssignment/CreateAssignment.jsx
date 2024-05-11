import { useState } from "react";
import create from "../../assets/create.jpg";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "./../../Hooks/useAuth";

const CreateAssignment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const { user } = useAuth();

  const handleCreateAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const marks = form.marks.value;
    const dueDate = selectedDate;
    const level = form.level.value;
    const thumbnail = form.thumbnail.value;
    const publisher = { email: user.email, name: user.displayName, photo: user?.photoURL };

    const assignment = { title, marks, dueDate, level, thumbnail, publisher };

    axios.post(`http://localhost:5000/assignments`, assignment).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="container mx-auto p-3 font-semibold min-h-[calc(100vh-337px)] lg:flex lg:flex-col lg:items-center lg:justify-center my-10 ">
      <div className="mb-10">
        <h2 className="text-center text-3xl lg:text-5xl font-bold">Create Your Assignment</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 bg-blue-400 p-10 rounded-lg items-center justify-center">
        <div className="flex-1 h-full ">
          <img src={create} alt="" className="w-full lg:h-[436px] rounded-lg" />
        </div>
        <form onSubmit={handleCreateAssignment} className="flex-1 h-full">
          <fieldset className=" bg-blue-100 h-full gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="title" className="text-sm">
                  Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Title"
                  className="w-full rounded-md py-2 pl-2 lg:pl-4 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="marks" className="text-sm">
                  Marks
                </label>
                <input
                  id="marks"
                  name="marks"
                  type="text"
                  placeholder="Marks"
                  className="w-full rounded-md  py-2 pl-2 lg:pl-4 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="level" className="text-sm">
                  Difficulty Level
                </label>
                <select
                  id="level"
                  name="level"
                  type="text"
                  className="w-full rounded-md pl-2 py-2 lg:px-4 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                >
                  <option className="py-2 border-b-2">Difficulty Level</option>
                  <option value="Easy" className="py-2 border-b-2">
                    Easy
                  </option>
                  <option value="Medium" className="py-2 border-b-2">
                    Medium
                  </option>
                  <option value="Hard" className="py-2 border-b-2">
                    Hard
                  </option>
                </select>
              </div>

              <div className="col-span-full  sm:col-span-3 mt-1">
                <p className="text-sm">Due Date</p>

                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat={"dd/MM/yyyy"}
                  minDate={new Date()}
                  className="w-full inline-block rounded-md pl-2 py-2 lg:px-4 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>

              <div className="col-span-full ">
                <label htmlFor="thumbnail" className="text-sm">
                  Thumbnail URL
                </label>
                <input
                  id="thumbnail"
                  name="thumbnail"
                  type="link"
                  placeholder="Thumbnail URL"
                  className="w-full rounded-md pl-2 py-2 lg:px-4 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>

              <div className="col-span-full ">
                <label htmlFor="description" className="text-sm">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Description"
                  className="w-full rounded-md pl-2 py-2 lg:px-4 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>

              <div className="col-span-full ">
                <input
                  type="submit"
                  value="Create Assignment"
                  className="w-full rounded-md pl-2 py-2 lg:px-4 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 bg-blue-500 text-white"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default CreateAssignment;
