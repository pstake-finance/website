import React from "react";
import Features from "../../components/organisms/atom/Features";
import Footer from "../../components/molecules/Footer";
import Banner from "../../components/organisms/atom/Banner";
import Comparison from "../../components/organisms/atom/Comparison";
import ScrollToTop from "../../components/ScrollToTop";
import FeaturedBlogs from "../../components/organisms/atom/FeactureBlog";
import LiquidStakingSteps from "../../components/organisms/atom/LiquidStakingSteps";
import Audited from "../../components/organisms/atom/Audited";
import Faq from "../../components/organisms/atom/Faq";
import ValidatorsContainer from "../../components/organisms/atom/ValidatorsContainer";
import EcosystemSlider from "../../components/organisms/atom/EcosystemSilder";
import MigrationCard from "../../components/organisms/atom/Migration";

const Atom = () => {
  return (
    <>
      <ScrollToTop />
      <Banner />
      <Features />
      <Comparison />
      <LiquidStakingSteps />
      <EcosystemSlider deviceType={""} />
      {/*<Guides />*/}
      <ValidatorsContainer deviceType={""} />
      <Audited />
      <FeaturedBlogs />
      <Faq />
      <MigrationCard />
      <Footer />
    </>
  );
};

export default Atom;
