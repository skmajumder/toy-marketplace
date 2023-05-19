import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouters = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const activeRouterLocation = useLocation();

  if (loading) {
    return (
      <>
        <progress
          className="progress progress-primary w-56"
          value="0"
          max="100"
        ></progress>
        <progress
          className="progress progress-primary w-56"
          value="10"
          max="100"
        ></progress>
        <progress
          className="progress progress-primary w-56"
          value="40"
          max="100"
        ></progress>
        <progress
          className="progress progress-primary w-56"
          value="70"
          max="100"
        ></progress>
        <progress
          className="progress progress-primary w-56"
          value="100"
          max="100"
        ></progress>
      </>
    );
  }

  if (!user) {
    return (
      <Navigate to={"/login"} state={{ from: activeRouterLocation }} replace />
    );
  }
  return children;
};

export default PrivateRouters;
