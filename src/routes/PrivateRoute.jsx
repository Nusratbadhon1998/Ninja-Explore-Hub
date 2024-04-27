import React, { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import RingLoader from "react-spinners/RingLoader";

const PrivateRoute = ({ children }) => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const location = useLocation();
 

  if (loading) {
    return (
      <div className="flex justify-center items-center border min-h-[400px]">
        <RingLoader
          color="#0c2d57"
          loading={loading}
          size={100}
          speedMultiplier={1}
        />
      </div>
    );
  } else if (!user) {
    return <Navigate to="/login" state={location.pathname || "/"} />;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
