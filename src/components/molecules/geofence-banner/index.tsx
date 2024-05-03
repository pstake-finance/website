import React, { useEffect, useState } from "react";
import Icon from "../Icon";
import { OSMOSIS_URL } from "../../../utils/config";
import { useAppStore } from "../../../store/store";
import { shallow } from "zustand/shallow";
import { Spinner } from "../spinner";

const countries = ["CM", "UM", "US", "GB", "CU", "CA"];

const GeofenceNotice = () => {
  const workerUrl = "https://worker-geofence.auditdev.workers.dev/";
  const [country, setCountry] = useState("");
  const [banner, setBanner] = useState(false);
  const [validatorsInfo] = useAppStore(
    (state) => [state.validatorsInfo],
    shallow
  );
  useEffect(() => {
    fetch(workerUrl)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data.country);
      })
      .catch((error) => console.error("Error fetching country:", error));
  }, [workerUrl]);

  const closeBanner = () => {
    setBanner(false);
  };

  if (countries.includes(country)) {
    return (
      <div
        className={`${
          countries.includes(country) ? "flex" : "hidden"
        } bg-[#831622] px-4 py-2 items-center justify-center`}
      >
        <div className="text-center mr-4 flex items-center justify-center">
          <Icon
            icon="info-dark"
            viewClass="!w-[1.2rem] !h-[0.8rem] fill-[#fcfcfc] mr-2"
          />
          <p className="text-[#fcfcfc] text-xsm font-medium">
            <span className={"font-semibold"}>IMPORTANT NOTICE:</span>&nbsp;
            Please note that from 1 March 2024, applications on the
            pstake.finance domain will no longer be accessible from your
            location. See more details{" "}
            <a
              className="underline"
              href="https://geofence-notice.pages.dev/?ref=pstake"
              target="_blank"
              rel="noreferrer"
            >
              here.
            </a>
          </p>
        </div>
        <div
          onClick={() => {
            setCountry("");
          }}
          className="cursor-pointer mr-2 hidden"
        >
          <Icon
            iconName="close"
            viewClass="fill-[#DB2438] !w-[12px] !h-[12px]"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        !banner
          ? "hidden"
          : "top-banner-section bg-topBanner bg-contain bg-no-repeat py-2.5 pr-12 pl-4"
      }
    >
      <a
        href={"https://pp.pstake.finance/"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#1D1D22] text-[12px] font-semibold flex items-center flex-wrap text-center justify-center"
      >
        pSTAKE Finance is expanding to Solana with a BIG airdrop for the
        upcoming stkSOL launch
        <Icon
          viewClass="close w-[17px] h-[14px] ml-2 fill-[#000]"
          icon="right-arrow-bold"
        />
        {/*<span>stkHUAHUA is NOW LIVE. Liquid Stake your HUAHUA with&nbsp;</span>*/}
        {/*{validatorsInfo.huahua.loader ? (*/}
        {/*  <Spinner size={"small"} className={"!w-3 !h-3"} />*/}
        {/*) : (*/}
        {/*  validatorsInfo.huahua.list.length*/}
        {/*)}*/}
        {/*&nbsp;validators&nbsp;*/}
        {/*<a*/}
        {/*  className="link underline"*/}
        {/*  href={"https://app.pstake.finance/cosmos?token=STARS&chain=Stargaze"}*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  now.*/}
        {/*</a>*/}
      </a>
      <div onClick={closeBanner}>
        <Icon
          viewClass="close w-[10px] h-[10px] fill-[#000] absolute top-[13px] right-[20px] cursor-pointer"
          icon="close"
        />
      </div>
    </div>
  );
};

export default GeofenceNotice;
