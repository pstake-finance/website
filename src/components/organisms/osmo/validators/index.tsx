import React, { useEffect, useState } from "react";
import { useAppStore } from "../../../../store/store";
import { shallow } from "zustand/shallow";
import { TableColumnsProps } from "../../../molecules/table/types";
import ValidatorTable from "./table";
import { EmptyTable } from "../../../molecules/table/empty-table";
import { ValidatorInfo } from "../../../../store/slices/initial-data-slice";
import { Spinner } from "../../../molecules/spinner";
import Icon from "../../../molecules/Icon";
import FilterDropdown from "./filter-dropdown";

const ValidatorsList = () => {
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
      const lastTime = localStorage.getItem("last-update");
      if (lastTime !== null) {
        setUpdatedTime(lastTime!);
      } else {
        const currentTime = new Date().toLocaleString();
        setUpdatedTime(currentTime);
        localStorage.setItem("last-update", currentTime);
      }
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
      label: "Weight",
      accessor: "weight",
      sortable: true,
    },
    {
      label: "pSTAKE OSMO Delegation",
      accessor: "delegationAmount",
      sortable: true,
      sortbyOrder: "desc",
    },
  ];

  const refreshHandler = () => {
    const currentTime = new Date().toLocaleString();
    localStorage.setItem("last-update", currentTime);
    fetchInitialData("https://rpc.core.persistence.one", "osmosis-1");
  };

  return (
    <div className="bg-[#030303]">
      <div className={"sectionContainer pt-[170px] pb-[100px]"}>
        <p
          className={"text-[40px] text-light-high font-medium mb-6 lg:text-lg"}
        >
          Validator Distribution Leaderboard
        </p>
        <FilterDropdown />
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
                Refreshed:&nbsp;
                <span className={"font-medium"}>
                  {updatedTime !== null || updatedTime !== "" ? updatedTime : 0}
                </span>
                <span
                  className={"block cursor-pointer"}
                  onClick={refreshHandler}
                >
                  <Icon
                    icon={"refresh"}
                    viewClass={` ml-1 inline !w-[16px] !h-[16px] mb-1`}
                  />
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
