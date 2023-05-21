import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import PageTitle from "../../components/PageTitle/PageTitle";

const SingleToy = () => {
  const { id: toyID } = useParams();
  const [toyDetails, setToyDetails] = useState([]);

  useEffect(() => {
    fetch(`https://b7a11-toy-marketplace-server-side-skmajumder.vercel.app/toy/${toyID}`)
      .then((response) => response.json())
      .then((data) => setToyDetails(data));
  }, [toyID]);

  const {
    _id: id,
    pictureUrl,
    name,
    sellerName,
    sellerEmail,
    price,
    rating,
    description,
    subCategory,
    availableQuantity,
  } = toyDetails || {};

  return (
    <>
      <PageTitle pageTitle={`${name}`} />
      <section className="section-single-toy">
        <div className="container mx-auto py-12 px-10">
          <div className="flex justify-between items-start mb-10">
            <div className="w-1/2 text-center">
              <img className="w-[80%]" src={pictureUrl} alt={name} />
            </div>
            <div className="w-1/2 space-y-4">
              <h1 className="text-4xl font-bold text-[#02224d]">{name}</h1>
              <div className="flex justify-center">
                <div className="w-full h-[.4px] bg-gradient-to-r from-[rgba(2,0,36,1)] via-[rgba(9,9,121,0.9866071428571429)] to-[rgba(0,212,255,1)] mb-6"></div>
              </div>
              <div className="flex justify-start items-center gap-2">
                <Rating style={{ maxWidth: 80 }} value={rating} readOnly />{" "}
                <span>({rating}) Rating</span>
              </div>
              <p className="text-2xl font-bold text-[#02224d]">
                Price: ${price}
              </p>
              <p>
                <span className="text-lg text-[#02224d] font-semibold">
                  Seller:
                </span>{" "}
                {sellerName}
              </p>
              <p>
                <span className="text-lg text-[#02224d] font-semibold">
                  Seller Email:
                </span>{" "}
                {sellerEmail}
              </p>
              <p>
                <span className="text-lg text-[#02224d] font-semibold">
                  Available Quantity:
                </span>{" "}
                {availableQuantity}
                {availableQuantity ? (
                  <>
                    <span className="badge badge-success bg-green-500 gap-2 text-white ml-3">
                      In Stock
                    </span>
                  </>
                ) : (
                  <>
                    <span className="badge badge-success bg-red-500 gap-2 text-white ml-3">
                      Stock Out
                    </span>
                  </>
                )}
              </p>
              <p>
                <span className="text-lg text-[#02224d] font-semibold">
                  Sub-category:
                </span>{" "}
                {subCategory &&
                  subCategory.map((category, index) => (
                    <span key={index} className="toy-category">
                      {category.label}
                    </span>
                  ))}
              </p>
            </div>
          </div>
          <div className="toy-details pr-20">
            <h2 className="text-4xl font-extralight text-[#02224d] mb-10">
              Description
            </h2>
            <div className="w-full my-3 h-px bg-gradient-to-r from-purple-500 to-02224d"></div>
            <p className="text-[#02224db3] text-[15px] leading-[28px] mb-4">
              {description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleToy;
