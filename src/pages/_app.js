import "../styles/globals.css";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import ReactGA from "react-ga4";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/molecules/Header";
import { ANALYTICS } from "../utils/config";
import OneSignalReact from "react-onesignal";
import Head from "next/head";
import AppProvider from "../context/appContext/AppContext";
ReactGA.initialize(ANALYTICS);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.send(page);
};

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  useEffect(() => {
    OneSignalReact.init({ appId: process.env.NEXT_PUBLIC_ONE_SIGNAL_APP_ID });
    document.body.classList = "";
    document.getElementById("nav-bar").classList.add("navbar-white");
  });

  const router = useRouter();

  useEffect(() => {
    const page = router.pathname;
    document.body.classList.add("is-loaded");
    trackPage(page);
  }, [router]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>pSTAKE | Unlocking liquidity of staked assets</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="pSTAKE, developed by Persistence, is a liquid staking protocol unlocking the liquidity of staked assets. Stakers of PoS tokens can stake their assets while unlocking liquidity in the form of stkASSETs, which can then be used across DeFi to earn liquid staking rewards."
        />
        <meta
          name="keywords"
          content="liquid staking, pstake, $pstake, cosmos, persistence"
        />
        <meta property="og:image" content="/static/ogimage.jpeg" />
      </Head>
      <Header />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
};

export default App;
