import React from "react";
import Banner from "../../components/Banner/Banner";
import Features from "./Features";
import IntroBanners from "./IntroBanners";
import GallerySection from "./GallerySection";

const Home = () => {
  return (
    <>
      <Banner />
      <IntroBanners />
      <Features />
      <GallerySection />
    </>
  );
};

export default Home;
