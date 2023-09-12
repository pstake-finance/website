import React from "react";
import Features from "../components/organisms/ethereum/Features";
import Footer from "../components/molecules/Footer";
import Banner from "../components/organisms/ethereum/Banner";
import Comparison from "../components/organisms/ethereum/Comparison";
import ScrollToTop from "../components/ScrollToTop";
import FeaturedBlogs from "../components/organisms/ethereum/FeactureBlog";
import LiquidStakingSteps from "../components/organisms/ethereum/LiquidStakingSteps";
import Audited from "../components/organisms/ethereum/Audited";
import Faq from "../components/organisms/ethereum/Faq";
import Validators from "../components/organisms/ethereum/Validators";
import EcosystemSlider from "../components/organisms/ethereum/EcosystemSilder";
import MigrationCard from "../components/organisms/ethereum/Migration";

const Atom = () => {
  return (
    <>
      <ScrollToTop />
      <Banner />
      <Features />
      <Comparison />
      <LiquidStakingSteps />
      <EcosystemSlider />
      {/*<Guides />*/}
      <Validators />
      <Audited />
      <FeaturedBlogs />
      <Faq />
      <MigrationCard />
      <Footer />
    </>
  );
};

export default Atom;
