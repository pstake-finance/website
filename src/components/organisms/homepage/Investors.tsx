import React from "react";
import { useTranslation } from "next-export-i18n";
import Marquee from "react-fast-marquee";

const getLogoUrl = (logoName: string) => {
  return `https://raw.githubusercontent.com/persistenceOne/frontend-images/main/pstake-website/investors/${logoName}.svg`;
};

const Investors = () => {
  const investorList = [
    {
      image: "spartan",
    },
    {
      image: "coinbase_ventures",
    },
    {
      image: "bnb_labs",
    },
    {
      image: "defi_capital",
    },

    {
      image: "mraken",
    },
    {
      image: "coinbase",
    },
    {
      image: "galaxy",
    },

    {
      image: "lattice",
    },
  ];

  const { t } = useTranslation("common");
  return (
    <div className="aos-init aos-animate py-8" data-aos="fade-up">
      <div className="container">
        <p className="text-[20px] md:text-[18px] text-[#D5D5D5] text-center mb-8">
          Trusted by the best in business and blockchain
        </p>
        <div className="">
          <Marquee className={"flex"}>
            {investorList.map((item, index) => (
              <div key={index}>
                <img
                  key={index}
                  src={getLogoUrl(item.image)}
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
