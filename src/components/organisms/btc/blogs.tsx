import React from "react";
import { useTranslation } from "next-export-i18n";
import {
  STK_BTC_BLOG_11_IMAGE_URL,
  STK_BTC_BLOG_11_URL,
  STK_BTC_BLOG_12_IMAGE_URL,
  STK_BTC_BLOG_12_URL,
  STK_BTC_BLOG_EIGHT_IMAGE_URL,
  STK_BTC_BLOG_EIGHT_URL,
  STK_BTC_BLOG_FIVE_IMAGE_URL,
  STK_BTC_BLOG_FIVE_URL,
  STK_BTC_BLOG_FOUR_IMAGE_URL,
  STK_BTC_BLOG_FOUR_URL,
  STK_BTC_BLOG_NINE_IMAGE_URL,
  STK_BTC_BLOG_NINE_URL,
  STK_BTC_BLOG_ONE_IMAGE_URL,
  STK_BTC_BLOG_ONE_URL,
  STK_BTC_BLOG_SEVEN_IMAGE_URL,
  STK_BTC_BLOG_SEVEN_URL,
  STK_BTC_BLOG_SIX_IMAGE_URL,
  STK_BTC_BLOG_SIX_URL,
  STK_BTC_BLOG_TEN_IMAGE_URL,
  STK_BTC_BLOG_TEN_URL,
  STK_BTC_BLOG_THREE_IMAGE_URL,
  STK_BTC_BLOG_THREE_URL,
  STK_BTC_BLOG_TWO_IMAGE_URL,
  STK_BTC_BLOG_TWO_URL,
} from "../../../utils/config";
import Carousel from "react-multi-carousel";
import { useWindowSize } from "../../../customHooks/useWindowSize";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 3,
    partialVisibilityGutter: 10,
  },
  tablet: {
    breakpoint: { max: 1280, min: 768 },
    items: 2,
    partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    partialVisibilityGutter: 10,
  },
};
interface Props {
  bg: string;
}
const FeaturedBlogs = ({ bg }: Props) => {
  const { t } = useTranslation("");
  const list = [
    {
      title: t("BTC_BLOG1_TITLE"),
      blogLink: STK_BTC_BLOG_ONE_URL,
      imageLink: STK_BTC_BLOG_ONE_IMAGE_URL,
      buttonText: t("READ_NOW"),
    },
    {
      title: t("BTC_BLOG2_TITLE"),
      blogLink: STK_BTC_BLOG_TWO_URL,
      imageLink: STK_BTC_BLOG_TWO_IMAGE_URL,
      buttonText: t("READ_NOW"),
    },
    {
      title: t("BTC_BLOG3_TITLE"),
      blogLink: STK_BTC_BLOG_THREE_URL,
      imageLink: STK_BTC_BLOG_THREE_IMAGE_URL,
      buttonText: t("LISTEN_NOW"),
    },
    {
      title: t("BTC_BLOG4_TITLE"),
      blogLink: STK_BTC_BLOG_FOUR_URL,
      imageLink: STK_BTC_BLOG_FOUR_IMAGE_URL,
      buttonText: t("READ_NOW"),
    },
    {
      title: t("BTC_BLOG5_TITLE"),
      blogLink: STK_BTC_BLOG_FIVE_URL,
      imageLink: STK_BTC_BLOG_FIVE_IMAGE_URL,
      buttonText: t("READ_NOW"),
    },
    {
      title: t("BTC_BLOG6_TITLE"),
      blogLink: STK_BTC_BLOG_SIX_URL,
      imageLink: STK_BTC_BLOG_SIX_IMAGE_URL,
      buttonText: t("READ_NOW"),
    },
    {
      title: t("BTC_BLOG7_TITLE"),
      blogLink: STK_BTC_BLOG_SEVEN_URL,
      imageLink: STK_BTC_BLOG_SEVEN_IMAGE_URL,
      buttonText: t("READ_NOW"),
    },
    {
      title: t("BTC_BLOG8_TITLE"),
      blogLink: STK_BTC_BLOG_EIGHT_URL,
      imageLink: STK_BTC_BLOG_EIGHT_IMAGE_URL,
      buttonText: t("READ_NOW"),
    },
    {
      title: t("BTC_BLOG9_TITLE"),
      blogLink: STK_BTC_BLOG_NINE_URL,
      imageLink: STK_BTC_BLOG_NINE_IMAGE_URL,
      buttonText: t("READ_NOW"),
    },
    {
      title: t("BTC_BLOG10_TITLE"),
      blogLink: STK_BTC_BLOG_TEN_URL,
      imageLink: STK_BTC_BLOG_TEN_IMAGE_URL,
      buttonText: t("READ_NOW"),
    },
    {
      title: t("BTC_BLOG11_TITLE"),
      blogLink: STK_BTC_BLOG_11_URL,
      imageLink: STK_BTC_BLOG_11_IMAGE_URL,
      buttonText: t("READ_NOW"),
    },
    {
      title: t("BTC_BLOG12_TITLE"),
      blogLink: STK_BTC_BLOG_12_URL,
      imageLink: STK_BTC_BLOG_12_IMAGE_URL,
      buttonText: t("READ_NOW"),
    },
  ];
  const { isMobile } = useWindowSize();
  return (
    <div className={`bg-[${bg}]"`}>
      <div
        className="max-w-[1272px] mx-auto md:mx-4 py-[65px] py-[65px] md:py-[35px]"
        data-aos="fade-up"
      >
        <h3 className="sectionTitle mb-8">{t("BTC_BLOG_HEADING")}</h3>
        <div className={"md:ml-0"}>
          <Carousel
            ssr
            className={`custom-arrow-slider flex items-center ${
              list.length <= 2 ? "-md:justify-center" : ""
            }`}
            deviceType={"mobile"}
            partialVisbile={!isMobile}
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={2500}
            infinite={true}
          >
            {list.map((item, index) => (
              <div
                className="flex-1 mt-4 px-2 flex h-full md:justify-center"
                key={index}
              >
                <div className="md:w-auto w-full">
                  <div className={"bg-[#1B1B1B] rounded-[10px]"}>
                    <a
                      href={item.blogLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="blog-image h-auto">
                        <img
                          alt="blog2"
                          src={item.imageLink}
                          className={
                            "rounded-tr-xl rounded-tl-xl max-h-[224px] w-full md:w-auto md:max-h-auto"
                          }
                        />
                      </div>

                      <div className="md:p-4 px-6 py-4">
                        <p className="text-[#D1D1D1] leading-normal text-[14px] mb-3">
                          {item.title}
                        </p>
                        <p
                          className="text-[#FFFFFF] inline-flex items-center border-b-2 border-[#EE972C]
                    border-solid text-[12px] text-light-full pb-1"
                        >
                          {item.buttonText}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
