import React from "react";
import Banner from "../components/organisms/homepage/Banner";
import Networks from "../components/organisms/homepage/Networks";
import Features from "../components/organisms/homepage/Features";
import StakingSteps from "../components/organisms/homepage/StakingSteps";
import Audits from "../components/organisms/homepage/Audits";
import Validators from "../components/organisms/homepage/Validators";
import Blogs from "../components/organisms/homepage/Blogs";
import Footer from "../components/molecules/Footer";
import Investors from "../components/organisms/homepage/Investors";
import Token from "../components/organisms/homepage/Token";
import DefiPatners from "../components/organisms/homepage/DefiPatners";

const homePage = () => {
  return (
    <div>
      <Banner />
      <Investors />
      <Networks />
      <Features />
      <StakingSteps />
      <Token />
      <DefiPatners />
      <Validators />
      <Audits />
      <Blogs />
      <Footer />
    </div>
  );
};

export default homePage;
