import React from "react";
import Footer from "../../components/molecules/Footer";
import Banner from "../../components/organisms/btc/Banner";
import Features from "../../components/organisms/btc/Features";
import Reasons from "../../components/organisms/btc/why-build";
import FeaturedBlogs from "../../components/organisms/btc/blogs";
import Faq from "../../components/organisms/btc/Faq";
import ScrollToTop from "../../components/ScrollToTop";
import AssetSlider from "../../components/organisms/btc/asset-slider";

const Atom = () => {
  return (
    <>
      <ScrollToTop />
      <Banner />
      <Reasons />
      <Features />
      <AssetSlider />
      <FeaturedBlogs />
      <Faq />
      <Footer />
    </>
  );
};

export default Atom;
