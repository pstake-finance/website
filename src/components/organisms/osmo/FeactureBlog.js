import React from "react";
import {
  STK_OSMO_BLOG_ONE_URL,
  STK_OSMO_BLOG_ONE_IMAGE_URL,
  STK_OSMO_BLOG_TWO_URL,
  STK_OSMO_BLOG_TWO_IMAGE_URL,
} from "../../../utils/config";

const FeaturedBlogs = () => {
  const list = [
    {
      title: "OSMO Liquid Staking",
      blogLink: STK_OSMO_BLOG_ONE_URL,
      imageLink: STK_OSMO_BLOG_ONE_IMAGE_URL,
    },
    {
      title: "OSMO liquid staking NOW LIVE",
      blogLink: STK_OSMO_BLOG_TWO_URL,
      imageLink: STK_OSMO_BLOG_TWO_IMAGE_URL,
    },
  ];
  return (
    <div className="bg-[#140F34]">
      <div
        className="sectionContainer py-[65px] md:py-[35px]"
        data-aos="fade-up"
      >
        <h3 className="sectionTitle mb-8">Featured Blogs</h3>
        <div className="flex flex-wrap justify-center mb-4">
          {list.map((item, index) => (
            <div
              className="-lg:basis-[33.3%] -lg:max-w-[33.3%] px-4 mt-4"
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
                        className="inline-flex items-center border-b-2 border-[#5064FB]
                    border-solid text-[12px] text-light-full pb-1"
                      >
                        Learn More
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
