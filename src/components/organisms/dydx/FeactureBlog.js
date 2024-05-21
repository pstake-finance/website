import React from "react";
import { useTranslation } from "next-i18next";
import {
  STK_ATOM_BLOG_ONE_URL,
  STK_ATOM_BLOG_ONE_IMAGE_URL,
  STK_ATOM_BLOG_TWO_URL,
  STK_ATOM_BLOG_TWO_IMAGE_URL,
  STK_ATOM_BLOG_URL,
  STK_ATOM_BLOG_THREE_URL,
  STK_ATOM_BLOG_THREE_IMAGE_URL,
  STK_OSMO_BLOG_ONE_URL,
  STK_OSMO_BLOG_ONE_IMAGE_URL,
  STK_OSMO_BLOG_TWO_URL,
  STK_OSMO_BLOG_TWO_IMAGE_URL,
  STK_DYDX_BLOG_ONE_URL,
  STK_DYDX_BLOG_ONE_IMAGE_URL,
  STK_DYDX_BLOG_TWO_URL,
  STK_DYDX_BLOG_TWO_IMAGE_URL,
} from "../../../utils/config";
import Icon from "../../molecules/Icon";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";

const FeaturedBlogs = () => {
  const { t } = useTranslation("common");
  const list = [
    {
      title: "Introducing stkDYDX",
      blogLink: STK_DYDX_BLOG_ONE_URL,
      imageLink: STK_DYDX_BLOG_ONE_IMAGE_URL,
    },
    {
      title: "DYDX liquid staking on Testnet",
      blogLink: STK_DYDX_BLOG_TWO_URL,
      imageLink: STK_DYDX_BLOG_TWO_IMAGE_URL,
    },
  ];
  return (
    <div className="bg-[#1C1C28]">
      <div
        className="sectionContainer py-[65px] md:py-[35px]"
        data-aos="fade-up"
      >
        <h3 className="sectionTitle mb-8">{t("FEATURED_BLOGS")}</h3>
        <div className="flex flex-wrap justify-center mb-4">
          {list.map((item, index) => (
            <div
              className="-lg:basis-[33.3%] -lg:max-w-[33.3%] px-4 mt-4"
              key={index}
            >
              <div className="bg-[#232334] hover:bg-black-emphasis rounded-md">
                <a
                  href={item.blogLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="blog-image h-auto">
                    <img alt="blog2" src={item.imageLink} />
                  </div>

                  <div className="md:p-4 px-6 py-4">
                    <p className="text-[#D1D1D1] leading-normal text-[14px]">
                      {item.title}
                    </p>
                    <p
                      className="text-[#FFFFFF] inline-flex items-center border-b-2 border-[#6966FF]
                    border-solid text-[12px] text-light-full pb-1"
                    >
                      {t("LEARN_MORE")}
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

export default FeaturedBlogs;
