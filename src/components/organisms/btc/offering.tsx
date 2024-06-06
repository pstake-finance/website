import React from "react";

const Offering = () => {
  return (
    <div>
      <div className="container pt-[60px] md:py-[35px]">
        <h3 className="sectionTitle mb-[80px] md:mb-6 max-w-[1060px] mx-auto">
          pSTAKE’s <span className={"text-[#F7931A]"}>Bitcoin</span> Offering
        </h3>
        <div className={"max-w-[1200px] mx-auto"}>
          <img
            src={"/images/btc_offering.svg"}
            alt={"btc_stake"}
            className={"w-full mr-auto"}
          />
        </div>
      </div>
    </div>
  );
};

export default Offering;
