import { NextPage } from "next";
import React from "react";
import Footer from "../components/molecules/Footer";
import People from "../components/organisms/team/people";
import BitcoinBanner from "../components/organisms/team/join-team";

const Team:NextPage = () => {
  return(
    <>
      <People/>
      <BitcoinBanner/>
      <Footer />
    </>
  )
}

export default Team;