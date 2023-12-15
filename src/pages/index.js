import React from "react";
import Banner from "../components/organisms/homepage/Banner";
import Networks from "../components/organisms/homepage/Networks";
import Features from "../components/organisms/homepage/Features";
import StakingSteps from "../components/organisms/homepage/StakingSteps";
import Audited from "../components/organisms/homepage/Audited";
import Validators from "../components/organisms/homepage/Validators";
import Blogs from "../components/organisms/homepage/Blogs";
import Footer from "../components/molecules/Footer";

const homePage = () => {
  return (
    <div>
      <Banner />
      <Networks />
      <Features />
      <StakingSteps />
      <Audited />
      <Validators />
      <Blogs />
      <Footer />
    </div>
  );
};

export default homePage;
