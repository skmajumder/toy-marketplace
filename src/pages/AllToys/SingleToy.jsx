import React from "react";
import { useParams } from "react-router-dom";

const SingleToy = () => {
  const { id: toyID } = useParams();

  return (
    <div>
      <h2>Single Toy {toyID}</h2>
    </div>
  );
};

export default SingleToy;
