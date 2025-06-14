import "rc-dropdown/assets/index.css";
import React, { PureComponent } from "react";
import Accordion from "../../atoms/accordion/Accordion";
import { communityDropdownContent } from "./community-dropdown";
import { learnDropDownContent } from "./learn-dropdown";
import { aboutDropdownContent } from "./about-dropdown";
import { governanceDropdownContent } from "./governanace-dropdown";
import { bridgeDropdownContent } from "./bridge-dropdown";
import Icon from "../Icon";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import Image from "next/image";
import { stakingDropdownContent } from "./staking-dropdown";

interface Props {
  learnList: any[];
  aboutList: any[];
  governanceList: any[];
  communityList: any[];
  bridgeList: any[];
  stakingList: any[];
  className?: string;
  closeMenu: () => void;
}

const MobileHeader = ({
  learnList,
  aboutList,
  communityList,
  governanceList,
  bridgeList,
  stakingList,
  className,
  closeMenu,
}: Props) => {
  return (
    <div className={`${className} accordion-mobile-header px-4`} id="mySidenav">
      <div className={"flex items-center justify-between p-4 mb-6"}>
        <Image src={"/images/logo.svg"} width={120} height={30} alt="logo" />
        <button onClick={closeMenu}>
          {" "}
          <Icon viewClass=" fill-[#fff] !w-[17px] !h-[17px]" icon={"close"} />
        </button>
      </div>
      <Accordion
        items={[
          {
            title: "About",
            content: aboutDropdownContent(aboutList, closeMenu, "mobile"),
            headerClass: "bg-transparent !mb-0 ",
            contentClass: "!px-0",
            hideIcon: true,
          },
          {
            title: "Learn",
            content: learnDropDownContent(learnList, closeMenu, "mobile"),
            headerClass: "bg-transparent !mb-0",
            contentClass: "!px-0",
            hideIcon: true,
          },
          {
            title: "Governance",
            content: governanceDropdownContent(
              governanceList,
              closeMenu,
              "mobile"
            ),
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
          {
            title: "Staking",
            content: stakingDropdownContent(stakingList),
            headerClass: "bg-transparent !mb-0",
            contentClass: "!px-0",
            hideIcon: true,
          },
        ]}
        showChevron={true}
      />
    </div>
  );
};
export default MobileHeader;
