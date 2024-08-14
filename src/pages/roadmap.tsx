import { NextPage } from "next";
import React from "react";
import Footer from "../components/molecules/Footer";
import People from "../components/organisms/team/people";
import BitcoinBanner from "../components/organisms/team/join-team";
import Test from "../components/organisms/roadmap/time-line";
import RoadmapContainer from "../components/organisms/roadmap";

const Roadmap:NextPage = () => {
  return(
    <>
      <RoadmapContainer/>
      <Footer />
    </>
  )
}

export default Roadmap;