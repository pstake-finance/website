import React, { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";
import { TableColumnsProps } from "../../../components/molecules/table/types";
import ValidatorTable from "./table";
import { EmptyTable } from "../../../components/molecules/table/empty-table";
import { Spinner } from "../../../components/molecules/spinner";
import moment from "moment";
import { formatNumber } from "../../../utils/helpers";
import Icon from "../../../components/molecules/Icon";
import ValidatorsDropdown from "../../../components/molecules/validators-dropdown";
import { useAppStore } from "../../../store/store";
import ValidatorCriteria, {
  CriteriaList,
} from "../../../components/organisms/common/criteria-table";
import { ValidatorInfo } from "../../../store/slices/initial-data-slice";
import { useApp } from "../../../context/appContext";
import Footer from "../../../components/molecules/Footer";

const criteriaList: CriteriaList[] = [
  {
    parameter: "Voting Power",
    criteria: "0.05% to 5%",
    weightage: "10%",
    time: "Last 180 Days",
    tooltipTitle: "Current Voting Power",
    tooltipContent: null,
  },
  {
    parameter: "Commission",
    criteria: "5% to 10%",
    weightage: "25%",
    time: "Last 180 Days",
    tooltipTitle: "Current Validator Commission",
    tooltipContent: null,
  },
  {
    parameter: "Uptime",
    criteria: "95% to 100%",
    weightage: "15%",
    time: "Last 30 Days",
    tooltipTitle: "Uptime over 30 days",
    tooltipContent:
      "Based on the % of blocks that you have missed over the last 30 days",
  },
  {
    parameter: "Governance Participation",
    criteria: "90% to 100%",
    weightage: "40%",
    time: "Last 180 Days",
    tooltipTitle: "Governance Participation over 180 days",
    tooltipContent:
      "Track participation in governance proposals over the past 180 days.",
  },
  {
    parameter: "Validator-Bond",
    criteria: "0.1% to 20%",
    weightage: "10%",
    time: "Last 30 Days",
    tooltipTitle: "Validator Bond",
    tooltipContent: null,
  },
];

const ValidatorsList = () => {
  const { xprtData } = useApp();
  const [baseList, setBaseList] = useState<ValidatorInfo[]>([]);
  const [dataList, setDataList] = useState<ValidatorInfo[]>([]);
  const [searchKey, setSearchKey] = useState<string>("");
  const [updatedTime, setUpdatedTime] = useState<string>("");
  const fetchXprtValidatorsData = useAppStore(
    (state) => state.fetchXprtValidatorsData
  );

  const [validatorsInfo, validatorsInfoLoader] = useAppStore(
    (state) => [state.validatorsInfo, state.validatorsInfoLoader],
    shallow
  );

  useEffect(() => {
    if (validatorsInfo.xprt.list.length <= 0) {
      fetchXprtValidatorsData("core-1", "Mainnet");
    }
  }, []);

  useEffect(() => {
    if (validatorsInfo.xprt.list.length > 0) {
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
      setBaseList(validatorsInfo.xprt.list);
      setDataList(validatorsInfo.xprt.list);
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

  const searchHandler = (evt: any) => {
    const searchTerm = evt.target.value;
    const filtered = baseList.filter((asset) => {
      return asset.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setDataList(filtered);
    setSearchKey(searchTerm);
  };

  return (
    <div className="bg-[#030303]">
      <div className={"sectionContainer pt-[120px] pb-[50px]"}>
        <p
          className={"text-[40px] text-light-high font-medium mb-6 lg:text-lg"}
        >
          Validator Distribution Leaderboard
        </p>
        <div className={"rounded-xl bg-[#1D1D1F] py-5 px-6 mb-8"}>
          <div className={"flex items-center justify-between"}>
            <ValidatorsDropdown name={"stkXPRT"} />
            <p
              className={
                "text-xl font-medium text-light-emphasis md:text-base text-right"
              }
            >
              <span className={"text-[14px] font-normal text-[#A6A6A6] block"}>
                {" "}
                Total Value Unlocked(TVU)
              </span>
              {formatNumber(Number(xprtData.tvl), 3, 2)} XPRT
            </p>
          </div>
        </div>
        <div className={"mb-6 rounded-xl bg-[#1D1D1F] py-5 px-6"}>
          <p
            className={
              "font-semibold text-[24px] text-light-emphasis md:text-lg flex items-center mb-1 justify-center"
            }
          >
            pSTAKE Delegation Model Criteria
            <a
              className="ml-1.5 hidden"
              href="/public"
              target="_blank"
              rel="noreferrer"
            >
              <Icon
                viewClass="!w-[16px] !h-[16px] fill-[#FBFBFB]"
                icon="new-tab"
              />
            </a>
          </p>
          <p
            className={
              "text-[#E0E0E0] md:text-sm flex items-center justify-center"
            }
          >
            <Icon viewClass="!w-[16px] !h-[16px] mr-1" icon="warning" />
            <span className={"font-medium"}>Eligibility:</span>&nbsp;Must be
            part of the active set and free of any slashing events within the
            past 180 days.
          </p>
          <ValidatorCriteria criteriaList={criteriaList} />
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
              <div className={"flex items-center"}>
                <p className={"text-sm text-light-emphasis flex items-center"}>
                  Updated on:&nbsp;
                  <span className={"font-medium"}>
                    {`~${
                      updatedTime !== null || updatedTime !== ""
                        ? updatedTime
                        : 0
                    } 14:00 UTC`}
                  </span>
                </p>
                <div>
                  <div
                    className={`w-[196px] relative my-2 ml-4 md:w-full flex-1`}
                  >
                    <input
                      type="text"
                      className={
                        "bg-[#303030] py-2 pl-[40px] pr-4 text-sm text-light-emphasis " +
                        "rounded-md font-normal border border-solid border-light-low outline-none md:py:1.5 pl-2.5 w-full " +
                        "text-white-300 h-[37px] placeholder:text-light-mid"
                      }
                      value={searchKey}
                      disabled={false}
                      placeholder={"Search"}
                      autoFocus={false}
                      onChange={searchHandler}
                    />
                    <Icon
                      icon="search"
                      viewClass={`w-[18px] h-[18px] left-[15px] top-[11px] !fill-light-mid absolute`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!validatorsInfo.xprt.loader &&
          dataList.length > 0 &&
          Array.isArray(dataList) ? (
            <ValidatorTable data={dataList} columns={columns} />
          ) : (
            <EmptyTable
              columns={columns}
              loader={false}
              text={
                validatorsInfo.xprt.loader ? (
                  <Spinner size={"medium"} />
                ) : (
                  "Data not found"
                )
              }
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ValidatorsList;
