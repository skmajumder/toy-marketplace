import React from "react";
import { FaDollarSign } from "react-icons/fa";

const Feature = ({ feature }) => {
  return (
    <>
      <div className="single-feature flex flex-col justify-center items-center gap-2">
        <span className="mb-4 text-[#02224d] font-bold text-2xl">
          {feature?.id}
        </span>
        <p className="text-[26px] font-bold leading-7 text-[#02224d]">
          {feature?.title}
        </p>
        <p className="text-[#02224db3] text-[15px] leading-[28px] mb-4">
          {feature?.subtitle}
        </p>
      </div>
    </>
  );
};

export default Feature;
