import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import AttemptedCart from "./AttemptedCart";

const MyAttempted = () => {
  const [myAttempt, setMyAttempt] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const userEmail = user.email;
  console.log(user);

  useEffect(() => {
    axios
      .get(`https://assignment-server-teal.vercel.app/pending/${userEmail}`)
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setMyAttempt(res.data);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userEmail]);

  if (loading) {
    return <div className="rounded-md top-[50%] left-[50%]  h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>;
  }

  return (
    <div className="container mx-auto p-3">
      <div className="overflow-x-auto ">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="text-sm font-semibold w-full">
              <th>SL</th>
              <th>Title</th>
              <th>Status</th>
              <th>Assignment Mark</th>
              <th> Obtain Mark</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myAttempt.map((attempt, index) => (
              <AttemptedCart key={attempt._id} attempt={attempt} index={index} setLoading={setLoading} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAttempted;
