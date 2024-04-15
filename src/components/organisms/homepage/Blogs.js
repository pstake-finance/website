import React from "react";
import Carousel from "react-multi-carousel";
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
import { useWindowSize } from "../../../customHooks/useWindowSize";

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

const Blogs = ({ deviceType }) => {
  const { isMobile } = useWindowSize();
  const { t } = useTranslation("common");
  const list = [
    {
      title: "PSTAKE Airdrop on Solana",
      blogLink: PSTAKE_BLOG_ONE_URL,
      imageLink: PSTAKE_BLOG_ONE_IMG_URL,
    },
    {
      title: "pSTAKE’s Road to Traction in 2024",
      blogLink: PSTAKE_BLOG_TWO_URL,
      imageLink: PSTAKE_BLOG_TWO_IMG_URL,
    },
    {
      title: "pSTAKE x Pancakeswap",
      blogLink: PSTAKE_BLOG_THREE_URL,
      imageLink: PSTAKE_BLOG_THREE_IMG_URL,
    },
  ];

  return (
    <div className="aos-init aos-animate" data-aos="fade-up">
      <div className="max-w-[1240px] mx-auto pt-[60px] py-[70px] md:py-[35px]">
        <p className="text-[40px] md:text-[20px] text-center font-bold mb-0 text-[#FEFEFE] mb-[40px]">
          Featured Blogs
        </p>
        {isMobile ? (
          <Carousel
            ssr
            className={`flex items-center`}
            partialVisbile={!isMobile}
            deviceType={deviceType}
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={1000}
            infinite={true}
          >
            {list.map((item, index) => (
              <div
                className="-lg:basis-[33.3%] -lg:max-w-[33.3%] px-4 mt-4"
                key={index}
              >
                <div className="bg-[#1B1B1B] rounded-[10px]">
                  <a
                    href={item.blogLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="blog-image h-auto max-h-[233px]">
                      <img
                        alt="blog2"
                        className={"rounded-tr-[10px] rounded-tl-[10px]"}
                        src={item.imageLink}
                      />
                    </div>

                    <div className="md:p-4 px-6 py-5">
                      <p className="text-[#D1D1D1] leading-normal text-[14px] mb-2">
                        {item.title}
                      </p>
                      <p className="inline-flex font-semibold text-[14px] text-[#F8EAEA] pb-2">
                        Read
                        <Icon
                          viewClass="arrow-right w-[14px] fill-[#fff] mx-2"
                          icon="right-arrow2"
                        />
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="flex flex-wrap mb-8">
            {list.map((item, index) => (
              <div
                className="-lg:basis-[33.3%] -lg:max-w-[33.3%] px-4 mt-4"
                key={index}
              >
                <div className="bg-[#1B1B1B] rounded-[10px]">
                  <a
                    href={item.blogLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="blog-image h-[212px] overflow-hidden">
                      <img
                        alt="blog2"
                        className={"rounded-tr-[10px] rounded-tl-[10px]"}
                        src={item.imageLink}
                      />
                    </div>

                    <div className="md:p-4 px-6 py-5">
                      <p className="text-[#D1D1D1] leading-normal text-[14px] mb-2">
                        {item.title}
                      </p>
                      <p className="inline-flex font-semibold text-[14px] text-[#F8EAEA] pb-2">
                        Read
                        <Icon
                          viewClass="arrow-right w-[14px] fill-[#fff] mx-2"
                          icon="right-arrow2"
                        />
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="hidden">
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
