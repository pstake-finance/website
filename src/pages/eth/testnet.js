import React from "react";
import Footer from "../../components/molecules/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import Banner from "../../components/organisms/ethereum/test-net/Banner";
import Scaling from "../../components/organisms/ethereum/test-net/Scalling";
import Steps from "../../components/organisms/ethereum/test-net/Steps";
import Guides from "../../components/organisms/ethereum/test-net/Guides";
import Incentives from "../../components/organisms/ethereum/test-net/incentives";

const Eth = () => {
  return (
    <>
      <ScrollToTop />
      <Banner />
      <Scaling />
      <Steps />
      <Incentives />
      <Guides />
      <Footer />
    </>
  );
};

export default Eth;
