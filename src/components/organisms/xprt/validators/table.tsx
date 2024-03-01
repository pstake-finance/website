"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { TableProps } from "../../../molecules/table/types";
import { useSortableTable } from "../../../../customHooks/useSortableTable";
import TableHead from "../../../molecules/table/table-head";
import TableBody from "../../../molecules/table/table-body";
import { useApp } from "../../../../context/appContext/AppContext";

const ValidatorTable = ({ data, columns }: TableProps) => {
  const { xprtData } = useApp();
  const [tableData, handleSorting] = useSortableTable(data, columns);
  const updateData: any[] = [];
  tableData.length
    ? tableData.map((data: any, index: number) =>
        updateData.push({
          name: (
            <div className={"flex items-center h-[40px]"} key={index}>
              <span className={"text-sm text-[#FBFBFB] mr-[14px]"}>
                {index + 1}
              </span>
              {data.identity !== "" ? (
                <Image
                  src={data.identity}
                  alt={data.name}
                  width={24}
                  height={24}
                  className="mr-2 rounded-full"
                />
              ) : (
                <div
                  className={
                    "w-[24px] h-[24px] rounded-full bg-black-full mr-2"
                  }
                ></div>
              )}
              <div className={"text-left"}>
                <p className="">{data.name}</p>
              </div>
            </div>
          ),
          weight: (
            <div key={index}>
              <p className={"pb-[2px]"}>{data.weight}%</p>
            </div>
          ),
          targetDelegation: (
            <p key={index} className={"px-1.5 py-1"}>
              {(Number(data.targetDelegation) * Number(xprtData.tvl)).toFixed(
                2
              )}
              &nbsp;
              <span className={"text-light-mid"}>XPRT</span>
            </p>
          ),
          delegationAmount: (
            <p key={index} className={"px-1.5 py-1"}>
              {data.delegationAmount}&nbsp;
              <span className={"text-light-mid"}>XPRT</span>
            </p>
          ),
        })
      )
    : [];

  return (
    <div className="max-h-[700px] overflow-auto ">
      <table className="w-full custom-table">
        <TableHead {...{ columns, handleSorting }} />
        <TableBody {...{ columns, tableData: updateData }} />
      </table>
    </div>
  );
};

export default ValidatorTable;
