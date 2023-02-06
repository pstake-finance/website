import React from "react";
import Banner from "../components/containers/homepage/Banner";
import Features from "../components/containers/homepage/Features";
import Blogs from "../components/containers/homepage/Blogs";
import Networks from "../components/containers/homepage/Networks";
import Investors from "../components/containers/homepage/Investors";
import Footer from "../components/Footer";
import StakingSteps from "../components/containers/homepage/StakingSteps";
import Audited from "../components/containers/homepage/Audited";
import Validators from "../components/containers/homepage/Validators";
const homePage = () => {
  return (
    <React.Fragment>
      <div className="container-fluid p-0 tokensale home-page">
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
    </React.Fragment>
  );
};

export default homePage;
