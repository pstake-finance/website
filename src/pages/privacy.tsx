import React from "react";
import { useTranslation } from "next-export-i18n";

const Privacy = () => {
  const { t } = useTranslation();
  const mainHeading = "font-semibold text-4xl text-light-high mb-4 md:text-xl";
  const subHeading =
    "font-medium text-lg text-light-emphasis mb-4 md:text-base";
  const contentClass = "font-normal text-base text-light-mid mb-4 md:text-sm";
  return (
    <div className="container-fluid p-0 terms-sections">
      <div className="sectionContainer pb-8">
        <div className="pt-[200px] pb-[50px]">
          <h1 className={`${mainHeading} text-center`}>
            {t("PRIVACY_HEADING")}
          </h1>
        </div>
        <p className="text-red mb-4">{t("LAST_UPDATED")}: 13 July 2023</p>
        <div>
          <p className={subHeading}>
            <b>1. {t("PRIVACY_1")}</b>
          </p>
          <div>
            <p className={contentClass}>1.1 {t("PRIVACY_1_1")}</p>
            <div>
              <p className={contentClass}>1.2 {t("PRIVACY_1_2")}</p>
              <ul className={"list-disc pl-5"}>
                <li className={contentClass}>{t("PRIVACY_1_2_LIST_1")}</li>
                <li className={contentClass}>{t("PRIVACY_1_2_LIST_2")}</li>
              </ul>
            </div>
            <p className={contentClass}>1.3 {t("PRIVACY_1_3")}</p>
            <p className={contentClass}>1.4 {t("PRIVACY_1_4")}</p>
            <p className={contentClass}>1.5 {t("PRIVACY_1_5")}</p>
            <p className={contentClass}>1.6 {t("PRIVACY_1_6")}</p>
            <p className={contentClass}>1.7 {t("PRIVACY_1_7")}</p>
          </div>
          <p className={subHeading}>
            <b>2. {t("PRIVACY_2")}</b>
          </p>
          <p className={contentClass}>2.1 {t("PRIVACY_2_1")}</p>
          <p className={subHeading}>
            <b>3. {t("PRIVACY_3")}</b>
          </p>
          <div>
            <p className={contentClass}>
              3.1 <b>{t("PRIVACY_3_1")}</b> {t("PRIVACY_3_1_CONTINUE")}
            </p>
            <p className={contentClass}>
              3.2 <b>{t("PRIVACY_3_2")}</b> {t("PRIVACY_3_2_CONTINUE")}
            </p>
            <p className={contentClass}>
              3.3 <b>{t("PRIVACY_3_3")}</b> {t("PRIVACY_3_3_CONTINUE")}
            </p>
            <p className={contentClass}>
              3.4 <b>{t("PRIVACY_3_4")}</b> {t("PRIVACY_3_4_CONTINUE")}
            </p>
            <p className={contentClass}>
              3.5 <b>{t("PRIVACY_3_5")}</b> {t("PRIVACY_3_5_CONTINUE")}
            </p>
            <p className={contentClass}>
              3.6 <b> {t("PRIVACY_3_6")}</b> {t("PRIVACY_3_6_CONTINUE")}
            </p>
          </div>
          <p className={subHeading}>
            <b>4. {t("PRIVACY_4")}</b>
          </p>
          <div>
            <p className={contentClass}>
              4.1 <b>{t("PRIVACY_4_1")}</b> {t("PRIVACY_4_1_CONTINUE")}
            </p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>{t("PRIVACY_4_1_LIST_1")}</li>
              <li className={contentClass}>{t("PRIVACY_4_1_LIST_2")}</li>
              <li className={contentClass}>{t("PRIVACY_4_1_LIST_3")}</li>
              <li className={contentClass}>{t("PRIVACY_4_1_LIST_4")}</li>
              <li className={contentClass}>{t("PRIVACY_4_1_LIST_5")}</li>
              <li className={contentClass}>{t("PRIVACY_4_1_LIST_6")}</li>
              <li className={contentClass}>{t("PRIVACY_4_1_LIST_7")}</li>
            </ul>
            <p className={contentClass}>
              4.2 <b>{t("PRIVACY_4_2")}</b> {t("PRIVACY_4_2_CONTINUE")}
            </p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>{t("PRIVACY_4_2_LIST_1")}</li>
              <li className={contentClass}>{t("PRIVACY_4_2_LIST_2")}</li>
              <li className={contentClass}>{t("PRIVACY_4_2_LIST_3")}</li>
              <li className={contentClass}>{t("PRIVACY_4_2_LIST_4")}</li>
              <li className={contentClass}>{t("PRIVACY_4_2_LIST_5")}</li>
            </ul>
          </div>
          <p className={subHeading}>
            <b>5. {t("PRIVACY_5")}</b>
          </p>
          <div>
            <p className={contentClass}>
              5.1 <b>{t("PRIVACY_5_1")}</b> {t("PRIVACY_5_1_CONTINUE")}
            </p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>{t("PRIVACY_5_1_LIST_1")}</li>
              <li className={contentClass}>{t("PRIVACY_5_1_LIST_2")}</li>
              <li className={contentClass}>{t("PRIVACY_5_1_LIST_3")}</li>
              <li className={contentClass}>{t("PRIVACY_5_1_LIST_4")}</li>
            </ul>
            <p className={contentClass}>
              5.2 <b>{t("PRIVACY_5_2")}</b> {t("PRIVACY_5_2_CONTINUE")}
            </p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>{t("PRIVACY_5_2_LIST_1")}</li>
              <li className={contentClass}>{t("PRIVACY_5_2_LIST_2")}</li>
              <li className={contentClass}>{t("PRIVACY_5_2_LIST_3")}</li>
              <li className={contentClass}>{t("PRIVACY_5_2_LIST_4")}</li>
              <li className={contentClass}>{t("PRIVACY_5_2_LIST_5")}</li>
              <li className={contentClass}>{t("PRIVACY_5_2_LIST_6")}</li>
              <li className={contentClass}>{t("PRIVACY_5_2_LIST_7")}</li>
              <li className={contentClass}>{t("PRIVACY_5_2_LIST_8")}</li>
              <li className={contentClass}>{t("PRIVACY_5_2_LIST_9")}</li>
              <li className={contentClass}>{t("PRIVACY_5_2_LIST_10")}</li>
              <li className={contentClass}>{t("PRIVACY_5_2_LIST_11")}</li>
              <li className={contentClass}>{t("PRIVACY_5_2_LIST_12")}</li>
              <li className={contentClass}>{t("PRIVACY_5_2_LIST_13")}</li>
              <li className={contentClass}>{t("PRIVACY_5_2_LIST_14")}</li>
            </ul>
            <p className={contentClass}>{t("PRIVACY_5_2_LIST_15")}</p>
            <p className={contentClass}>
              5.3 <b>{t("PRIVACY_5_3")}</b> {t("PRIVACY_5_3_CONTINUE")}
            </p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>{t("PRIVACY_5_3_LIST_1")}</li>
              <li className={contentClass}>{t("PRIVACY_5_3_LIST_2")}</li>
              <li className={contentClass}>{t("PRIVACY_5_3_LIST_3")}</li>
              <li className={contentClass}>{t("PRIVACY_5_3_LIST_4")}</li>
              <li className={contentClass}>{t("PRIVACY_5_3_LIST_5")}</li>
              <li className={contentClass}>{t("PRIVACY_5_3_LIST_6")}</li>
              <li className={contentClass}>{t("PRIVACY_5_3_LIST_7")}</li>
            </ul>
            <p className={contentClass}>
              5.4 <b>{t("PRIVACY_5_4")}</b> {t("PRIVACY_5_4_CONTINUE")}
            </p>
            <p className={contentClass}>
              5.5 <b>{t("PRIVACY_5_5")}</b>
              {t("PRIVACY_5_5_CONTINUE")}
            </p>
            <p className={contentClass}>
              5.6 <b>{t("PRIVACY_5_6")}</b> {t("PRIVACY_5_6_CONTINUE")}
            </p>
          </div>
          <p className={subHeading}>
            <b>6. {t("PRIVACY_6")}</b>
          </p>
          <div>
            <p className={contentClass}>
              6.1 <b>{t("PRIVACY_6_1")}</b> {t("PRIVACY_6_1_CONTINUE")}
            </p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>{t("PRIVACY_6_1_LIST_1")}</li>
              <li className={contentClass}>{t("PRIVACY_6_1_LIST_2")}</li>
              <li className={contentClass}>{t("PRIVACY_6_1_LIST_3")}</li>
            </ul>
            <p className={contentClass}>
              6.2 <b>{t("PRIVACY_6_2")}</b> {t("PRIVACY_6_2_CONTINUE")}
            </p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>{t("PRIVACY_6_2_LIST_1")}</li>
              <li className={contentClass}>{t("PRIVACY_6_2_LIST_2")}</li>
              <li className={contentClass}>{t("PRIVACY_6_2_LIST_3")}</li>
            </ul>
            <p className={contentClass}>{t("PRIVACY_6_2_LIST_4")}</p>
            <p className={contentClass}>
              6.3 <b>{t("PRIVACY_6_3")}</b> {t("PRIVACY_6_3_CONTINUE")}
            </p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>{t("PRIVACY_6_3_LIST_1")}</li>
              <li className={contentClass}>{t("PRIVACY_6_3_LIST_2")}</li>
              <li className={contentClass}>{t("PRIVACY_6_3_LIST_3")}</li>
              <li className={contentClass}>{t("PRIVACY_6_3_LIST_4")}</li>
            </ul>
            <p className={contentClass}>
              6.4<b> {t("PRIVACY_6_4")}</b> {t("PRIVACY_6_4_CONTINUE")}
            </p>
            <p className={contentClass}>
              6.5<b>{t("PRIVACY_6_5")}</b> {t("PRIVACY_6_5_CONTINUE")}
            </p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>
                {t("PRIVACY_6_5_LIST_1")}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#3e73f0]"
                  href={"https://tools.google.com/dlpage/gaoptout"}
                >
                  https://tools.google.com/dlpage/gaoptout
                </a>
              </li>
              <li className={contentClass}>
                {t("PRIVACY_6_5_LIST_2")}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#3e73f0]"
                  href={"www.allaboutcookies.org"}
                >
                  www.allaboutcookies.org
                </a>
              </li>
            </ul>
            <p className={contentClass}>
              6.6 <b>{t("PRIVACY_6_6")}</b> {t("PRIVACY_6_6_CONTINUE1")}{" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="text-[#3e73f0]"
                href={" www.youronlinechoices.eu"}
              >
                www.youronlinechoices.eu
              </a>{" "}
              {t("PRIVACY_6_6_CONTINUE2")}{" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="text-[#3e73f0]"
                href={"www.allaboutcookies.org"}
              >
                www.allaboutcookies.org
              </a>
              . {t("PRIVACY_6_6_CONTINUE3")}
            </p>
            <p className={contentClass}>
              6.7 <b>{t("PRIVACY_6_7")}</b> {t("PRIVACY_6_7_CONTINUE")}
            </p>
          </div>
          <p className={subHeading}>
            <b>7. {t("PRIVACY_7")}</b>
          </p>
          <div>
            <p className={contentClass}>
              7.1 <b>{t("PRIVACY_7_1")}</b> {t("PRIVACY_7_1_CONTINUE")}
            </p>
            <p className={contentClass}>
              7.2 <b>{t("PRIVACY_7_2")}</b> {t("PRIVACY_7_2_CONTINUE")}
            </p>
            <ul className={"list-disc pl-5"}>
              <li className={contentClass}>{t("PRIVACY_7_2_LIST_1")}</li>
              <li className={contentClass}>{t("PRIVACY_7_2_LIST_2")}</li>
              <li className={contentClass}>{t("PRIVACY_7_2_LIST_3")}</li>
              <li className={contentClass}>{t("PRIVACY_7_2_LIST_4")}</li>
              <li className={contentClass}>{t("PRIVACY_7_2_LIST_5")}</li>
              <li className={contentClass}>{t("PRIVACY_7_2_LIST_6")}</li>
              <li className={contentClass}>{t("PRIVACY_7_2_LIST_7")}</li>
            </ul>
            <p className={contentClass}>{t("PRIVACY_7_2_LIST_8")}</p>
          </div>
        </div>
        <p className={subHeading}>
          <b>8. {t("PRIVACY_8")}</b>
        </p>
        <div>
          <p className={contentClass}>{t("PRIVACY_8_1")}</p>
          <ul className={"list-disc pl-5"}>
            <li className={contentClass}>{t("PRIVACY_8_1_LIST_1")}</li>
            <li className={contentClass}>{t("PRIVACY_8_1_LIST_2")}</li>
          </ul>
          <p className={contentClass}>
            <b>{t("PRIVACY_8_2")}.</b> {t("PRIVACY_8_2_CONTINUE")}
          </p>
        </div>
        <p className={subHeading}>
          <b>9. {t("PRIVACY_9")}</b>
        </p>
        <div>
          <p className={contentClass}>
            9.1 <b>{t("PRIVACY_9_1")}</b> {t("PRIVACY_9_1_CONTINUE")}
          </p>
          <p className={contentClass}>
            9.2 <b>{t("PRIVACY_9_2")}.</b> {t("PRIVACY_9_2_CONTINUE")}
          </p>
          <p className={contentClass}>
            9.3 <b> {t("PRIVACY_9_3")}</b> {t("PRIVACY_9_3_CONTINUE")}
          </p>
          <p className={contentClass}>
            9.4 <b>{t("PRIVACY_9_4")}</b> {t("PRIVACY_9_4_CONTINUE")}
          </p>
        </div>
        <p className={subHeading}>
          <b>10. {t("PRIVACY_10")}</b>
        </p>
        <div>
          <p className={contentClass}>
            10.1 <b> {t("PRIVACY_10_1")}</b> {t("PRIVACY_10_1_CONTINUE")}
          </p>
          <ul className={"list-disc pl-5"}>
            <li className={contentClass}>{t("PRIVACY_10_1_LIST_1")}</li>
            <li className={contentClass}>{t("PRIVACY_10_1_LIST_2")}</li>
            <li className={contentClass}>{t("PRIVACY_10_1_LIST_3")}</li>
            <li className={contentClass}>{t("PRIVACY_10_1_LIST_4")}</li>
            <li className={contentClass}>{t("PRIVACY_10_1_LIST_5")}</li>
            <li className={contentClass}>{t("PRIVACY_10_1_LIST_6")}</li>
          </ul>
          <p className={contentClass}>{t("PRIVACY_10_2")}</p>
          <p className={contentClass}>
            10.2 <b>{t("PRIVACY_10_3")}.</b> {t("PRIVACY_10_3_CONTINUE")}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Privacy;
