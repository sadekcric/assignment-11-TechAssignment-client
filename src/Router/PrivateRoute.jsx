import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="rounded-md top-[50%] left-[50%]  h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>;
  }

  if (user) {
    return <>{children}</>;
  }
  return <Navigate to="/login" state={location.pathname} />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.any,
};
