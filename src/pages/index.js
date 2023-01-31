import React from "react";
import Banner from "../containers/homepage/Banner";
import Networks from "../containers/homepage/Networks";
import Features from "../containers/homepage/Features";
import StakingSteps from "../containers/homepage/StakingSteps";
import Audited from "../containers/homepage/Audited";
import Validators from "../containers/homepage/Validators";
import Investors from "../containers/homepage/Investors";
import Blogs from "../containers/homepage/Blogs";
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
