import React from "react";
import ValidatorList from "../../components/organisms/dydx/validators/";
import Footer from "../../components/molecules/Footer";
import ScrollToTop from "../../components/ScrollToTop";

const Validators = () => {
  return (
    <>
      <ScrollToTop />
      <ValidatorList />
      <Footer />
    </>
  );
};

export default Validators;
