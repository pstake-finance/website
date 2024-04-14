import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { HALBOR_AUDIT_REPORT, PSTAKE_OAK_AUDIT } from "../../../utils/config";
import Icon from "../../molecules/Icon";

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
    link: HALBOR_AUDIT_REPORT,
    image: "halborn",
  },
  {
    link: PSTAKE_OAK_AUDIT,
    image: "oak_white",
  },
  {
    link: HALBOR_AUDIT_REPORT,
    image: "halborn",
  },
  {
    link: PSTAKE_OAK_AUDIT,
    image: "oak_white",
  },
  {
    link: HALBOR_AUDIT_REPORT,
    image: "halborn",
  },
  {
    link: PSTAKE_OAK_AUDIT,
    image: "oak_white",
  },
  {
    link: HALBOR_AUDIT_REPORT,
    image: "halborn",
  },
  {
    link: PSTAKE_OAK_AUDIT,
    image: "oak_white",
  },
  {
    link: HALBOR_AUDIT_REPORT,
    image: "halborn",
  },
  {
    link: PSTAKE_OAK_AUDIT,
    image: "oak_white",
  },
];

const Audits = ({ deviceType }: any) => {
  return (
    <div className="aos-init aos-animate" data-aos="fade-up">
      <div className="container pt-[60px] py-[70px] md:py-[35px]">
        <p className="text-[40px] text-center font-bold mb-0 text-[#FEFEFE]">
          Safety and Security Partners
        </p>
        <p className={"text-[20px] text-center text-[#D5D5D5] mb-[50px]"}>
          Blockchain security leaders have partnered with and audited
          <br /> liquid staking with pSTAKE Finance.
        </p>
        <div className={"ml-[100px]"}>
          <Carousel
            ssr
            className={`flex items-center ${
              auditList.length <= 2 ? "-md:justify-center" : ""
            }`}
            partialVisbile
            deviceType={deviceType}
            responsive={responsive}
            autoPlay={true}
          >
            {auditList.map((item, index) => (
              <div key={index} className={"px-2 flex h-full"}>
                <div
                  className={
                    "flex-1 bg-[#1B1B1B] border border-[#3A3A3A] rounded-[8px] p-7 flex justify-between flex-col w-[300px]"
                  }
                >
                  <div className={"mb-[60px]"}>
                    <img
                      src={`/images/audits/${item.image}.svg`}
                      title="item.link"
                      className="w-auto mb-[40px]"
                      alt={item.image}
                    />
                    <div>
                      <p
                        className={
                          "text-left font-semibold text-[20px] text-[#D5D5D5] mb-2"
                        }
                      >
                        Title
                      </p>
                      <p className={"text-[#9E9E9E] text-left"}>Info</p>
                    </div>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    className="text-left font-semibold text-[#F8EAEA] flex items-center"
                    rel="noopener noreferrer"
                    key={index}
                  >
                    See Report
                    <Icon
                      viewClass="arrow-right w-[14px] ml-2"
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
