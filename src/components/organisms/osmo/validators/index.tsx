import React, { useEffect, useState } from "react";
import { useAppStore } from "../../../../store/store";
import { shallow } from "zustand/shallow";
import { TableColumnsProps } from "../../../molecules/table/types";
import ValidatorTable from "./table";
import { EmptyTable } from "../../../molecules/table/empty-table";
import { ValidatorInfo } from "../../../../store/slices/initial-data-slice";
import { Spinner } from "../../../molecules/spinner";
import moment from "moment";
import { useApp } from "../../../../context/appContext/AppContext";
import { formatNumber } from "../../../../utils/helpers";
import FilterDropdown from "./filter-dropdown";
import ValidatorCriteria from "../../common/criteria-table";
import Icon from "../../../molecules/Icon";

const criteriaList = [
  {
    parameter: "Voting Power",
    criteria: "0.05% to 5%",
    weightage: "15%",
    time: "Last 180 Days",
  },
  {
    parameter: "Commission",
    criteria: "5% to 10%",
    weightage: "25%",
    time: "Last 180 Days",
  },
  {
    parameter: "Uptime",
    criteria: "95% to 100%",
    weightage: "20%",
    time: "Last 30 Days",
  },
  {
    parameter: "Governance Participation",
    criteria: "60% to 100%",
    weightage: "40%",
    time: "Last 180 Days",
  },
  // {
  //   parameter: "Validator-Bond",
  //   criteria: "0.1% to 20%",
  //   weightage: "-",
  //   time: "Last 30 Days",
  // },
];

const ValidatorsList = () => {
  const { osmoData } = useApp();
  const [dataList, setDataList] = useState<ValidatorInfo[]>([]);
  const [updatedTime, setUpdatedTime] = useState<string>("");

  const [validatorsInfo, validatorsInfoLoader] = useAppStore(
    (state) => [state.validatorsInfo, state.validatorsInfoLoader],
    shallow
  );

  const fetchOsmoValidatorsData = useAppStore(
    (state) => state.fetchOsmoValidatorsData
  );

  useEffect(() => {
    fetchOsmoValidatorsData(
      "https://rpc.core.persistence.one",
      "osmosis-1",
      "Mainnet"
    );
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
            <FilterDropdown />
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
        <div className={"mb-6"}>
          <p
            className={
              "font-semibold text-[24px] text-light-emphasis md:text-lg flex items-center mb-1"
            }
          >
            pSTAKE Delegation Model Criteria
            <a
              className="ml-1.5 hidden"
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon
                viewClass="!w-[16px] !h-[16px] fill-[#FBFBFB]"
                icon="new-tab"
              />
            </a>
          </p>
          <p className={"text-[#E0E0E0] md:text-sm flex items-center"}>
            <Icon viewClass="!w-[16px] !h-[16px] mr-1" icon="warning" />
            <span className={"font-medium"}>Eligibility:</span>&nbsp;Must be
            part of the active set and free of any slashing events within the
            past 180 days.
          </p>
        </div>
        <ValidatorCriteria criteriaList={criteriaList} />
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
          {!validatorsInfoLoader.loader && dataList.length > 0 ? (
            <ValidatorTable data={dataList} columns={columns} />
          ) : (
            <EmptyTable
              columns={columns}
              loader={false}
              text={
                validatorsInfoLoader.loader ? (
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
