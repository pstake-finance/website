import React from "react";
import Banner from "../components/organisms/homepage/Banner";
import Features from "../components/organisms/homepage/Features";
import Audits from "../components/organisms/homepage/Audits";
import Footer from "../components/molecules/Footer";
import Investors from "../components/organisms/homepage/Investors";
import Token from "../components/organisms/homepage/Token";
import BitcoinBanner from "../components/organisms/homepage/bitcoin-banner";
import Reasons from "../components/organisms/btc/why-build";
import AssetSlider from "../components/organisms/btc/asset-slider";
import Offering from "../components/organisms/btc/offering";
import BTCFeaturedBlogs from "../components/organisms/btc/btc-blogs";
import FeaturedBlogs from "../components/organisms/btc/blogs";
import Faq from "../components/organisms/btc/Faq";

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
      {/*<StakingSteps />*/}
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
