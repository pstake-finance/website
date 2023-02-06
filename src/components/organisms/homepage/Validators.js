import React from "react";
import {
  CHORUS,
  COSMOSTATION,
  EVERSTAKE,
  FIGMENT,
  STAKEFISH,
  VALIDATOR_COINBASE,
  VALIDATOR_LEGEND,
  VALIDATOR_MATH,
  VALIDATOR_NODE_REAL,
  VALIDATOR_TRANCHES,
} from "../../../utils/config";
import useTranslation from "next-translate/useTranslation";

const Validators = () => {
  const validatorList = [
    {
      link: STAKEFISH,
      image: "stakefish",
    },
    {
      link: FIGMENT,
      image: "figment",
    },
    {
      link: EVERSTAKE,
      image: "everstake",
    },
    {
      link: CHORUS,
      image: "chorus",
    },
    {
      link: COSMOSTATION,
      image: "cosmostation",
    },
    {
      link: VALIDATOR_LEGEND,
      image: "bnb/legend",
    },
    {
      link: VALIDATOR_MATH,
      image: "bnb/math_wallet",
    },
    {
      link: VALIDATOR_COINBASE,
      image: "bnb/cloud",
    },
    {
      link: VALIDATOR_TRANCHES,
      image: "bnb/tranches",
    },
    {
      link: VALIDATOR_NODE_REAL,
      image: "bnb/nodreal",
    },
  ];

  const { t } = useTranslation("common");
  return (
    <section className="aos-init aos-animate bg-black-high" data-aos="fade-up">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle">{t("VALIDATORS")}</h3>
        <p className="sectionSubTitle mb-8 max-w-[700px] mx-auto">
          pSTAKE’s validator scoring mechanism ensures our liquid staking
          ecosystem consists of top-performing validators across supported
          networks.
        </p>
        <div className="flex flex-wrap justify-center items-center text-center">
          {validatorList.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="my-4 mx-4"
            >
              <img
                src={`/images/validators/${item.image}.svg`}
                title={item.image}
                alt={item.image}
                className="w-[240px] rounded-lg"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Validators;
