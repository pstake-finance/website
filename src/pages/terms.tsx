import React from "react";
import Footer from "../components/molecules/Footer";
import { useTranslation } from "next-export-i18n";

const Terms = () => {
  const mainHeading = "font-semibold text-4xl text-light-high mb-4 md:text-xl";
  const subHeading =
    "font-normal text-lg text-light-emphasis mb-4 md:text-base";
  const contentClass = "font-normal text-base text-light-mid mb-4 md:text-sm";
  const { t } = useTranslation();
  return (
    <div className="container-fluid p-0 terms-sections">
      <div className="sectionContainer pb-8">
        <div className="pt-[200px] pb-[50px]">
          <h1 className={`${mainHeading} text-center`}> {t("TERMS_OF_USE")}</h1>
        </div>
        <p className="text-red mb-4">{t("LAST_UPDATED")}: 3 November 2023</p>
        <div>
          <p className={contentClass}>
            {t("TERMS_SUB_HEADING")} <b>“{t("TERMS")}”</b>
            {t("TERMS_SUB_HEADING_CONTINUE1")}
            <a
              href="https://pstake.finance/"
              target="_blank"
              rel="noreferrer"
              className="text-[#3e73f0]"
            >
              https://pstake.finance/
            </a>{" "}
            {t("TERMS_SUB_HEADING_CONTINUE2")}
            <b>{t("TERMS_SUB_HEADING_CONTINUE3")}</b>
            {t("TERMS_SUB_HEADING_CONTINUE4")}
            <b>{t("TERMS_SUB_HEADING_CONTINUE5")}</b>
            {t("TERMS_SUB_HEADING_CONTINUE6")}
            <b>{t("TERMS_SUB_HEADING_CONTINUE7")}</b>
            {t("TERMS_SUB_HEADING_CONTINUE8")}
            <a
              href="https://pstake.finance/privacy"
              target="_blank"
              rel="noreferrer"
              className="text-[#3e73f0]"
            >
              https://pstake.finance/privacy
            </a>{" "}
            (“<b>{t("PRIVACY_POLICY")}</b>“).
          </p>
          <p className={contentClass}>
            {t("TERMS_SUB_HEADING2")} “
            <b>{t("TERMS_SUB_HEADING2_CONTINUE1")}</b>”.{" "}
            {t("TERMS_SUB_HEADING2_CONTINUE2")} (“
            <b>{t("TERMS_SUB_HEADING2_CONTINUE3")}</b>”{" "}
            {t("TERMS_SUB_HEADING2_CONTINUE4")} “
            <b>{t("TERMS_SUB_HEADING2_CONTINUE5")}</b>”){" "}
            {t("TERMS_SUB_HEADING2_CONTINUE6")}
          </p>
          <p className={contentClass}>{t("TERMS_SUB_HEADING3")}</p>
          <p className={contentClass}>
            {t("TERMS_SUB_HEADING4")}
            (“
            <b>{t("TERMS_SUB_HEADING4_CONTINUE1")}</b>”),{" "}
            {t("TERMS_SUB_HEADING4_CONTINUE2")} “
            <b>{t("TERMS_SUB_HEADING4_CONTINUE3")}</b>”,{" "}
            {t("TERMS_SUB_HEADING4_CONTINUE4")} “
            <b>{t("TERMS_SUB_HEADING4_CONTINUE5")}</b>”).
          </p>
          <p className={contentClass}>{t("TERMS_SUB_HEADING5")}</p>
          <p className={contentClass}>
            {t("TERMS_SUB_HEADING6")} “
            <b>{t("TERMS_SUB_HEADING6_CONTINUE1")}</b>”
            {t("TERMS_SUB_HEADING6_CONTINUE2")}
          </p>
          <p className={contentClass}>{t("TERMS_SUB_HEADING7")} “</p>

          <p className={subHeading}>
            <b>1. {t("TERMS_OVERVIEW_TITLE")}</b>
          </p>
          <div>
            <p className={contentClass}>
              1.1 {t("TERMS_OVERVIEW_1")} (“
              <b>{t("TERMS_OVERVIEW_1_CONTINUE1")}</b>”):
            </p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>
                {t("TERMS_OVERVIEW_1_LIST_1")}
                (”<b>{t("TERMS_OVERVIEW_1_LIST_1_CONTINUE1")}</b>”){" "}
                {t("TERMS_OVERVIEW_1_LIST_1_CONTINUE2")}
              </li>
              <li className={contentClass}>{t("TERMS_OVERVIEW_1_LIST_2")}</li>
            </ul>

            <p className={contentClass}>
              1.2 {t("TERMS_OVERVIEW_2")} “
              <b>{t("TERMS_OVERVIEW_2_CONTINUE1")}</b>
              ”) {t("TERMS_OVERVIEW_2_CONTINUE2")} (“
              <b>{t("TERMS_OVERVIEW_2_CONTINUE3")}</b>”).
            </p>

            <p className={contentClass}>1.3 {t("TERMS_OVERVIEW_3")}:</p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>
                “<b>{t("TERMS_OVERVIEW_3_LIST_1")}</b>”{" "}
                {t("TERMS_OVERVIEW_3_LIST_1_CONTINUE")}
              </li>
              <li className={contentClass}>
                “<b>{t("TERMS_OVERVIEW_3_LIST_2")}</b>”{" "}
                {t("TERMS_OVERVIEW_3_LIST_2_CONTINUE")}
              </li>
              <li className={contentClass}>
                “<b>{t("TERMS_OVERVIEW_3_LIST_3")}</b>”{" "}
                {t("TERMS_OVERVIEW_3_LIST_3_CONTINUE1")}{" "}
                <a
                  href="https://docs.pstake.finance/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#3e73f0]"
                >
                  https://docs.pstake.finance/
                </a>{" "}
                {t("TERMS_OVERVIEW_3_LIST_3_CONTINUE2")}
              </li>
              <li className={contentClass}>
                “<b>{t("TERMS_OVERVIEW_3_LIST_4")}</b>”{" "}
                {t("TERMS_OVERVIEW_3_LIST_4_CONTINUE1")}
              </li>
              <li className={contentClass}>
                “<b>{t("TERMS_OVERVIEW_3_LIST_5")}</b>”{" "}
                {t("TERMS_OVERVIEW_3_LIST_5_CONTINUE1")}
              </li>
              <li className={contentClass}>
                “<b>{t("TERMS_OVERVIEW_3_LIST_6")}</b>”{" "}
                {t("TERMS_OVERVIEW_3_LIST_6_CONTINUE1")}
              </li>
              <li className={contentClass}>
                “<b>{t("TERMS_OVERVIEW_3_LIST_7")}</b>”{" "}
                {t("TERMS_OVERVIEW_3_LIST_7_CONTINUE")}
              </li>
            </ul>
            <p className={contentClass}>{t("TERMS_OVERVIEW_3_LIST_7_1")}:</p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>{t("TERMS_OVERVIEW_3_LIST_8")}</li>
              <li className={contentClass}>{t("TERMS_OVERVIEW_3_LIST_9")}</li>
              <li className={contentClass}>{t("TERMS_OVERVIEW_3_LIST_10")}</li>
              <li className={contentClass}>{t("TERMS_OVERVIEW_3_LIST_11")}</li>
              <li className={contentClass}>{t("TERMS_OVERVIEW_3_LIST_12")}</li>
            </ul>

            <p className={contentClass}>1.4 {t("TERMS_OVERVIEW_4")}</p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>{t("TERMS_OVERVIEW_4_LIST_1")}</li>
              <li className={contentClass}>{t("TERMS_OVERVIEW_4_LIST_2")}</li>
            </ul>
            <p className={contentClass}>1.5 {t("TERMS_OVERVIEW_5")}</p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>{t("TERMS_OVERVIEW_5_LIST_1")}</li>
            </ul>
            <p className={contentClass}>1.6 {t("TERMS_OVERVIEW_6")}</p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>{t("TERMS_OVERVIEW_6_LIST_1")}</li>
              <li className={contentClass}>{t("TERMS_OVERVIEW_6_LIST_2")}</li>
            </ul>
            <p className={contentClass}>1.7 {t("TERMS_OVERVIEW_7")}</p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>
                {t("TERMS_OVERVIEW_7_LIST_1")} (“
                <b>{t("TERMS_OVERVIEW_7_LIST_1")}</b>”){" "}
                {t("TERMS_OVERVIEW_7_LIST_1_CONTINUE1")} “
                <b>{t("TERMS_OVERVIEW_7_LIST_1_CONTINUE2")}</b>”){" "}
                {t("TERMS_OVERVIEW_7_LIST_1_CONTINUE3")}
              </li>
              <li className={contentClass}>{t("TERMS_OVERVIEW_7_LIST_2")}</li>
              <li className={contentClass}>{t("TERMS_OVERVIEW_7_LIST_3")}</li>
            </ul>
            <p className={contentClass}>
              1.8 <b>{t("TERMS_OVERVIEW_8")}</b>:{" "}
              {t("TERMS_OVERVIEW_8_CONTINUE1")}
            </p>
            <p className={contentClass}>
              <b>{t("TERMS_OVERVIEW_8_CONTINUE2")}:</b>{" "}
              {t("TERMS_OVERVIEW_8_CONTINUE3")}
            </p>
          </div>
          <p className={subHeading}>
            <b>2.{t("TERMS_2")}</b>
          </p>
          <div>
            <p className={contentClass}>2.1 {t("TERMS_2_1")}</p>
            <ul>
              <li className={contentClass}>{t("TERMS_2_1_LIST_1")}</li>
              <li className={contentClass}>
                {t("TERMS_2_1_LIST_2")} “
                <b>{t("TERMS_2_1_LIST_2_CONTINUE1")}</b>”{" "}
                {t("TERMS_2_1_LIST_2_CONTINUE2")}
              </li>
              <li className={contentClass}>
                {t("TERMS_2_1_LIST_3")}
                <ul className={"list-decimal pl-5"}>
                  <li className={contentClass}>{t("TERMS_2_1_LIST_3_1")}</li>
                  <li className={contentClass}>{t("TERMS_2_1_LIST_3_2")}</li>
                  <li className={contentClass}>{t("TERMS_2_1_LIST_3_3")}</li>
                  <li className={contentClass}>{t("TERMS_2_1_LIST_3_4")}</li>
                </ul>
                <b> {t("TERMS_2_1_LIST_3_5")}</b>
              </li>
            </ul>
          </div>
          <p className={subHeading}>
            <b>3. {t("TERMS_3")}</b>
          </p>
          <div>
            <p className={contentClass}>3.1 {t("TERMS_3_1")}</p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>{t("TERMS_3_1_LIST_1")}</li>
              <li className={contentClass}>{t("TERMS_3_1_LIST_2")}</li>
              <li className={contentClass}>{t("TERMS_3_1_LIST_3")}</li>
              <li className={contentClass}>{t("TERMS_3_1_LIST_4")}</li>
              <li className={contentClass}>{t("TERMS_3_1_LIST_5")}</li>
              <li className={contentClass}>{t("TERMS_3_1_LIST_6")}</li>
              <li className={contentClass}>{t("TERMS_3_1_LIST_7")}</li>
              <li className={contentClass}>{t("TERMS_3_1_LIST_8")}</li>
              <li className={contentClass}>{t("TERMS_3_1_LIST_9")}</li>
            </ul>
            <p className={contentClass}>{t("TERMS_3_1_LIST_10")}</p>
            <p className={contentClass}>
              3.2 <b>{t("TERMS_3_2")}</b>
            </p>
            <p className={contentClass}>3.3 {t("TERMS_3_3")} </p>
            <p className={contentClass}>3.4 {t("TERMS_3_4")} </p>
            <p className={contentClass}>3.5 {t("TERMS_3_5")} </p>
            <p className={contentClass}>3.6 {t("TERMS_3_6")}</p>
            <p className={contentClass}>3.7 {t("TERMS_3_7")} </p>
            <p className={contentClass}>3.8 {t("TERMS_3_8")}</p>
          </div>
          <p className={subHeading}>
            <b>4. {t("TERMS_4")}</b>
          </p>
          <div>
            <p className={contentClass}>
              {" "}
              <b>{t("TERMS_4_CONTINUE")}</b>
            </p>
            <p className={contentClass}>
              4.1 “<b>{t("TERMS_4_1")}</b>” {t("TERMS_4_1_CONTINUE")}
            </p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>
                {t("TERMS_4_1_LIST_1")} “<b>{t("TERMS_4_1_LIST_1_CONTINUE")}</b>
                ”);
              </li>
              <li className={contentClass}>{t("TERMS_4_1_LIST_2")}</li>
              <li className={contentClass}>
                {t("TERMS_4_1_LIST_3")}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#3e73f0]"
                  href={
                    "http://www.fatf-gafi.org/publications/high-risk-and-other-monitored-jurisdictions;"
                  }
                >
                  http://www.fatf-gafi.org/publications/high-risk-and-other-monitored-jurisdictions;
                </a>{" "}
                {t("TERMS_4_1_LIST_3_CONTINUE")}
              </li>
              <li className={contentClass}>{t("TERMS_4_1_LIST_4")}</li>
            </ul>
            <p className={contentClass}>
              4.2 “<b>{t("TERMS_4_2")}</b>” {t("TERMS_4_2_CONTINUE1")}
            </p>
            <ul className="list-disc pl-5">
              <li className={contentClass}>
                {t("TERMS_4_2_LIST_1")}
                <ul className={"list-decimal pl-5"}>
                  <li className={contentClass}>{t("TERMS_4_2_LIST_1_1")}</li>
                  <li className={contentClass}>{t("TERMS_4_2_LIST_1_2")}</li>
                </ul>
              </li>
              <li className={contentClass}>
                {t("TERMS_4_2_LIST_2")}{" "}
                <ul className={"list-decimal pl-5"}>
                  <li className={contentClass}>{t("TERMS_4_2_LIST_2_1")}</li>
                  <li className={contentClass}>{t("TERMS_4_2_LIST_2_2")}</li>
                </ul>
              </li>
              <li className={contentClass}>{t("TERMS_4_2_LIST_3")}</li>
              <li className={contentClass}>
                {t("TERMS_4_2_LIST_4")}{" "}
                <a
                  href="https://www.un.org/securitycouncil/content/un-sc-consolidated-list)"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#3e73f0]"
                >
                  https://www.un.org/securitycouncil/content/un-sc-consolidated-list)
                </a>
              </li>
              <li className={contentClass}>{t("TERMS_4_2_LIST_5")}</li>
              <li className={contentClass}>{t("TERMS_4_2_LIST_6")}</li>
            </ul>
            <p className={contentClass}>4.3 “{t("TERMS_4_3")}:</p>
            <ul className="list-disc pl-5">
              <li className={contentClass}>{t("TERMS_4_3_LIST_1")}</li>
              <li className={contentClass}>{t("TERMS_4_3_LIST_2")}</li>
              <li className={contentClass}>{t("TERMS_4_3_LIST_3")}</li>
              <li className={contentClass}>{t("TERMS_4_3_LIST_4")}</li>
              <li className={contentClass}>{t("TERMS_4_3_LIST_5")}</li>
              <li className={contentClass}>{t("TERMS_4_3_LIST_6")}</li>
              <li className={contentClass}>{t("TERMS_4_3_LIST_7")}</li>
              <li className={contentClass}>
                {t("TERMS_4_3_LIST_8")}
                <ul className="list-decimal pl-5">
                  <li className={contentClass}>{t("TERMS_4_3_LIST_8_1")}</li>
                  <li className={contentClass}>{t("TERMS_4_3_LIST_8_2")}</li>
                </ul>
              </li>
              <li className={contentClass}>{t("TERMS_4_3_LIST_9")}</li>
              <p className={contentClass}>{t("TERMS_4_3_LIST_10")} :</p>
              <li className={contentClass}>{t("TERMS_4_3_LIST_11")}</li>
              <li className={contentClass}>
                {t("TERMS_4_3_LIST_12")}
                <ul className="list-decimal pl-5">
                  <li className={contentClass}>{t("TERMS_4_3_LIST_12_1")}</li>
                  <li className={contentClass}>{t("TERMS_4_3_LIST_12_2")}</li>
                </ul>
              </li>
              <li className={contentClass}>{t("TERMS_4_3_LIST_13")}</li>
              <li className={contentClass}>{t("TERMS_4_3_LIST_14")}</li>
              <li className={contentClass}>
                {t("TERMS_4_3_LIST_15")}
                <ul className="list-decimal pl-5">
                  <li className={contentClass}>{t("TERMS_4_3_LIST_15_1")}</li>
                  <li className={contentClass}>{t("TERMS_4_3_LIST_15_2")}</li>
                </ul>
              </li>
              <li className={contentClass}>{t("TERMS_4_3_LIST_16")}</li>
            </ul>
          </div>
          <p className={subHeading}>
            <b>5. {t("TERMS_5")}</b>
          </p>
          <div>
            <p className={contentClass}>
              {" "}
              <b>{t("TERMS_5_CONTINUE")}:</b>
            </p>
            <p className={contentClass}>5.1 {t("TERMS_5_1")}:</p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>{t("TERMS_5_1_LIST_1")}</li>
              <li className={contentClass}>{t("TERMS_5_1_LIST_2")}</li>
            </ul>
            <p className={contentClass}>5.2 {t("TERMS_5_2")}</p>
            <p className={contentClass}>5.3 {t("TERMS_5_3")}</p>
            <p className={contentClass}>5.4 {t("TERMS_5_4")}</p>
            <p className={contentClass}>5.5 {t("TERMS_5_5")}</p>
            <p className={contentClass}>5.6 {t("TERMS_5_6")}</p>
            <p className={contentClass}>5.7 {t("TERMS_5_7")}</p>
            <p className={contentClass}>5.8 {t("TERMS_5_8")}</p>
          </div>
          <p className={subHeading}>
            <b>6. {t("TERMS_6")}</b>
          </p>
          <div>
            <p className={contentClass}>6.1 {t("TERMS_6_1")}</p>
            <p className={contentClass}>6.2 {t("TERMS_6_2")}</p>
            <p className={contentClass}>6.3 {t("TERMS_6_3")}</p>
          </div>
          <p className={subHeading}>
            <b>7. {t("TERMS_7")}</b>
          </p>
          <div>
            <p className={contentClass}>7.1 {t("TERMS_7_1")}</p>
            <p className={contentClass}>7.2 {t("TERMS_7_2")}</p>
            <p className={contentClass}>7.3 {t("TERMS_7_3")}</p>
            <p className={contentClass}>7.4 {t("TERMS_7_4")}</p>
          </div>
          <p className={subHeading}>
            <b>8. {t("TERMS_8")}</b>
          </p>
          <div>
            <p className={contentClass}>8.1 {t("TERMS_8_1")}:</p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>{t("TERMS_8_1_LIST_1")}</li>
              <li className={contentClass}>{t("TERMS_8_1_LIST_2")}</li>
              <li className={contentClass}>{t("TERMS_8_1_LIST_3")}</li>
              <li className={contentClass}>{t("TERMS_8_1_LIST_4")}</li>
            </ul>
            <p className={contentClass}>8.2 {t("TERMS_8_2")}</p>
            <p className={contentClass}>8.3 {t("TERMS_8_3")}</p>
          </div>
          <p className={subHeading}>
            <b>9. {t("TERMS_9")}</b>
          </p>
          <div>
            <p className={contentClass}>9.1 {t("TERMS_9_1")}</p>
            <p className={contentClass}>9.2 {t("TERMS_9_2")}</p>
            <p className={contentClass}>9.3 {t("TERMS_9_3")}</p>
            <p className={contentClass}>9.4 {t("TERMS_9_4")}</p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>{t("TERMS_9_4_LIST_1")}</li>
              <li className={contentClass}>{t("TERMS_9_4_LIST_2")}</li>
            </ul>
            <p className={contentClass}>{t("TERMS_9_5")}</p>
          </div>
          <p className={subHeading}>
            <b>10. {t("TERMS_10")}</b>
          </p>
          <div>
            <p className={contentClass}>
              10.1 {t("TERMS_10_1")} “<b>{t("TERMS_10_1_CONTINUE1")}</b>”),{" "}
              {t("TERMS_10_1_CONTINUE2")}
            </p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>{t("TERMS_10_1_LIST_1")}</li>
              <li className={contentClass}>{t("TERMS_10_1_LIST_2")}</li>
              <li className={contentClass}>{t("TERMS_10_1_LIST_3")}</li>
              <li className={contentClass}>{t("TERMS_10_1_LIST_4")}</li>
            </ul>
            <p className={contentClass}>10.2 {t("TERMS_10_2")}</p>
          </div>
          <p className={subHeading}>
            <b>11. {t("TERMS_11")}</b>
          </p>
          <div>
            <p className={contentClass}>{t("TERMS_11_CONTINUE")}</p>
          </div>
          <p className={subHeading}>
            <b>12. {t("TERMS_12")}</b>
          </p>
          <div>
            <p className={contentClass}>{t("TERMS_12_CONTINUE")}</p>
            <p className={contentClass}>12.1 {t("TERMS_12_1")}</p>
            <p className={contentClass}>12.2 {t("TERMS_12_2")}</p>
            <p className={contentClass}>12.3 {t("TERMS_12_3")}</p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>{t("TERMS_12_3_LIST_1")} </li>
              <li className={contentClass}>{t("TERMS_12_3_LIST_1")}</li>
            </ul>
            <p className={contentClass}>12.4 {t("TERMS_12_4")}</p>
            <p className={contentClass}>12.5 {t("TERMS_12_5")}</p>
            <p className={contentClass}>12.6 {t("TERMS_12_6")}</p>
            <p className={contentClass}>12.7 {t("TERMS_12_7")}</p>
            <p className={contentClass}>12.8 {t("TERMS_12_8")}</p>
            <p className={contentClass}>12.9 {t("TERMS_12_9")}</p>
            <p className={contentClass}>12.10 {t("TERMS_12_10")}</p>
            <p className={contentClass}>12.11 {t("TERMS_12_11")}</p>
            <p className={contentClass}>12.12 {t("TERMS_12_12")}</p>
            <p className={contentClass}>12.13 {t("TERMS_12_13")} </p>
            <p className={contentClass}>12.14 {t("TERMS_12_14")} </p>
            <p className={contentClass}>12.15 {t("TERMS_12_14")} </p>
          </div>
          <p className={subHeading}>
            <b>13. {t("TERMS_13")}</b>
          </p>
          <div>
            <p className={contentClass}>13.1 {t("TERMS_13_1")}</p>
            <p className={contentClass}>13.2 {t("TERMS_13_2")}:</p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>{t("TERMS_13_1_LIST_1")}</li>
              <li className={contentClass}>{t("TERMS_13_1_LIST_2")}</li>
            </ul>
          </div>
          <p className={subHeading}>
            <b>14. {t("TERMS_14")}</b>
          </p>
          <div>
            <p className={contentClass}>
              14.1 <b>{t("TERMS_14_1")}</b> - {t("TERMS_14_1_CONTINUE")}
            </p>
            <p className={contentClass}>
              14.2 <b>{t("TERMS_14_2")}</b>- {t("TERMS_14_2_CONTINUE")}
            </p>
            <p className={contentClass}>
              14.3 <b>{t("TERMS_14_3")}</b> - {t("TERMS_14_3_CONTINUE")}
            </p>
            <p className={contentClass}>
              14.4 <b>{t("TERMS_14_4")}</b>- {t("TERMS_14_4_CONTINUE")}
            </p>
            <p className={contentClass}>
              14.5 <b>{t("TERMS_14_5")}</b>- {t("TERMS_14_5_CONTINUE")}
            </p>
            <p className={contentClass}>
              14.6 <b>{t("TERMS_14_6")}</b> - {t("TERMS_14_6_CONTINUE")}
            </p>
            <p className={contentClass}>
              14.7 <b>{t("TERMS_14_7")}</b>- {t("TERMS_14_7_CONTINUE")}
            </p>
            <p className={contentClass}>
              14.8 <b>{t("TERMS_14_8")}</b> - {t("TERMS_14_8_CONTINUE")}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
