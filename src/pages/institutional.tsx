import React from "react";
import Head from "next/head";
import { useTranslation } from "next-export-i18n";
import Hero from "../components/organisms/institutional/hero";
import Features from "../components/organisms/institutional/features";
import ReadyToStake from "../components/organisms/institutional/ready-to-stake";
import Integrations from "../components/organisms/institutional/integrations";
import Footer from "../components/molecules/Footer";

const Institutional = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>pSTAKE {t("INSTITUTIONAL_FEATURES_TITLE")}</title>
        <meta
          name="description"
          content={t("INSTITUTIONAL_FEATURES_DESCRIPTION")}
        />
      </Head>
      <div className="bg-[#030303] md:pt-28">
        <Hero />
        <Features />
        <ReadyToStake />
        <Integrations />
        <Footer />
      </div>
    </>
  );
};

export default Institutional;
