import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../components/PageTitle/PageTitle";

const AllToysLayout = () => {
  return (
    <>
      <PageTitle pageTitle={"All Toys"} />
      <Header />
      <main className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AllToysLayout;
