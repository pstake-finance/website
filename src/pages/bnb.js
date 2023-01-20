import React, { useEffect, useState } from "react";
import SectionTwo from "../containers/binance/SectionTwo";
import FeaturedBlogs from "../containers/binance/FeactureBlog";
import Footer from "../components/Footer";
import Banner from "../containers/binance/Banner";
import Comparison from "../containers/binance/Comparison";
import Guides from "../containers/binance/Guides";
import Audited from "../containers/binance/Audited";
import Validators from "../containers/binance/Validators";
import Faq from "../containers/binance/Faq";
import ScrollToTop from "../components/ScrollToTop";
import EcosystemSlider from "../containers/binance/EcosystemSilder";
import {
  fetchAlpaca,
  fetchBeefyInfo,
  fetchOpenLeverage,
  fetchShield,
  fetchThenaInfo,
  fetchWombat
} from "../actions/api";

const Binance = () => {
  const [alpacaInfo, setAlpacaInfo] = useState({ tvl: 0, apy: 0 });
  const [beefyInfo, setBeefyInfo] = useState({ tvl: 0, apy: 0 });
  const [openLeverageInfo, setOpenLeverageInfo] = useState({ tvl: 0, apy: 0 });
  const [wombatInfo, setWombatInfo] = useState({ tvl: 0, apy: 0 });
  const [shieldInfo, setShieldInfo] = useState({ tvl: 0, apy: 0 });
  const [thenaInfo, setThenaInfo] = useState({ tvl: 0, apy: 0 });

  useEffect(() => {
    const fetchApi = async () => {
      const [alpaca, beefyInfo, openLeverage, wombat, shield, thena] =
        await Promise.all([
          fetchAlpaca(),
          fetchBeefyInfo(),
          fetchOpenLeverage(),
          fetchWombat(),
          fetchShield(),
          fetchThenaInfo()
        ]);
      setAlpacaInfo(alpaca);
      setBeefyInfo(beefyInfo);
      setOpenLeverageInfo(openLeverage);
      setWombatInfo(wombat);
      setShieldInfo(shield);
      setThenaInfo(thena);
    };
    fetchApi();
  }, []);

  const maxApy = Math.max(
    Number(alpacaInfo.apy),
    Number(beefyInfo.apy),
    Number(openLeverageInfo.apy),
    Number(wombatInfo.apy)
  );

  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container-fluid p-0 binance">
        <Banner maxApy={maxApy} />
        <SectionTwo />
        <Comparison />
        <EcosystemSlider
          alpacaInfo={alpacaInfo}
          beefyInfo={beefyInfo}
          openLeverageInfo={openLeverageInfo}
          wombatInfo={wombatInfo}
          shieldInfo={shieldInfo}
          thenaInfo={thenaInfo}
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
