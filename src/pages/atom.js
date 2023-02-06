import React from "react";
import Features from "../components/containers/atom/Features";
import Footer from "../components/Footer";
import Banner from "../components/containers/atom/Banner";
import Comparison from "../components/containers/atom/Comparison";
import ScrollToTop from "../components/ScrollToTop";
import FeaturedBlogs from "../components/containers/atom/FeactureBlog";
import LiquidStakingSteps from "../components/containers/atom/LiquidStakingSteps";
import Audited from "../components/containers/atom/Audited";
import MigrationCard from "./MigrationCard";
import Faq from "../components/containers/atom/Faq";
import Validators from "../components/containers/atom/Validators";
import EcosystemSlider from "../components/containers/atom/EcosystemSilder";

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
