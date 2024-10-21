import React from "react";
import Features from "../components/organisms/binance/Features";
import FeaturedBlogs from "../components/organisms/binance/FeactureBlog";
import Footer from "../components/molecules/Footer";
import Banner from "../components/organisms/binance/Banner";
import Comparison from "../components/organisms/binance/Comparison";
import Guides from "../components/organisms/binance/Guides";
import Audited from "../components/organisms/binance/Audited";
import Validators from "../components/organisms/binance/Validators";
import Faq from "../components/organisms/binance/Faq";
import { useAppStore } from "../store/store";
import { shallow } from "zustand/shallow";
const Binance = () => {
  const [tvlList] = useAppStore((state) => [state.tvlList], shallow);
  return (
    <div className="container-fluid p-0 binance">
      <Banner maxApy={"15"} tvl={tvlList.bnb} />
      <Features />
      <Comparison />
      <Guides />
      <Validators />
      <Audited />
      <FeaturedBlogs />
      <Faq />
      <Footer />
    </div>
  );
};

export default Binance;
