import React from "react";
import Features from "../../components/organisms/stars/Features";
import Footer from "../../components/molecules/Footer";
import Banner from "../../components/organisms/stars/Banner";
import ScrollToTop from "../../components/ScrollToTop";
import FeaturedBlogs from "../../components/organisms/stars/FeactureBlog";
import LiquidStakingSteps from "../../components/organisms/stars/LiquidStakingSteps";
import Audited from "../../components/organisms/stars/Audited";
import Faq from "../../components/organisms/stars/Faq";

const Stars = () => {
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

export default Stars;
