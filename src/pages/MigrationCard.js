import React from "react";
import Icon from "../components/Icon";
import { ATOM_URL, STK_ATOM_MIGRATION_URL } from "../constants/config";
import ButtonLink from "../components/atoms/buttonLink/ButtonLink";

const MigrationCard = () => {
  return (
    <div className="aos-init aos-animate bg-black-high" data-aos="fade-up">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-8">stkATOM Migration</h3>
        <div className="max-w-[1100px] rounded-lg bg-[#26262b] mx-auto px-10 py-8">
          <div className="card-body p-0 flex items-center justify-between flex-wrap md:justify-center">
            <div className="content flex items-center flex-wrap md:justify-center md:mb-4">
              <div className="flex items-center md:mb-4">
                <img
                  src={"/images/stkATOM2.svg"}
                  title="stkATOM2"
                  alt="stkATOM2"
                  className="w-[52px] h-[52px] sm:w-[36px] sm:h-[36px]"
                />
                <Icon
                  viewClass="right-arrow w-[16px] h-[16px] mx-8"
                  icon="right-arrow-bold"
                />
                <img
                  src={"/images/stkAtom.svg"}
                  title="stkATOM2"
                  alt="stkATOM2"
                  className="w-[52px] h-[52px] sm:w-[36px] sm:h-[36px]"
                />
              </div>
              <p
                className="text-light-high sm:text-base text-lg md:text-center
              leading-normal font-medium max-w-[300px] ml-8 mr-4 md:mx-2"
              >
                Migration of stkATOM(ERC-20) to Persistence Core-1 Chain
              </p>
            </div>
            <div className="buttons m-0">
              <ButtonLink
                className={`mx-auto md:py-2 md:text-sm`}
                variant={"custom"}
                href={STK_ATOM_MIGRATION_URL}
                scale="lg"
                customButtonClass="bg-atomPrimary text-light-high"
                target={"_blank"}
                isDisabled={false}
                focusEffect={true}
              >
                Learn More
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MigrationCard;
