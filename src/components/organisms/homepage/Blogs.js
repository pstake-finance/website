import React from "react";
import { useTranslation } from "next-export-i18n";
import {
  PSTAKE_BLOG_ONE_URL,
  PSTAKE_BLOG_ONE_IMG_URL,
  PSTAKE_BLOG_TWO_URL,
  PSTAKE_BLOG_TWO_IMG_URL,
  PSTAKE_BLOG_THREE_URL,
  PSTAKE_BLOG_THREE_IMG_URL,
  PSTAKE_MEDIUM_URL,
} from "../../../utils/config";
import Icon from "../../molecules/Icon";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
const Blogs = () => {
  const { t } = useTranslation("common");
  const list = [
    {
      title: t("stkATOM User Guide"),
      blogLink: PSTAKE_BLOG_ONE_URL,
      imageLink: PSTAKE_BLOG_ONE_IMG_URL,
    },
    {
      title: t("Why Liquid Staking is a Game-Changer for BNB"),
      blogLink: PSTAKE_BLOG_TWO_URL,
      imageLink: PSTAKE_BLOG_TWO_IMG_URL,
    },
    {
      title: t("stkBNB User Guide"),
      blogLink: PSTAKE_BLOG_THREE_URL,
      imageLink: PSTAKE_BLOG_THREE_IMG_URL,
    },
  ];

  return (
    <div className="aos-init aos-animate bg-black-high" data-aos="fade-up">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-8">{t("FEATURED_BLOGS")}</h3>
        <div className="flex flex-wrap mb-8">
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
                      className="inline-flex items-center border-b-2 border-[#e50913]
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
            variant={"solid"}
            href={PSTAKE_MEDIUM_URL}
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

export default Blogs;
