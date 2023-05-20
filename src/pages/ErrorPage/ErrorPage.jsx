import React from "react";
import { Link, useRouteError } from "react-router-dom";
import ErrorImg from "../../../public/img/error.png";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <img src={ErrorImg} alt="Error Image" className="w-64 h-auto mb-8" />
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          Oops! {error?.message || "Something went wrong."}
        </h1>
        <p className="text-lg text-gray-700 mb-5">
          Please try again later. Now Back to Home
        </p>
        <Link to={"/"} className="btn btn-accent">
          Home
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
