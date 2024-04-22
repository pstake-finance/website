import React, { useEffect } from "react";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/molecules/header";
import { ANALYTICS } from "../utils/config";
import AppProvider from "../context/appContext/AppContext";
import Script from "next/script";
import * as gtag from "../utils/gtag";
import "../styles/globals.css";
import "rc-tooltip/assets/bootstrap.css";
import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <Header />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
};

export default App;
