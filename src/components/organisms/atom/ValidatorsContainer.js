import React from "react";

import Carousel from "react-multi-carousel";
import { validators_list } from "./ValidatorsList";
import { useWindowSize } from "../../../customHooks/useWindowSize";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    paritialVisibilityGutter: 10,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 10,
  },
};

const ValidatorsContainer = ({ deviceType }) => {
  const { isMobile } = useWindowSize();
  return (
    <div className="bg-black-high aos-init aos-animate" data-aos="fade-up">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-8">
          Why Liquid Stake ATOM with one validator when you can stake with 62?
        </h3>
        <div className="mt-5">
          <Carousel
            ssr
            sliderClass=""
            partialVisbile
            deviceType={deviceType}
            itemClass="image-item"
            responsive={responsive}
            autoPlay={false}
            slidesToSlide={isMobile ? 1 : 5}
          >
            {validators_list.map((item, index) => {
              return (
                <div className="flex flex-col justify-around pt-4" key={index}>
                  <a
                    href={item.val_1_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="flex justify-center items-center
                      bg-black-emphasis mb-4 mr-4 h-[75px] rounded-md px-4 py-2"
                    >
                      <img
                        className="mr-3"
                        src={item.val_1_logo}
                        title={item.val_1_name}
                        alt={item.val_1_name}
                        width={36}
                      />

                      <div className="text-light-full font-medium text-sm leading-normal">
                        {item.val_1_name}
                      </div>
                    </div>
                  </a>
                  <a
                    href={item.val_2_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="flex justify-center items-center
                      bg-black-emphasis mb-4 mr-4 h-[75px] rounded-md px-4 py-2"
                    >
                      <img
                        className="mr-3"
                        src={item.val_2_logo}
                        title={item.val_2_name}
                        alt={item.val_2_name}
                        width={36}
                      />
                      <div className="text-light-full font-medium text-sm leading-normal">
                        {item.val_2_name}
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ValidatorsContainer;
