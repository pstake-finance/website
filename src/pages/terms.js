import React from "react";
import Footer from "../components/molecules/Footer";
import { useTranslation } from "next-export-i18n";
import { PSTAKE_WEB_URL } from "../utils/config";
const Terms = () => {
  const { t } = useTranslation("common");
  const mainHeading = "font-semibold text-4xl text-light-high mb-4 md:text-xl";
  const subHeading =
    "font-normal text-lg text-light-emphasis mb-4 md:text-base";
  const contentClass = "font-normal text-base text-light-mid mb-4 md:text-sm";
  return (
    <div className="container-fluid p-0 terms-sections">
      <div className="sectionContainer pb-8">
        <div className="pt-[200px] pb-[50px]">
          <h1 className={`${mainHeading} text-center`}>
            {t("TERMS_OF_SERVICE_SUBTITLE")}
          </h1>
        </div>
        <p className="text-red mb-4">{t("LAST_UPDATED_DATE")}</p>
        <p className={contentClass}>
          {t("WELCOME_TO_OFFICIAL_WEBSITE")} {PSTAKE_WEB_URL}.{" "}
          {t("WELCOME_TO_OFFICIAL_WEBSITE_SUB")}
        </p>
        <p className={contentClass}>{t("TERMS_OF_USE")}</p>

        <h3 className={mainHeading}>{t("GENERAL")}</h3>
        <p className={subHeading}>
          {t("TERMS_ONE")}{" "}
          <a href={PSTAKE_WEB_URL} rel="noopener noreferrer" target="_blank">
            {PSTAKE_WEB_URL}
          </a>{" "}
          {t("TERMS_ONE_CONTINUE")}
        </p>
        <ul className="list-disc pl-8 md:pl-4">
          <li className={contentClass}>{t("TERMS_LIST_ONE")}</li>
          <li className={contentClass}>{t("TERMS_LIST_TWO")}</li>
        </ul>
        <p className={subHeading}>{t("TERMS_ONE_AFTER")}</p>
        <p className={subHeading}>{t("TERMS_ONE_SUB")}</p>
        <ul className="list-disc pl-8 md:pl-4">
          <li className={contentClass}>{t("TERMS_ONE_SUB_LIST_ONE")}</li>
          <li className={contentClass}>{t("TERMS_ONE_SUB_LIST_TWO")}</li>
        </ul>

        <p className={subHeading}>
          {t("TERMS_TWO")} <b>{t("TERMS_TWO_SUB")}</b>
        </p>
        <p className={subHeading}>{t("TERMS_THREE")}</p>
        <p className={subHeading}>{t("TERMS_FOUR")}</p>
        <p className={subHeading}>{t("TERMS_FIVE")}</p>
        <p className={subHeading}>{t("TERMS_SIX")}</p>
        <p className={subHeading}>{t("TERMS_SEVEN")}</p>
        <p className={subHeading}>{t("TERMS_EIGHT")}</p>
        <p className={subHeading}>{t("TERMS_NINE")} </p>
        <h3 className={mainHeading}>{t("DISCLAIMERS")}</h3>
        <p className={subHeading}>{t("PROTOCOLS_SERVICES")}</p>
        <p className={subHeading}>{t("PROTOCOLS_SERVICES_LIST_ONE")}</p>
        <p className={subHeading}>{t("PROTOCOLS_SERVICES_LIST_TWO")}</p>
        <p className={subHeading}>{t("PROTOCOLS_SERVICES_LIST_THREE")}</p>
        <p className={subHeading}>{t("PROTOCOLS_SERVICES_LIST_FOUR")}</p>
        <p className={subHeading}>{t("PROTOCOLS_SERVICES_LIST_FIVE")}</p>
        <ul className="list-disc pl-8 md:pl-4">
          <li className={contentClass}>
            {t("PROTOCOLS_SERVICES_LIST_FIVE_SUB_ONE")}
          </li>
          <li className={contentClass}>
            {t("PROTOCOLS_SERVICES_LIST_FIVE_SUB_TWO")}
          </li>
        </ul>
        <p className={subHeading}>{t("PROTOCOLS_SERVICES_LIST_SIX")}</p>
        <p className={subHeading}>{t("PROTOCOLS_SERVICES_LIST_SEVEN")}</p>
        <p className={subHeading}>{t("PROTOCOLS_SERVICES_LIST_EIGHT")}</p>
        <p className={subHeading}>{t("PROTOCOLS_SERVICES_LIST_NINE")} </p>
        <p className={subHeading}>{t("PROTOCOLS_SERVICES_LIST_TEN")} </p>
        <p className={subHeading}>{t("PROTOCOLS_SERVICES_LIST_ELEVEN")}</p>
        <h3 className={mainHeading}>{t("NO_SUPPORT")}</h3>
        <p className={subHeading}>{t("NO_SUPPORT_LIST_ONE")}</p>
        <p className={subHeading}>{t("NO_SUPPORT_LIST_TWO")}</p>
        <h3 className={mainHeading}>{t("LIMITED_USE_RESTRICTIONS")}</h3>
        <p className={subHeading}>{t("STAKING_PROTOCOLS_SERVICES_ONE")}</p>
        <ul className="list-disc pl-8 md:pl-4">
          <li className={contentClass}>
            {t("STAKING_PROTOCOLS_SERVICES_ONE_LIST_ONE")}
          </li>
          <li className={contentClass}>
            {t("STAKING_PROTOCOLS_SERVICES_ONE_LIST_TWO")}
          </li>
          <li className={contentClass}>
            {t("STAKING_PROTOCOLS_SERVICES_ONE_LIST_THREE")}
          </li>
        </ul>
        <p className={subHeading}>
          {t("STAKING_PROTOCOLS_SERVICES_ONE_SUB_TEXT")}
        </p>
        <p className={subHeading}>{t("STAKING_PROTOCOLS_SERVICES_TWO")}</p>
        <ul className="list-disc pl-8 md:pl-4">
          <li className={contentClass}>
            {t("STAKING_PROTOCOLS_SERVICES_TWO_LIST_ONE")}
          </li>
          <li className={contentClass}>
            {t("STAKING_PROTOCOLS_SERVICES_TWO_LIST_TWO")}
          </li>
        </ul>
        <p className={subHeading}>
          {t("STAKING_PROTOCOLS_SERVICES_TWO_SUB_TITLE")}
        </p>
        <ul className="list-disc pl-8 md:pl-4">
          <li className={contentClass}>
            {t("STAKING_PROTOCOLS_SERVICES_TWO_SUB_LIST_ONE")}
          </li>
          <li className={contentClass}>
            {t("STAKING_PROTOCOLS_SERVICES_TWO_SUB_LIST_TWO")}
          </li>
        </ul>
        <h3 className={mainHeading}>{t("INTELLECTUAL_PROPERTY_RIGHTS")}</h3>
        <p className={subHeading}>
          {t("INTELLECTUAL_PROPERTY_RIGHTS_LIST_ONE")}
        </p>
        <p className={subHeading}>
          {t("INTELLECTUAL_PROPERTY_RIGHTS_LIST_TWO")}
        </p>
        <h3 className={mainHeading}>{t("TERMINATION_WAIVERS")}</h3>
        <p className={subHeading}>{t("TERMINATION_WAIVERS_LIST_ONE")}</p>
        <p className={subHeading}>{t("TERMINATION_WAIVERS_LIST_TWO")}</p>
        <p className={subHeading}>{t("TERMINATION_WAIVERS_LIST_THREE")}</p>
        <p className={subHeading}>{t("TERMINATION_WAIVERS_LIST_FOUR")}</p>
        <p className={subHeading}>{t("TERMINATION_WAIVERS_LIST_FOUR")}</p>
        <h3 className={mainHeading}>{t("USER_ACKNOWLEDGEMENTS")}</h3>
        <p className={subHeading}>{t("USER_ACKNOWLEDGEMENTS_LIST_ONE")}</p>
        <ul className="list-disc pl-8 md:pl-4">
          <li className={contentClass}>
            {t("USER_ACKNOWLEDGEMENTS_LIST_ONE_SUB_ONE")}
          </li>
          <li className={contentClass}>
            {t("USER_ACKNOWLEDGEMENTS_LIST_ONE_SUB_TWO")}
          </li>
          <li className={contentClass}>
            {t("USER_ACKNOWLEDGEMENTS_LIST_ONE_SUB_TWO")}
          </li>
          <li className={contentClass}>
            {t("USER_ACKNOWLEDGEMENTS_LIST_ONE_SUB_FOUR")}
          </li>
          <li className={contentClass}>
            {t("USER_ACKNOWLEDGEMENTS_LIST_ONE_SUB_FIVE")}
          </li>
          <li className={contentClass}>
            {t("USER_ACKNOWLEDGEMENTS_LIST_ONE_SUB_SIX")}
          </li>
          <li className={contentClass}>
            {t("USER_ACKNOWLEDGEMENTS_LIST_ONE_SUB_SEVEN")}
          </li>
          <li className={contentClass}>
            {t("USER_ACKNOWLEDGEMENTS_LIST_ONE_SUB_EIGHT")}
          </li>
          <li className={contentClass}>
            {t("USER_ACKNOWLEDGEMENTS_LIST_ONE_SUB_NINE")}
          </li>
          <li className={contentClass}>
            {t("USER_ACKNOWLEDGEMENTS_LIST_ONE_SUB_TEN")}
          </li>
        </ul>
        <p className={subHeading}>{t("USER_ACKNOWLEDGEMENTS_LIST_TWO")}</p>
        <ul className="list-disc pl-8 md:pl-4">
          <li className={contentClass}>
            {t("USER_ACKNOWLEDGEMENTS_LIST_TWO_SUB_ONE")}
          </li>
          <li className={contentClass}>
            {t("USER_ACKNOWLEDGEMENTS_LIST_TWO_SUB_ONE")}
          </li>
        </ul>
        <p className={subHeading}>{t("USER_ACKNOWLEDGEMENTS_LIST_THREE")}</p>
        <p className={subHeading}>{t("USER_ACKNOWLEDGEMENTS_LIST_FOUR")}</p>
        <p className={subHeading}>{t("USER_ACKNOWLEDGEMENTS_LIST_FIVE")}</p>
        <p className={subHeading}>{t("USER_ACKNOWLEDGEMENTS_LIST_SIX")}</p>
        <h3 className={mainHeading}>{t("INDEMNIFICATION")}</h3>
        <p className={subHeading}>{t("INDEMNIFICATION_TITLE")}</p>
        <h3 className={mainHeading}>{t("LIMITATIONS")}</h3>
        <p className={subHeading}>{t("LIMITATIONS_TITLE_ONE")}</p>
        <ul className="list-disc pl-8 md:pl-4">
          <li className={contentClass}>
            {t("LIMITATIONS_TITLE_ONE_LIST_ONE")}
          </li>
          <li className={contentClass}>
            {t("LIMITATIONS_TITLE_ONE_LIST_TWO")}
          </li>
        </ul>
        <p className={subHeading}>{t("LIMITATIONS_TITLE_ONE_SUB")}</p>
        <p className={subHeading}>{t("LIMITATIONS_TITLE_TWO")}</p>
        <h3 className={mainHeading}>{t("MISCELLANEOUS")}</h3>
        <p className={subHeading}>{t("MISCELLANEOUS_TITLE_ONE")}</p>
        <p className={subHeading}>{t("MISCELLANEOUS_TITLE_TWO")}</p>
        <p className={subHeading}> {t("MISCELLANEOUS_TITLE_THREE")}</p>
        <p className={subHeading}>{t("MISCELLANEOUS_TITLE_FOUR")}</p>
        <ul className="list-disc pl-8 md:pl-4">
          <li className={contentClass}>
            {t("MISCELLANEOUS_TITLE_FOUR_LIST_ONE")}
          </li>
          <li className={contentClass}>
            {t("MISCELLANEOUS_TITLE_FOUR_LIST_TWO")}
          </li>
          <li className={contentClass}>
            {" "}
            {t("MISCELLANEOUS_TITLE_FOUR_LIST_THREE")}
          </li>
          <li className={contentClass}>
            {" "}
            {t("MISCELLANEOUS_TITLE_FOUR_LIST_FOUR")}
          </li>
          <li className={contentClass}>
            {" "}
            {t("MISCELLANEOUS_TITLE_FOUR_LIST_FIVE")}
          </li>
          <li className={contentClass}>
            {t("MISCELLANEOUS_TITLE_FOUR_LIST_SIX")}
          </li>
          <li className={contentClass}>
            {t("MISCELLANEOUS_TITLE_FOUR_LIST_SEVEN")}
          </li>
          <li className={contentClass}>
            {t("MISCELLANEOUS_TITLE_FOUR_LIST_EIGHT")}
          </li>
          <li className={contentClass}>
            {t("MISCELLANEOUS_TITLE_FOUR_LIST_NINE")}
          </li>
        </ul>
        <p className={subHeading}>{t("MISCELLANEOUS_TITLE_FIVE")}</p>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
