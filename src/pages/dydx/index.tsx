import React from "react";
import Features from "../../components/organisms/dydx/Features";
import Footer from "../../components/molecules/Footer";
import Banner from "../../components/organisms/dydx/Banner";
import ScrollToTop from "../../components/ScrollToTop";
import FeaturedBlogs from "../../components/organisms/dydx/FeactureBlog";
import LiquidStakingSteps from "../../components/organisms/dydx/LiquidStakingSteps";
import Audited from "../../components/organisms/dydx/Audited";
import Faq from "../../components/organisms/dydx/Faq";

const Dydx = () => {
  return (
    <>
      <ScrollToTop />
      <Banner />
      <Features />
      {/*<Comparison />*/}
      <LiquidStakingSteps />
      {/*<EcosystemSlider />*/}
      {/*<Guides />*/}
      {/*<Validators />*/}
      <Audited />
      <FeaturedBlogs />
      <Faq />
      <Footer />
    </>
  );
};

export default Dydx;
