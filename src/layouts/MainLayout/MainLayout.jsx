import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";

const MainLayout = () => {
  return (
    <>
      <Helmet>
        <title>Home Page | Monstar Toy Store</title>
      </Helmet>
      <Header />
      <main className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;