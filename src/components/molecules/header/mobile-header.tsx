import "rc-dropdown/assets/index.css";
import React, { PureComponent } from "react";
import Accordion from "../../atoms/accordion/Accordion";
import { communityDropdownContent } from "./community-dropdown";
import { learnDropDownContent } from "./learn-dropdown";
import { networkDropdownContent } from "./network-dropdown";
import { bridgeDropdownContent } from "./bridge-dropdown";
import Icon from "../Icon";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";

interface Props {
  learnList: any[];
  networks: any[];
  communityList: any[];
  bridgeList: any[];
  className?: string;
  closeMenu: () => void;
}

const MobileHeader = ({
  learnList,
  networks,
  communityList,
  bridgeList,
  className,
  closeMenu,
}: Props) => {
  return (
    <div className={`${className} accordion-mobile-header px-4`} id="mySidenav">
      <div className={"flex items-center justify-between p-4 mb-6"}>
        <img src={"/images/logo.svg"} className="w-[120px]" alt="logo" />
        <button onClick={closeMenu}>
          {" "}
          <Icon viewClass=" fill-[#fff] !w-[17px] !h-[17px]" icon={"close"} />
        </button>
      </div>
      <Accordion
        items={[
          {
            title: "Live Networks",
            content: networkDropdownContent(networks),
            headerClass: "bg-transparent !mb-0 ",
            contentClass: "!px-0",
            hideIcon: true,
          },
          {
            title: "Learn",
            content: learnDropDownContent(learnList),
            headerClass: "bg-transparent !mb-0",
            contentClass: "!px-0",
            hideIcon: true,
          },
          {
            title: "Community",
            content: communityDropdownContent(communityList),
            headerClass: "bg-transparent !mb-0",
            contentClass: "!px-0",
            hideIcon: true,
          },
          {
            title: "Bridges",
            content: bridgeDropdownContent(bridgeList),
            headerClass: "bg-transparent !mb-0",
            contentClass: "!px-0",
            hideIcon: true,
          },
        ]}
      />
      <ButtonLink
        className={`mt-8 hover:!bg-[#E509134D] dropDownButton md:!w-[100%] -lg:!w-[193px] md:py-2 !py-2 md:text-sm md:!text-[12px] !text-[18px] !font-normal`}
        variant={"outline"}
        href={"https://app.pstake.finance/"}
        scale="lg"
        target={"_blank"}
        isDisabled={false}
      >
        <span className="nav-link pophover tooltip-multiline app-btn">
          Liquid Stake Now
        </span>
      </ButtonLink>
    </div>
  );
};
export default MobileHeader;
