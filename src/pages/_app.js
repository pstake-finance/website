import React, { useEffect } from "react";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/molecules/Header";
import { ANALYTICS } from "../utils/config";
import OneSignalReact from "react-onesignal";
import Head from "next/head";
import AppProvider from "../context/appContext/AppContext";
import Script from "next/script";
import * as gtag from "../utils/gtag";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    OneSignalReact.init({ appId: process.env.NEXT_PUBLIC_ONE_SIGNAL_APP_ID });
    document.body.classList = "";
    document.getElementById("nav-bar").classList.add("navbar-white");
  });

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS}`}
      />
      {/* eslint-disable-next-line @next/next/inline-script-id */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Head>
        <meta charSet="utf-8" />
        <title>pSTAKE | Unlocking liquidity of staked assets</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="pSTAKE, developed by Persistence, is a liquid staking protocol unlocking the liquidity of staked assets.
           Stakers of PoS tokens can stake their assets while unlocking liquidity in the form of stkASSETs,
           which can then be used across DeFi to earn liquid staking rewards."
        />
        <meta
          name="keywords"
          content="liquid staking, pstake, $pstake, cosmos, persistence, stkBNB, stkATOM"
        />

        {/*Open Graph Tags*/}
        <meta
          content="pSTAKE | Unlocking liquidity of staked assets"
          property="og:title"
        />
        <meta property="og:image" content="/ogimage.jpeg" />
        <meta
          property="og:description"
          content="pSTAKE, developed by Persistence, is a liquid staking protocol unlocking the liquidity of staked assets.
           Stakers of PoS tokens can stake their assets while unlocking liquidity in the form of stkASSETs,
           which can then be used across DeFi to earn liquid staking rewards."
        />
        {/*Twitter Tags*/}
        <meta
          content="pSTAKE | Unlocking liquidity of staked assets"
          property="twitter:title"
        />
        <meta
          content="pSTAKE, developed by Persistence, is a liquid staking protocol unlocking the liquidity of staked assets.
           Stakers of PoS tokens can stake their assets while unlocking liquidity in the form of stkASSETs,
           which can then be used across DeFi to earn liquid staking rewards."
          property="twitter:description"
        />
        <meta content="/ogimage.jpeg" property="twitter:image" />
      </Head>
      <Header />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
};

export default App;
