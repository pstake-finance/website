import React, { useEffect, useState } from "react";
import Icon from "../Icon";

const countries = ["CM", "UM", "US", "GB", "CU", "CA"];

const GeofenceNotice = () => {
  const workerUrl = "https://worker-geofence.auditdev.workers.dev/";
  const [country, setCountry] = useState("");

  useEffect(() => {
    fetch(workerUrl)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data.country);
      })
      .catch((error) => console.error("Error fetching country:", error));
  }, [workerUrl]);

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
          Starting 15/01/2024, this site won&apos;t be accessible anymore from
          your location. See more details{" "}
          <a
            className="underline"
            href="https://geofence-notice.pages.dev/?ref=pstake"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </p>
      </div>
      <div
        onClick={() => {
          setCountry("");
        }}
        className="cursor-pointer mr-2 hidden"
      >
        <Icon iconName="close" viewClass="fill-[#DB2438] !w-[12px] !h-[12px]" />
      </div>
    </div>
  );
};

export default GeofenceNotice;
