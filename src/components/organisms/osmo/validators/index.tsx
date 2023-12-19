import React, { useEffect, useState } from "react";
import { useAppStore } from "../../../../store/store";
import { shallow } from "zustand/shallow";
import { TableColumnsProps } from "../../../molecules/table/types";
import ValidatorTable from "./table";
import { EmptyTable } from "../../../molecules/table/empty-table";
import { ValidatorInfo } from "../../../../store/slices/initial-data-slice";
import { Spinner } from "../../../molecules/spinner";
import FilterDropdown from "./filter-dropdown";
import moment from "moment";
import { useApp } from "../../../../context/appContext/AppContext";
import { formatNumber } from "../../../../utils/helpers";
import Image from "next/image";

const ValidatorsList = () => {
  const { osmoData } = useApp();
  const [dataList, setDataList] = useState<ValidatorInfo[]>([]);
  const [updatedTime, setUpdatedTime] = useState<string>("");
  const fetchInitialData = useAppStore((state) => state.fetchInitialData);

  const [validatorsInfo, validatorsInfoLoader] = useAppStore(
    (state) => [state.validatorsInfo, state.validatorsInfoLoader],
    shallow
  );

  useEffect(() => {
    fetchInitialData("https://rpc.core.persistence.one", "osmosis-1");
  }, []);

  useEffect(() => {
    if (validatorsInfo.osmo.length > 0) {
      let currentLocalTime = moment().format();
      const updateTime = moment("14:10:00", "H:mm:ss").utc();
      const ctime = moment.utc(currentLocalTime).format("H:mm:ss");
      const ctimeUtcFormat = moment(ctime, "H:mm:ss").utc();
      let dd: string;
      if (ctimeUtcFormat.isAfter(updateTime)) {
        dd = moment().format("DD MMM YYYY");
      } else {
        dd = moment().subtract(1, "days").format("DD MMM YYYY");
      }
      setUpdatedTime(dd!);
      setDataList(validatorsInfo.osmo);
    }
  }, [validatorsInfo]);

  const columns: TableColumnsProps[] = [
    {
      label: "Validator",
      accessor: "name",
      sortable: true,
    },
    {
      label: "Target Weight",
      accessor: "weight",
      sortable: true,
    },
    {
      label: "Target Delegation",
      accessor: "targetDelegation",
      sortable: true,
      sortbyOrder: "desc",
    },
    {
      label: "Current Delegation",
      accessor: "delegationAmount",
      sortable: true,
      sortbyOrder: "desc",
    },
  ];

  return (
    <div className="bg-[#030303]">
      <div className={"sectionContainer pt-[120px] pb-[100px]"}>
        <p
          className={"text-[40px] text-light-high font-medium mb-6 lg:text-lg"}
        >
          Validator Distribution Leaderboard
        </p>
        <div className={"rounded-xl bg-[#1D1D1F] py-5 px-6 mb-8"}>
          <div className={"flex items-center justify-between"}>
            <div className={`flex items-center flex-1 h-[40px]`}>
              <Image
                width={40}
                height={40}
                src={"/images/stkOsmo.svg"}
                alt="stkATOM logo"
              />
              <span className="text-[30px] font-medium text-light-high leading-normal md:text-xsm px-2">
                stkOSMO
              </span>
            </div>
            <p
              className={
                "text-xl font-medium text-light-emphasis md:text-base text-right"
              }
            >
              <span className={"text-[14px] font-normal text-[#A6A6A6] block"}>
                {" "}
                Total Value Unlocked(TVU)
              </span>
              {formatNumber(Number(osmoData.tvl), 3, 2)} OSMO
            </p>
          </div>
        </div>
        <div className={"rounded-xl bg-[#1D1D1F] py-5 px-6 mb-8"}>
          <p
            className={
              "font-medium text-xl text-light-emphasis mb-6 md:text-lg"
            }
          >
            pSTAKE Delegation Model Criteria
          </p>
          <div className={"flex justify-between items-center lg:block"}>
            <div
              className={
                "flex flex-col justify-center items-center border-r border-[#3E3E3E] pl-4 pr-12 w-[200px] lg:flex-row lg:w-auto lg:border-0 lg:justify-start"
              }
            >
              <p className={"text-sm text-light-mid mb-2 lg:mb-0 lg:mr-4"}>
                Voting Power
              </p>
              <p className={"text-xl font-medium text-light-high md:text-base"}>
                0.05% to 5%
              </p>
            </div>
            <div
              className={
                "flex flex-col justify-center items-center flex-1 border-r border-[#3E3E3E] px-4 lg:border-0 lg:flex-row lg:justify-start"
              }
            >
              <p className={"text-sm text-light-mid mb-2 lg:mb-0 lg:mr-4"}>
                Commission
              </p>
              <p className={"text-xl font-medium text-light-high md:text-base"}>
                5% to 10%
              </p>
            </div>
            <div
              className={
                "flex flex-col justify-center items-center flex-1 border-r border-[#3E3E3E] px-4 lg:border-0 lg:flex-row lg:justify-start"
              }
            >
              <p className={"text-sm text-light-mid mb-2 lg:mb-0 lg:mr-4"}>
                Uptime
              </p>
              <p className={"text-xl font-medium text-light-high md:text-base"}>
                95% to 100%
              </p>
            </div>
            <div
              className={
                "flex flex-col justify-center items-center flex-1 border-r border-[#3E3E3E] px-4 lg:border-0 lg:flex-row lg:justify-start"
              }
            >
              <p className={"text-sm text-light-mid mb-2 lg:mb-0 lg:mr-4"}>
                Governance Participation
              </p>
              <p className={"text-xl font-medium text-light-high md:text-base"}>
                60% to 100%
              </p>
            </div>
            <div
              className={
                "flex flex-col justify-center items-center flex-1 px-4 lg:justify-start"
              }
            >
              <p
                className={
                  "text-sm text-light-mid mb-2 text-center lg:text-left lg:mr-auto md:text-base"
                }
              >
                Part of the active set without any slashing instance
              </p>
            </div>
          </div>
        </div>
        <div className="pb-4">
          <div
            className={
              "bg-[#1D1D1F] px-[40px] py-[18px] rounded-tl-xl rounded-tr-xl border border-[#3E3E3E]"
            }
          >
            <div className={"flex justify-between items-center md:block"}>
              <p
                className={
                  "font-medium text-3xl text-light-emphasis md:text-base"
                }
              >
                List of Validators
              </p>
              <p className={"text-sm text-light-emphasis flex items-center"}>
                Updated on:&nbsp;
                <span className={"font-medium"}>
                  {`~${
                    updatedTime !== null || updatedTime !== "" ? updatedTime : 0
                  } 14:00 UTC`}
                </span>
              </p>
            </div>
          </div>
          {!validatorsInfoLoader && dataList.length > 0 ? (
            <ValidatorTable data={dataList} columns={columns} />
          ) : (
            <EmptyTable
              columns={columns}
              loader={false}
              text={
                validatorsInfoLoader ? (
                  <Spinner size={"medium"} />
                ) : (
                  "Data not found"
                )
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ValidatorsList;
