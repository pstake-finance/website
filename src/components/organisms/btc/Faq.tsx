import React, { useContext } from "react";

import Icon from "../../molecules/Icon";
import Accordion from "../../atoms/accordion/Accordion";
import { useTranslation } from "next-export-i18n";

const Faq = () => {
  const { t } = useTranslation();
  const accordionItems = [
    {
      title: t("BTC_FAQ1_TITLE"),
      content: t("BTC_FAQ1_CONTENT"),
    },
    {
      title: t("BTC_FAQ2_TITLE"),
      content: t("BTC_FAQ2_CONTENT"),
    },
    {
      title: t("BTC_FAQ3_TITLE"),
      content: t("BTC_FAQ3_CONTENT"),
    },
    {
      title: t("BTC_FAQ4_TITLE"),
      content: t("BTC_FAQ4_CONTENT"),
    },
    {
      title: t("BTC_FAQ5_TITLE"),
      content: t("BTC_FAQ5_CONTENT"),
    },
    {
      title: t("BTC_FAQ6_TITLE"),
      content: t("BTC_FAQ6_CONTENT"),
    },
  ];
  return (
    <>
      <div id="btcFaqs" className="bg-[#030200]">
        <div className="max-w-[1272px] mx-auto  md:mx-4 py-[65px] md:py-[35px]">
          <div className="sectionTitle mb-8">
            <p className="inline-flex relative">{t("BTC_FAQ_TITLE")}</p>
          </div>
          <div className="max-w-[940px] mx-auto">
            <div className="info">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Faq;
