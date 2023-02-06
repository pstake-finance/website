import React from "react";
import useTranslation from "next-translate/useTranslation";
import { Table } from "react-bootstrap";
import Footer from "../components/molecules/Footer";
import {
  PSTAKE_WEB_URL,
  CHORME_URL,
  FIREFOX_URL,
  SAFARI_URL,
  IE_URL,
} from "../utils/config";
const Privacy = () => {
  const { t } = useTranslation("common");
  const mainHeading = "font-semibold text-4xl text-light-high mb-4 md:text-xl";
  const subHeading =
    "font-medium text-lg text-light-emphasis mb-4 md:text-base";
  const contentClass = "font-normal text-base text-light-mid mb-4 md:text-sm";
  return (
    <div>
      <div className="sectionContainer">
        <div className="pt-[150px] pb-[50px]">
          <h1 className={`${mainHeading} text-center`}>
            {t("PRIVACY_POLICY_TITLE_TWO")}
          </h1>
        </div>
        <div className="general-terms">
          <h3 className={mainHeading}>{t("GENERAL")}</h3>
          <p className={subHeading}>{t("GENERAL_TITLE_ONE")}</p>
          <p className={contentClass}>
            {t("GENERAL_TITLE_ONE_SUB")}{" "}
            <a
              href={PSTAKE_WEB_URL}
              rel="noopener noreferrer"
              className="text-[#007bff]"
              target="_blank"
            >
              {PSTAKE_WEB_URL}
            </a>{" "}
            {t("GENERAL_TITLE_ONE_SUB_CONTINUE")}{" "}
          </p>
          <p className={contentClass}>{t("GENERAL_TITLE_ONE_SUB_TWO")}</p>
          <p className={subHeading}>{t("GENERAL_TITLE_TWO")}</p>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-4">
            <table className="w-full bg-black-emphasis text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="text-light-emphasis">
                  <th scope="col" className="px-6 py-3">
                    {t("GENERAL_TITLE_TWO_THEAD_ONE")}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {t("GENERAL_TITLE_TWO_THEAD_TWO")}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {t("GENERAL_TITLE_TWO_THEAD_THREE")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-light-mid dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">
                    {t("GENERAL_TITLE_TWO_THEAD_ROW_ONE")}
                  </td>
                  <td className="px-6 py-4">
                    {t("GENERAL_TITLE_TWO_THEAD_ROW_TWO")}
                  </td>
                  <td className="px-6 py-4">
                    {t("GENERAL_TITLE_TWO_THEAD_ROW_THREE")}
                  </td>
                </tr>
                <tr className="bg-white text-light-mid dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">
                    {t("GENERAL_TITLE_TWO_THEAD_ROW_FOUR")}
                  </td>
                  <td className="px-6 py-4">
                    {t("GENERAL_TITLE_TWO_THEAD_ROW_FIVE")}
                  </td>
                  <td className="px-6 py-4">
                    {t("GENERAL_TITLE_TWO_THEAD_ROW_SIX")}
                  </td>
                </tr>
                <tr className="bg-white text-light-mid dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">
                    {t("GENERAL_TITLE_TWO_THEAD_ROW_SEVEN")}
                  </td>
                  <td className="px-6 py-4">
                    {t("GENERAL_TITLE_TWO_THEAD_ROW_EIGHT")}
                  </td>
                  <td className="px-6 py-4">
                    {t("GENERAL_TITLE_TWO_THEAD_ROW_NINE")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={contentClass}>{t("GENERAL_TITLE_ONE_SUB_THREE")}</p>
          <p className={subHeading}>{t("GENERAL_TITLE_THREE")}</p>
          <p className={contentClass}>{t("GENERAL_TITLE_THREE_SUB_ONE")}</p>
          <p className={contentClass}>{t("GENERAL_TITLE_THREE_SUB_TWO")}</p>
          <p className={contentClass}>{t("GENERAL_TITLE_THREE_SUB_THREE")}</p>
          <p className={contentClass}>{t("GENERAL_TITLE_THREE_SUB_FOUR")}</p>
          <ul className="list-disc pl-8 md:pl-4">
            <li className={contentClass}>
              {t("GENERAL_TITLE_THREE_SUB_FOUR_LIST_ONE")}
              <a
                href={CHORME_URL}
                rel="noopener noreferrer"
                className="text-[#007bff]"
                target="_blank"
              >
                {" "}
                {t("GENERAL_TITLE_THREE_SUB_FOUR_LIST_ONE_CONTINUE")}
              </a>
            </li>
            <li className={contentClass}>
              {t("GENERAL_TITLE_THREE_SUB_FOUR_LIST_TWO")}{" "}
              <a
                href={FIREFOX_URL}
                rel="noopener noreferrer"
                className="text-[#007bff]"
                target="_blank"
              >
                {t("GENERAL_TITLE_THREE_SUB_FOUR_LIST_TWO_CONTINUE")}
              </a>
            </li>
            <li className={contentClass}>
              {t("GENERAL_TITLE_THREE_SUB_FOUR_LIST_THREE")}{" "}
              <a
                href={SAFARI_URL}
                rel="noopener noreferrer"
                className="text-[#007bff]"
                target="_blank"
              >
                {t("GENERAL_TITLE_THREE_SUB_FOUR_LIST_THREE_CONTINUE")}
              </a>
            </li>
            <li className={contentClass}>
              {t("GENERAL_TITLE_THREE_SUB_FOUR_LIST_FOUR")}{" "}
              <a
                href={IE_URL}
                rel="noopener noreferrer"
                className="text-[#007bff]"
                target="_blank"
              >
                {t("GENERAL_TITLE_THREE_SUB_FOUR_LIST_FOUR_CONTINUE")}
              </a>
            </li>
          </ul>
          <p className={subHeading}>{t("GENERAL_TITLE_FOUR")}</p>
          <p className={contentClass}>{t("GENERAL_TITLE_FOUR_SUB_ONE")}</p>
          <p className={contentClass}>{t("GENERAL_TITLE_FOUR_SUB_TWO")}</p>
          <p className={subHeading}>{t("GENERAL_TITLE_FIVE")}</p>
          <p className={contentClass}>{t("GENERAL_TITLE_FIVE_SUB_ONE")}</p>
          <ul className="list-disc pl-8 md:pl-4">
            <li className={contentClass}>{t("GENERAL_TITLE_FIVE_LIST_ONE")}</li>
            <li className={contentClass}>{t("GENERAL_TITLE_FIVE_LIST_TWO")}</li>
            <li className={contentClass}>
              {t("GENERAL_TITLE_FIVE_LIST_THREE")}
            </li>
            <li className={contentClass}>
              {t("GENERAL_TITLE_FIVE_LIST_FOUR")}
            </li>
            <li className={contentClass}>
              {t("GENERAL_TITLE_FIVE_LIST_FIVE")}
            </li>
          </ul>
          <p className={contentClass}>{t("GENERAL_TITLE_FIVE_SUB_TWO")}</p>
          <p className={subHeading}>{t("GENERAL_TITLE_SIX")}</p>
          <p className={contentClass}>{t("GENERAL_TITLE_SIX_SUB_ONE")}</p>
          <ul className="list-disc pl-8 md:pl-4">
            <li className={contentClass}>
              {t("GENERAL_TITLE_SIX_SUB_ONE_LIST_ONE")}
            </li>
            <li className={contentClass}>
              {t("GENERAL_TITLE_SIX_SUB_ONE_LIST_TWO")}
            </li>
            <li className={contentClass}>
              {t("GENERAL_TITLE_SIX_SUB_ONE_LIST_THREE")}
            </li>
          </ul>
          <p className={contentClass}>{t("GENERAL_TITLE_SIX_SUB_TWO")}</p>
          <p className={subHeading}>{t("GENERAL_TITLE_SEVEN")}</p>
          <p className={contentClass}>{t("GENERAL_TITLE_SEVEN_SUB_ONE")}</p>
          <p className={subHeading}>{t("GENERAL_TITLE_EIGHT")}</p>
          <p className={contentClass}>
            {t("GENERAL_TITLE_EIGHT_SUB_ONE")}{" "}
            <a
              href={PSTAKE_WEB_URL}
              rel="noopener noreferrer"
              className="text-[#007bff]"
              target="_blank"
            >
              {PSTAKE_WEB_URL}
            </a>
          </p>
          <p className={contentClass}>{t("GENERAL_TITLE_EIGHT_SUB_TWO")}</p>
          <p className={subHeading}>{t("GENERAL_TITLE_NINE")}</p>
          <p className={contentClass}>{t("GENERAL_TITLE_NINE_SUB_ONE")}</p>
          <p className={contentClass}>{t("GENERAL_TITLE_NINE_SUB_TWO")}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Privacy;
