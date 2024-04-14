import React from "react";
import { useTranslation } from "next-export-i18n";
import Slider, { Settings } from "react-slick";
import Marquee from "react-fast-marquee";
import {
  SEQUOIA_URL,
  COINBASE_VENTURES_URL,
  KRAKEN_VENTURES_URL,
  TENDERMINT_URL,
  DEFI_CAPITAL_URL,
  GALAXY_DIGITAL_URL,
  SPARTAN_CAPITAL,
  SINO_GLOBAL_CAPITAL,
  BINANCE_LABS,
} from "../../../utils/config";
import Carousel from "react-multi-carousel";

const Investors = () => {
  const investorList = [
    {
      link: SPARTAN_CAPITAL,
      image: "spartan.svg",
    },
    {
      link: COINBASE_VENTURES_URL,
      image: "coinbase_v.svg",
    },
    {
      link: BINANCE_LABS,
      image: "binance_labs.svg",
    },
    {
      link: DEFI_CAPITAL_URL,
      image: "defi_cap.svg",
    },

    {
      link: KRAKEN_VENTURES_URL,
      image: "kraken.svg",
    },
    {
      link: BINANCE_LABS,
      image: "binance_labs.svg",
    },
    {
      link: DEFI_CAPITAL_URL,
      image: "defi_cap.svg",
    },

    {
      link: KRAKEN_VENTURES_URL,
      image: "kraken.svg",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 5,
      // partialVisibilityGutter: 10,
    },
    tablet: {
      breakpoint: { max: 1280, min: 768 },
      items: 3,
      // partialVisibilityGutter: 10,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      // partialVisibilityGutter: 10,
    },
  };

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
  };

  const { t } = useTranslation("common");
  return (
    <div className="aos-init aos-animate py-8" data-aos="fade-up">
      <div className="container">
        <p className="text-[20px] text-[#D5D5D5] text-center mb-8">
          Trusted by the best in business and blockchain
        </p>
        <div className="">
          <Marquee className={"flex"}>
            {investorList.map((item, index) => (
              <div key={index}>
                <img
                  key={index}
                  src={`/images/investors/${item.image}`}
                  title={item.image}
                  className="w-[207px] h-[70px] sm:w-[160px] md:w-[180px] mr-[25px]"
                  alt={item.image}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Investors;
