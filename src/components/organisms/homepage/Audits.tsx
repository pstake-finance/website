import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "next-export-i18n";
import React from "react";
import {
  BNB_IMMUNEFI,
  CONSENSYS_DILLIGENCE,
  COSMOS_IMMUNEFI,
  COSMOS_NOTIANAL,
  COSMOS_OAK_SECURITY,
  FORT_MONITERING,
  HALBOR_AUDIT_REPORT,
  HALBORN_BNB_MODULE,
  HALBORN_COSMOS_MODULE,
  HALBORN_COSMOS_STAKING,
  KUDELSKI_SECURITY_SOLANA,
  PECKSHIELD_BNB,
  PECKSHIELD_ETHEREUM,
  PSTAKE_OAK_AUDIT,
  SOLIDIFIED,
  TRAIL_OF_BITS,
} from "../../../utils/config";
import Icon from "../../molecules/Icon";
import { useWindowSize } from "../../../customHooks/useWindowSize";

const getLogoUrl = (logoName: string) => {
  return `https://raw.githubusercontent.com/persistenceOne/frontend-images/main/pstake-website/audits/${logoName}.svg`;
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 4,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1280, min: 768 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

const auditList = [
  {
    link: COSMOS_IMMUNEFI,
    image: "immunefi",
    title: "pSTAKE Cosmos Module",
    date: "April 2023",
  },
  {
    link: BNB_IMMUNEFI,
    image: "immunefi",
    title: "pSTAKE on BNB Chain",
    date: "Aug 2022",
  },
  {
    link: FORT_MONITERING,
    image: "forta",
    title: "pSTAKE on BNB Chain Monitoring",
    date: "Aug 2022",
  },
  {
    link: COSMOS_OAK_SECURITY,
    image: "oak",
    title: "pSTAKE Cosmos Module",
    date: "Feb 2023",
  },
  {
    link: COSMOS_NOTIANAL,
    image: "notional",
    title: "pSTAKE Cosmos Module",
    date: "Aug 2023",
  },
  {
    link: HALBORN_COSMOS_STAKING,
    image: "halborn",
    title: "Cosmos Hub Liquid Staking Module support",
    date: "Aug 2023",
  },
  {
    link: HALBORN_COSMOS_MODULE,
    image: "halborn",
    title: "pSTAKE Cosmos Module",
    date: "Oct 2022",
  },
  {
    link: HALBORN_BNB_MODULE,
    image: "halborn",
    title: "pSTAKE on BNB Chain",
    date: "Aug 2022",
  },
  {
    link: PECKSHIELD_BNB,
    image: "peckshield",
    title: "pSTAKE on BNB Chain",
    date: "July 2022",
  },
  {
    link: KUDELSKI_SECURITY_SOLANA,
    image: "kudelski",
    title: "pSTAKE on Solana",
    date: "May 2022",
  },
  {
    link: TRAIL_OF_BITS,
    image: "trail_of_bits",
    title: "pSTAKE Cosmos on Ethereum",
    date: "",
  },
  {
    link: CONSENSYS_DILLIGENCE,
    image: "diligence",
    title: "pSTAKE Cosmos on Ethereum",
    date: "Aug 2021",
  },
  {
    link: PECKSHIELD_ETHEREUM,
    image: "peckshield",
    title: "pSTAKE Cosmos on Ethereum",
    date: "July 2021",
  },
  {
    link: SOLIDIFIED,
    image: "solidified",
    title: "pSTAKE Cosmos on Ethereum",
    date: "Aug 2021",
  },
];

const Audits = ({ deviceType }: any) => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();
  return (
    <div className="aos-init aos-animate" data-aos="fade-up">
      <div className="container pt-[60px] py-[70px] md:py-[35px]">
        <p className="text-[40px] md:text-[20px] text-center font-bold mb-0 text-[#FEFEFE]">
          {t("HOME_SECURITY_TITLE")}
        </p>
        <p
          className={
            "text-[20px] md:text-[16px] text-center text-[#D5D5D5] mb-[50px] max-w-[540px] mx-auto"
          }
        >
          {t("HOME_SECURITY_CONTENT")}
        </p>
        <div className={"md:ml-0"}>
          <Carousel
            ssr
            className={`flex items-center`}
            partialVisbile={!isMobile}
            deviceType={deviceType}
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={2000}
            infinite={true}
          >
            {auditList.map((item, index) => (
              <div key={index} className={"px-2 flex h-full"}>
                <div
                  className={
                    "flex-1 bg-[#1B1B1B] border border-[#3A3A3A] rounded-[8px] p-7 flex justify-between flex-col w-[300px]"
                  }
                >
                  <div className={"mb-[60px]"}>
                    <div className={"h-[70px]"}>
                      <img
                        src={getLogoUrl(item.image)}
                        title="item.link"
                        className="w-auto mb-[10px]"
                        alt={item.image}
                      />
                    </div>
                    <div>
                      <p
                        className={
                          "text-left font-semibold text-[20px] text-[#D5D5D5] mb-2"
                        }
                      >
                        {item.title}
                      </p>
                      <p className={"text-[#9E9E9E] text-left"}>{item.date}</p>
                    </div>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    className="text-left font-semibold text-[#F8EAEA] flex items-center hover:text-[#C73238] group"
                    rel="noopener noreferrer"
                    key={index}
                  >
                    {t("SEE_REPORT")}
                    <Icon
                      viewClass="arrow-right w-[14px] ml-2 stroke-[#F8EAEA] group-hover:stroke-[#C73238] fill-transparent"
                      icon="right-arrow2"
                    />
                  </a>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Audits;
