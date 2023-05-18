import React from "react";
import BannerImg from "../../../public/img/banner.webp";

const Banner = () => {
  return (
    <section className="section-banner h-screen">
      <div className="container px-10 py-10">
        <div className="flex justify-between items-center gap-10">
          <div className="banner-text w-1/2 flex flex-col justify-center">
            <span className="uppercase text-[14px] text-slate-950 font-bold tracking-widest mb-3">
              monstar toy shop
            </span>
            <h1 className="text-6xl font-black text-[#02224d] tracking-wide leading-[65px] max-w-[90%] mb-8">
              Toys not just for kids but with kids
            </h1>
            <p className="text-[#02224db3] text-[15px] leading-[28px] mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              cupiditate neque pariatur praesentium! Repudiandae magni voluptas
              modi quas molestias voluptate.
            </p>
            <div>
              <button className="btn btn-sm">Get Stared</button>
            </div>
          </div>
          <div className="banner-img w-1/2">
            <img src={BannerImg} alt="Banner Image" className="w-[90%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
