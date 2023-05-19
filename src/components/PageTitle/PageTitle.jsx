import React from "react";
import { Helmet } from "react-helmet";

const PageTitle = ({ pageTitle }) => {
  return (
    <>
      <Helmet>
        <title>{pageTitle} | Monstar Toy Store</title>
      </Helmet>
    </>
  );
};

export default PageTitle;
