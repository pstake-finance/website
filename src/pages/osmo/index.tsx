import React from "react";
import Features from "../../components/organisms/osmo/Features";
import Footer from "../../components/molecules/Footer";
import Banner from "../../components/organisms/osmo/Banner";
import ScrollToTop from "../../components/ScrollToTop";
import FeaturedBlogs from "../../components/organisms/osmo/FeactureBlog";
import LiquidStakingSteps from "../../components/organisms/osmo/LiquidStakingSteps";
import Audited from "../../components/organisms/osmo/Audited";
import Faq from "../../components/organisms/osmo/Faq";

const Osmo = () => {
  return (
    <>
      <ScrollToTop />
      <Banner />
      <Features />
      <LiquidStakingSteps />
      <Audited />
      <FeaturedBlogs />
      <Faq />
      <Footer />
    </>
  );
};

export default Osmo;
