import React, { useEffect } from "react";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/molecules/header";
import AppProvider from "../context/appContext/AppContext";
import * as gtag from "../utils/gtag";
import "../styles/globals.css";
import "rc-tooltip/assets/bootstrap.css";
import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = ({ Component, pageProps }: any) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    // @ts-ignore
    document.body.classList! = "";
    document!.getElementById("nav-bar")!.classList.add("navbar-white");
  });

  return (
    <>
      <Header />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
};

export default App;
