import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Offering = () => {
  const router = useRouter();

  return (
    <div>
      <div className="container pt-[60px] md:pt-[35px]">
        <h3 className="sectionTitle mb-[80px] md:mb-6 max-w-[1060px] mx-auto">
          pSTAKE’s <span className={"text-[#F7931A]"}>Bitcoin</span> Offering
        </h3>
        <div className={"max-w-[1200px] mx-auto"}>
          <Image
            width={1200}
            height={360}
            src={
              router.asPath.includes("cn")
                ? "/images/btc_offering_cn.svg"
                : "/images/btc_offering.svg"
            }
            alt={"btc_stake"}
            className={"w-full mr-auto"}
          />
        </div>
      </div>
    </div>
  );
};

export default Offering;
