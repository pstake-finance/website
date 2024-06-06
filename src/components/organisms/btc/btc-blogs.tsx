import React from "react";
import { useTranslation } from "next-export-i18n";
import {
  BTC_SERIES_BLOG_ONE_URL,
  BTC_SERIES_BLOG_ONE_IMAGE_URL,
  BTC_SERIES_BLOG_TWO_URL,
  BTC_SERIES_BLOG_TWO_IMAGE_URL,
  BTC_SERIES_BLOG_THREE_URL,
  BTC_SERIES_BLOG_THREE_IMAGE_URL,
  BTC_SERIES_BLOG_FOUR_IMAGE_URL,
  BTC_SERIES_BLOG_FOUR_URL,
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
const BTCFeaturedBlogs = ({ bg }: Props) => {
  const { t } = useTranslation("");
  const list = [
    {
      title: t("BTC_SERIES_BLOG_ONE_TITLE"),
      blogLink: BTC_SERIES_BLOG_ONE_URL,
      imageLink: BTC_SERIES_BLOG_ONE_IMAGE_URL,
    },
    {
      title: t("BTC_SERIES_BLOG_TWO_TITLE"),
      blogLink: BTC_SERIES_BLOG_TWO_URL,
      imageLink: BTC_SERIES_BLOG_TWO_IMAGE_URL,
    },
    {
      title: t("BTC_SERIES_BLOG_THREE_TITLE"),
      blogLink: BTC_SERIES_BLOG_THREE_URL,
      imageLink: BTC_SERIES_BLOG_THREE_IMAGE_URL,
    },
    {
      title: t("BTC_SERIES_BLOG_FOUR_TITLE"),
      blogLink: BTC_SERIES_BLOG_FOUR_URL,
      imageLink: BTC_SERIES_BLOG_FOUR_IMAGE_URL,
    },
  ];
  const { isMobile } = useWindowSize();
  return (
    <div className={`bg-[${bg}]"`}>
      <div
        className="max-w-[1272px] mx-auto md:mx-4 py-[65px] py-[65px] md:py-[35px]"
        data-aos="fade-up"
      >
        <h3 className="sectionTitle mb-8">{t("BTC_SERIES_BLOGS_TITLE")}</h3>
        <div className={"md:ml-0"}>
          <Carousel
            ssr
            className={`flex items-center ${
              list.length <= 2 ? "-md:justify-center" : ""
            }`}
            deviceType={"mobile"}
            partialVisbile={!isMobile}
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={2000}
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
                          className="rounded-tr-xl rounded-tl-xl max-h-[224px] w-full md:w-auto md:max-h-auto"
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
                          {t("READ_NOW")}
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

export default BTCFeaturedBlogs;
