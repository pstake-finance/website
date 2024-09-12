import React, { useEffect, useState } from "react";
import Features from "../components/organisms/binance/Features";
import FeaturedBlogs from "../components/organisms/binance/FeactureBlog";
import Footer from "../components/molecules/Footer";
import Banner from "../components/organisms/binance/Banner";
import Comparison from "../components/organisms/binance/Comparison";
import Guides from "../components/organisms/binance/Guides";
import Audited from "../components/organisms/binance/Audited";
import Validators from "../components/organisms/binance/Validators";
import Faq from "../components/organisms/binance/Faq";
import ScrollToTop from "../components/ScrollToTop";
import EcosystemSlider from "../components/organisms/binance/EcosystemSilder";
import {
  fetchBeefyInfo,
  fetchOpenLeverage,
  fetchThenaInfo,
  fetchWombat,
} from "./api/api";
import { useAppStore } from "../store/store";
import { shallow } from "zustand/shallow";

const Binance = () => {
  const [beefyInfo, setBeefyInfo] = useState<any>({ tvl: 0, apy: 0 });
  const [openLeverageInfo, setOpenLeverageInfo] = useState<any>({
    tvl: 0,
    apy: 0,
  });
  const [wombatInfo, setWombatInfo] = useState<any>({ tvl: 0, apy: 0 });
  const [thenaInfo, setThenaInfo] = useState<any>({ tvl: 0, apy: 0 });

  useEffect(() => {
    const fetchApi = async () => {
      const [beefyInfo, openLeverage, wombat, thena] = await Promise.all([
        fetchBeefyInfo(),
        fetchOpenLeverage(),
        fetchWombat(),
        fetchThenaInfo(),
      ]);
      setBeefyInfo(beefyInfo);
      setOpenLeverageInfo(openLeverage);
      setWombatInfo(wombat);
      setThenaInfo(thena);
    };
    fetchApi();
  }, []);

  const [tvlList] = useAppStore((state) => [state.tvlList], shallow);

  const maxApy = Math.max(
    Number(beefyInfo.apy),
    Number(openLeverageInfo.apy),
    Number(wombatInfo.apy),
    Number(thenaInfo.apy)
  );

  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container-fluid p-0 binance">
        <Banner maxApy={maxApy} tvl={tvlList.bnb} />
        <Features />
        <Comparison />
        <EcosystemSlider
          beefyInfo={beefyInfo}
          openLeverageInfo={openLeverageInfo}
          wombatInfo={wombatInfo}
          thenaInfo={thenaInfo}
          deviceType={""}
        />
        <Guides />
        <Validators />
        <Audited />
        <FeaturedBlogs />
        <Faq />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Binance;
