import React from "react";
import { useTranslation } from "next-export-i18n";
import {
  BTC_SERIES_BLOG_ONE_URL,
  BTC_SERIES_BLOG_ONE_IMAGE_URL,
  BTC_SERIES_BLOG_TWO_URL,
  BTC_SERIES_BLOG_TWO_IMAGE_URL,
  BTC_SERIES_BLOG_THREE_URL,
  BTC_SERIES_BLOG_THREE_IMAGE_URL,
} from "../../../utils/config";

const BTCFeaturedBlogs = () => {
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
  ];
  return (
    <div className="bg-[#030200]">
      <div
        className="max-w-[1272px] mx-auto md:mx-4 py-[65px] py-[65px] md:py-[35px]"
        data-aos="fade-up"
      >
        <h3 className="sectionTitle mb-8">{t("BTC_SERIES_BLOGS_TITLE")}</h3>
        <div className="flex flex-wrap justify-center mb-4 gap-4 md:block">
          {list.map((item, index) => (
            <div className="flex-1 mt-4" key={index}>
              <div className="bg-[#1B1B1B] rounded-xl">
                <a
                  href={item.blogLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="blog-image h-auto">
                    <img
                      alt="blog2"
                      src={item.imageLink}
                      className={"rounded-tr-xl rounded-tl-xl"}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default BTCFeaturedBlogs;
