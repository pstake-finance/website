import React from "react";

import Carousel from "react-multi-carousel";
import { validators_list } from "./ValidatorsList";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    paritialVisibilityGutter: 10
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 10
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 10
  }
};

const Validators = ({ deviceType }) => {
  return (
    <React.Fragment>
      <section className="validators-section">
        <div className="container">
          <h3 className="section-title">
            Why Liquid Stake ATOM with one validator when you can stake with 62?
          </h3>
          <p className="section-sub-title">
            pSTAKE has the largest active validator set among any ATOM liquid
            staking solution to increase decentralization & minimize the risk of
            slashing
          </p>
          <div className="mt-5">
            <Carousel
              ssr
              partialVisbile
              deviceType={deviceType}
              itemClass="image-item"
              responsive={responsive}
              autoPlay={false}
              slidesToSlide={5}
            >
              {validators_list.map((item, index) => {
                return (
                  <div
                    className="d-flex flex-column justify-content-around pt-4"
                    key={index}
                  >
                    <a
                      href={item.val_1_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="validator d-flex justify-content-center align-items-center mb-4">
                        <img
                          className="mr-3"
                          src={item.val_1_logo}
                          title={item.val_1_name}
                          alt={item.val_1_name}
                          width={36}
                        />

                        <div className="d-inline-block text-truncate">
                          {item.val_1_name}
                        </div>
                      </div>
                    </a>
                    <a
                      href={item.val_2_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="validator d-flex justify-content-center align-items-center">
                        <img
                          className="mr-3"
                          src={item.val_2_logo}
                          title={item.val_2_name}
                          alt={item.val_2_name}
                          width={36}
                        />
                        <div className="d-inline-block text-truncate">
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
      </section>
    </React.Fragment>
  );
};

export default Validators;
