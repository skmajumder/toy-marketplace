import React from "react";
import Banner from "../../components/Banner/Banner";
import Features from "./Features";
import IntroBanners from "./IntroBanners";
import GallerySection from "./GallerySection";
import ShopByCategory from "./ShopByCategory";

const Home = () => {
  return (
    <>
      <Banner />
      <IntroBanners />
      <GallerySection />
      <ShopByCategory />
      <Features />
    </>
  );
};

export default Home;
