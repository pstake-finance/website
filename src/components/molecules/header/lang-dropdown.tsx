import Dropdown from "rc-dropdown";
import "rc-dropdown/assets/index.css";
import React, { PureComponent } from "react";
import Icon from "../Icon";
import { useRouter } from "next/router";
import { useTranslation, LanguageSwitcher } from "next-export-i18n";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";

interface Props {
  langList: any[];
  isTablet: boolean;
}

export const learnDropDownContent = (learnList: any[]) => {
  return (
    <div className={"!bg-[#1B1B1B] md:!block drop-shadow-md rounded-md py-2"}>
      {learnList.map((item, index) => (
        <LanguageSwitcher lang={item.code} key={index}>
          <div
            className="px-6 md:px-3 py-3 flex items-center md:py-3
                        hover:cursor-pointer text-light-high whitespace-nowrap group"
          >
            <Image src={item.imgUrl} alt={"dd"} width={24} height={24} />
            <span
              className="ml-4 text-light-high text-base md:text-sm
                        font-medium leading-normal md:text-xsm md:ml-2"
            >
              {item.name}
              <span className={"uppercase ml-1"}>({item.code})</span>
            </span>
          </div>
        </LanguageSwitcher>
      ))}
    </div>
  );
};

const LangDropdown = ({ langList, isTablet }: Props) => {
  const defaultItem = langList.find((item) => item.code === "en");

  const router = useRouter();
  const params = useSearchParams();
  const search = params.get("lang");
  const { t } = useTranslation();
  const selectedLang = langList.find((item) => item.code === search);

  const activeLang = selectedLang === undefined ? defaultItem : selectedLang;
  console.log(activeLang, search, "activeLang", router.pathname);

  return (
    <>
      <Dropdown
        overlay={learnDropDownContent(langList)}
        placement={isTablet ? "bottomRight" : "bottom"}
        trigger={isTablet ? "click" : "hover"}
      >
        <button
          className={` [.is-sticky_&]:text-[#D5D5D5] flex items-center ${
            router.pathname === "/"
              ? "text-[#D5D5D5] hover:!bg-[#C732381A] hover:text-light-high"
              : ""
          } ${
            router.pathname === "/btc"
              ? "text-[#000] hover:!bg-[#EE972C33]"
              : ""
          } !py-2 !px-3 rounded-md text-[18px] !font-semibold md:!hidden uppercase`}
        >
          <Image
            src={activeLang?.imgUrl}
            alt={"dd"}
            width={22}
            height={16}
            className={"mr-[6px]"}
          />
          {activeLang?.code}
          <Icon
            viewClass={` ${
              router.pathname === "/"
                ? "fill-[#fff] "
                : "fill-[#181818]  [.is-sticky_&]:fill-[#fff]"
            } dropDownIcon !w-[13px] ml-[6px]  group-hover:fill-[#C73238] rotate-90`}
            icon="chevroncolorchange"
          />
        </button>
      </Dropdown>
      <div className={"hidden md:!block "}>
        {learnDropDownContent(langList)}
      </div>
    </>
  );
};
export default LangDropdown;
