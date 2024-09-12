import React from "react";
import Banner from "../components/organisms/homepage/Banner";
import Features from "../components/organisms/homepage/Features";
import Audits from "../components/organisms/homepage/Audits";
import Footer from "../components/molecules/Footer";
import Investors from "../components/organisms/homepage/Investors";
import Token from "../components/organisms/homepage/Token";
import BitcoinBanner from "../components/organisms/homepage/bitcoin-banner";
import Reasons from "../components/organisms/homepage/why-build";
import AssetSlider from "../components/organisms/homepage/asset-slider";
import Offering from "../components/organisms/homepage/offering";
import BTCFeaturedBlogs from "../components/organisms/homepage/btc-blogs";
import FeaturedBlogs from "../components/organisms/homepage/blogs";
import Faq from "../components/organisms/homepage/Faq";

const homePage = () => {
  return (
    <div>
      <Banner />
      <Investors />
      <Reasons />
      <Offering />
      <BitcoinBanner />
      <AssetSlider bg={"#141414"} />
      <Features />
      <Token />
      <FeaturedBlogs bg={"#141414"} />
      <BTCFeaturedBlogs bg={"#141414"} />
      <Audits />
      <Faq bg={"#141414"} />
      <Footer />
    </div>
  );
};

export default homePage;
