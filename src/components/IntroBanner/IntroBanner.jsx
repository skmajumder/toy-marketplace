import React from "react";
import { Link } from "react-router-dom";

const IntroBanner = ({ info }) => {
  const { title, text, img } = info || {};
  return (
    <>
      <div
        className={`intro-banner bg-[url('${img}')] bg-cover bg-center bg-no-repeat px-10 py-16`}
      >
        <p className="text-3xl font-medium text-[#02224d] tracking-wide leading-8 mb-5">
          {title}
        </p>
        <p className="text-[#02224db3] text-[15px] leading-[28px] mb-4">
          {text}
        </p>
        <Link
          to={"/"}
          className="text-[#02224db3] text-[15px] leading-[28px] mb-4"
        >
          Go to -{">"}
        </Link>
      </div>
    </>
  );
};

export default IntroBanner;
