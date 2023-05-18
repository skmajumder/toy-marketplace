import React from "react";
import { introBannerCover } from "../../constants/index";
import { Link } from "react-router-dom";
import IntroBanner from "../../components/IntroBanner/IntroBanner";

const IntroBanners = () => {
  return (
    <section className="section-intro-banner">
      <div className="container p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          {introBannerCover.map((banner) => (
            <IntroBanner key={banner.id} info={banner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroBanners;
