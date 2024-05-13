import PendingCart from "./PendingCart";
import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Pending = () => {
  // const items = useLoaderData();

  const [submittedAssignments, setSubmittedAssignment] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(assignment);

  useEffect(() => {
    axios
      .get(`https://assignment-server-teal.vercel.app/pending`, { withCredentials: true })
      .then((res) => {
        setSubmittedAssignment(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  if (loading) {
    return <div className="rounded-md top-[50%] left-[50%]  h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>;
  }

  return (
    <div className="container mx-auto p-3">
      <Helmet>
        <title>Tech Assignment | Pending Assignment</title>
      </Helmet>

      <div className="overflow-x-auto ">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="text-sm font-semibold w-full">
              <th>SL</th>
              <th>Examinee</th>
              <th>Title</th>
              <th>Marks</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {submittedAssignments.map((assignment, index) => (
              <PendingCart
                key={assignment._id}
                assignment={assignment}
                index={index}
                setSubmittedAssignment={setSubmittedAssignment}
                submittedAssignments={submittedAssignments}
                setLoading={setLoading}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pending;
