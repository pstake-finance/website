import { NextPage } from "next";
import HeroSection from "../components/organisms/pstake/hero";
import EveryWhere from "../components/organisms/pstake/everywhere";
import Investors from "../components/organisms/homepage/Investors";
import React from "react";
import Uses from "../components/organisms/pstake/pstake-use";
import TokenSaleBanner from "../components/organisms/pstake/token-sale-banner";
import Cexs from "../components/organisms/pstake/cexs";
import Footer from "../components/molecules/Footer";

const PstakePage:NextPage = () => {
  return(
    <>
      <HeroSection/>
      <Investors />
      <Uses/>
      <TokenSaleBanner/>
      <Cexs/>
      <EveryWhere/>
      <Footer />
    </>
  )
}

export default PstakePage;