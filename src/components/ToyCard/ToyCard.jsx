import React, { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSingleToyDetailsRedirect = (toyID) => {
    if (!user?.email) {
      swal(
        "Unauthorized access",
        "You have to log in first to view details",
        "warning"
      );
    }
    navigate(`/all-toys/${toyID}`);
  };

  const { _id: toyID, pictureUrl, name, price, rating } = toy || {};
  return (
    <>
      <div className="card card-compact bg-base-100 shadow-xl h-full">
        <figure className="text-center">
          <img src={pictureUrl} alt={name} className="w-[60%] text-center" />
        </figure>
        <div className="card-body justify-end items-start">
          <h2 className="card-title">{name}</h2>
          <span className="block">Price: {price}</span>
          <span className="block">Rating: {rating}</span>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleSingleToyDetailsRedirect(toyID)}
              className="btn btn-primary btn-sm"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyCard;
