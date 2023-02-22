import React from "react";
import { useTranslation } from "next-export-i18n";
import {
  STK_ATOM_BLOG_ONE_URL,
  STK_ATOM_BLOG_ONE_IMAGE_URL,
  STK_ATOM_BLOG_TWO_URL,
  STK_ATOM_BLOG_TWO_IMAGE_URL,
  STK_ATOM_BLOG_URL,
  STK_ATOM_BLOG_THREE_URL,
  STK_ATOM_BLOG_THREE_IMAGE_URL,
} from "../../../utils/config";
import Icon from "../../molecules/Icon";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";

const FeaturedBlogs = () => {
  const { t } = useTranslation("common");
  const list = [
    {
      title: "stkATOM Launch Update",
      blogLink: STK_ATOM_BLOG_ONE_URL,
      imageLink: STK_ATOM_BLOG_ONE_IMAGE_URL,
    },
    {
      title: t("LEARN_MORE"),
      blogLink: STK_ATOM_BLOG_TWO_URL,
      imageLink: STK_ATOM_BLOG_TWO_IMAGE_URL,
    },
    {
      title: "stkATOM Crescent Ranged Pool",
      blogLink: STK_ATOM_BLOG_THREE_URL,
      imageLink: STK_ATOM_BLOG_THREE_IMAGE_URL,
    },
  ];
  return (
    <div className="aos-init aos-animate bg-black-high">
      <div
        className="sectionContainer py-[65px] md:py-[35px]"
        data-aos="fade-up"
      >
        <h3 className="sectionTitle mb-8">
          {t("FEATURED_BLOGS")} on Liquid Staking ATOM
        </h3>
        <div className="flex flex-wrap justify-center mb-8">
          {list.map((item, index) => (
            <div
              className="-lg:basis-[33.3%] -lg:max-w-[33.3%] px-4 mt-4"
              key={index}
            >
              <div className="bg-black-full hover:bg-black-emphasis">
                <a
                  href={item.blogLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="blog-image h-auto">
                    <img alt="blog2" src={item.imageLink} />
                  </div>

                  <div className="md:p-4 px-6 py-4">
                    <p className="text-[#555] leading-normal font-semibold text-[12px]">
                      {item.title}
                    </p>
                    <p
                      className="inline-flex items-center border-b-2 border-[#595d7b]
                    border-solid text-[12px] text-light-full pb-2"
                    >
                      {t("LEARN_MORE")}
                      <Icon
                        viewClass="arrow-right w-[14px] fill-[#fff] mx-2"
                        icon="right-arrow"
                      />
                    </p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <ButtonLink
            className={`w-[200px] mx-auto md:py-2 md:text-sm`}
            variant={"custom"}
            customButtonClass={"bg-[#595d7b] text-light-high"}
            href={STK_ATOM_BLOG_URL}
            scale="lg"
            target={"_blank"}
            isDisabled={false}
            focusEffect={true}
          >
            {t("READ_ALL")}
            <Icon
              viewClass="right-arrow w-[14px] fill-[#fff]"
              icon="right-arrow"
            />
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
