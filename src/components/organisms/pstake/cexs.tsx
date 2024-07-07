import React from "react";
import { useTranslation } from "next-export-i18n";

const Cexs = () => {
  const { t } = useTranslation("common");
  const cexList = [
    {
      logoUrl:"/images/cexs/bingx.png",
      link:"/"
    },
    {
      logoUrl:"/images/cexs/bitget.png",
      link:"/"
    }, {
      logoUrl:"/images/cexs/bingx.png",
      link:"/"
    },
    {
      logoUrl:"/images/cexs/bitget.png",
      link:"/"
    }, {
      logoUrl:"/images/cexs/bingx.png",
      link:"/"
    },
    {
      logoUrl:"/images/cexs/bitget.png",
      link:"/"
    }, {
      logoUrl:"/images/cexs/bingx.png",
      link:"/"
    },
    {
      logoUrl:"/images/cexs/bitget.png",
      link:"/"
    }, {
      logoUrl:"/images/cexs/bingx.png",
      link:"/"
    },
    {
      logoUrl:"/images/cexs/bitget.png",
      link:"/"
    },
    {
      logoUrl:"/images/cexs/bingx.png",
      link:"/"
    },
    {
      logoUrl:"/images/cexs/bitget.png",
      link:"/"
    }, {
      logoUrl:"/images/cexs/bingx.png",
      link:"/"
    },
    {
      logoUrl:"/images/cexs/bitget.png",
      link:"/"
    }, {
      logoUrl:"/images/cexs/bingx.png",
      link:"/"
    },

  ]
  return (
    <div className="">
      <div className="container py-[60px] md:py-[35px]">
        <h3 className="sectionTitle mb-8 md:mb-6 max-w-[1060px] mx-auto">
          CEXs
        </h3>
        <div
          className={"flex gap-4 max-w-[1220px] mx-auto md:block items-center flex-wrap"}
        >
          {
            cexList.map((cex, index) => (
              <div className={"rounded-lg border border-[#292929] flex items-center justify-center w-[231px] h-[80px]"} key={index}>
                <img
                  src={cex.logoUrl}
                  alt={"pstake-logo"}
                  // className="w-[148px] h-[36px] mx-2 "
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Cexs;
