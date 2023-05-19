import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const AllToysLayout = () => {
  return (
    <>
      <Helmet>
        <title>All Toys | Monstar Toy Store</title>
      </Helmet>
      <Header />
      <main className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AllToysLayout;
