import React from "react";
import Banner from "../components/containers/homepage/Banner";
import Networks from "../components/containers/homepage/Networks";
import Features from "../components/containers/homepage/Features";
import StakingSteps from "../components/containers/homepage/StakingSteps";
import Audited from "../components/containers/homepage/Audited";
import Validators from "../components/containers/homepage/Validators";
import Investors from "../components/containers/homepage/Investors";
import Blogs from "../components/containers/homepage/Blogs";
import Footer from "../components/Footer";

const homePage = () => {
  return (
    <div>
      <Banner />
      <Networks />
      <Features />
      <StakingSteps />
      <Audited />
      <Validators />
      <Investors />
      <Blogs />
      <Footer />
    </div>
  );
};

export default homePage;
