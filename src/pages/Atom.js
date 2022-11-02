import React from "react";
import SectionTwo from "../containers/atom/SectionTwo";
import Footer from "../components/Footer";
import Banner from "../containers/atom/Banner";
import Comparison from "../containers/atom/Comparison";
import ScrollToTop from "../components/ScrollToTop";
import FeaturedBlogs from "../containers/atom/FeactureBlog";
import EcosystemSlider from "../containers/atom/EcosystemSilder";
import Guides from "../containers/atom/Guides";
import LiquidStakingSteps from "../containers/atom/LiquidStakingSteps";
import Audited from "../containers/atom/Audited";
import MigrationCard from "./MigrationCard";
import Faq from "../containers/atom/Faq";
import Validators from "../containers/atom/Validators";

const Atom = () => {
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container-fluid p-0 atom">
        <Banner />
        <SectionTwo />
        <Comparison />
        <LiquidStakingSteps />
        <EcosystemSlider />
        <Guides />
        <Validators />
        <Audited />
        <FeaturedBlogs />
        <Faq />
        <MigrationCard />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Atom;
