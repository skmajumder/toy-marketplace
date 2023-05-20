import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const BlogLayout = () => {
  return (
    <>
      <PageTitle pageTitle={"Blog"} />
      <Header />
      <main className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default BlogLayout;
