import React from "react";

import {
  EVERSTAKE,
  FIGMENT,
  STAKEFISH,
  VALIDATOR_ANKR,
  VALIDATOR_AVENGERS,
  VALIDATOR_CERTIC,
  VALIDATOR_COINBASE,
  VALIDATOR_DEFIBIT,
  VALIDATOR_FUJI,
  VALIDATOR_LEGEND,
  VALIDATOR_MATH,
  VALIDATOR_NODE_REAL,
  VALIDATOR_TRANCHES,
} from "../../../utils/config";

const Validators = () => {
  const validatorList = [
    {
      link: VALIDATOR_LEGEND,
      image: "legend",
    },
    {
      link: VALIDATOR_MATH,
      image: "math_wallet",
    },
    {
      link: VALIDATOR_COINBASE,
      image: "cloud",
    },
    {
      link: VALIDATOR_ANKR,
      image: "ankr",
    },
    {
      link: VALIDATOR_DEFIBIT,
      image: "defibit",
    },
    {
      link: VALIDATOR_CERTIC,
      image: "certic",
    },
    {
      link: VALIDATOR_FUJI,
      image: "fuji",
    },
    {
      link: VALIDATOR_TRANCHES,
      image: "tranches",
    },
    {
      link: VALIDATOR_AVENGERS,
      image: "avengers",
    },
    {
      link: VALIDATOR_NODE_REAL,
      image: "nodreal",
    },
  ];
  return (
    <div className="bg-black-high aos-init aos-animate" data-aos="fade-up">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-4">
          Why stake with one validator when you can stake with 10
        </h3>
        <p className="sectionSubTitle max-w-[700px] mx-auto mb-8">
          pSTAKE uses a validator scoring mechanism to stake with the top 10
          validators in the BNB chain ecosystem
        </p>
        <div className="flex flex-wrap justify-center items-center text-center">
          {validatorList.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="m-4 sm:m-2"
            >
              <img
                src={`/images/validators/bnb/${item.image}.svg`}
                title={item.image}
                alt={item.image}
                className="w-[240px] sm:w-[160px] md:w-[200px] rounded-md"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Validators;
