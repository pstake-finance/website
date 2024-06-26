import React, { useContext } from "react";

import { useTranslation } from "next-export-i18n";
import Slider from "react-slick";

interface Props {
  bg: string;
}
const AssetSlider = ({ bg }: Props) => {
  const { t } = useTranslation();

  const imgList = [
    // { path: "/images/btc/btc_asset1.png" },
    // { path: "/images/btc/btc_asset2.svg" },
    { path: "/images/btc/btc_asset3.png" },
    { path: "/images/btc/btc_asset4.png" },
    { path: "/images/btc/btc_asset5.png" },
    { path: "/images/btc/btc_asset6.png" },
    { path: "/images/btc/btc_asset7.png" },
    { path: "/images/btc/btc_asset8.png" },
    { path: "/images/btc/btc_asset9.svg" },
  ];
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={`bg-[${bg}]"`}>
      <div className="max-w-[1272px] mx-auto  md:mx-4 py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-8 md:mb-6 max-w-[1130px] mx-auto">
          {t("BTC_CAROUSEL_TITLE")}{" "}
          <span className={"text-[#EE972C]"}>
            {t("BTC_CAROUSEL_TITLE_CONTINUE1")}
          </span>{" "}
          {t("BTC_CAROUSEL_TITLE_CONTINUE2")}
        </h3>
        <Slider {...settings} className={"btc-assets"}>
          {imgList.map((item, index) => (
            <img src={item.path} alt={"ss"} key={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default AssetSlider;
