import React from "react";
import Footer from "../../components/molecules/Footer";
import Banner from "../../components/organisms/btc/Banner";
import Features from "../../components/organisms/btc/Features";
import Reasons from "../../components/organisms/btc/why-build";
import FeaturedBlogs from "../../components/organisms/btc/blogs";
import Faq from "../../components/organisms/btc/Faq";
import AssetSlider from "../../components/organisms/btc/asset-slider";
import BTCFeaturedBlogs from "../../components/organisms/btc/btc-blogs";

const Atom = () => {
  return (
    <>
      <Banner />
      <Reasons />
      <Features />
      <AssetSlider bg={"#030200"} />
      <FeaturedBlogs bg={"#030200"} />
      <BTCFeaturedBlogs bg={"#030200"} />
      <Faq bg={"#141414"} />
      <Footer />
    </>
  );
};

export default Atom;
