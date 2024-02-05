import Tooltip from "rc-tooltip";
import React from "react";
import Icon from "../../molecules/Icon";

export interface CriteriaList {
  parameter: string;
  criteria: string;
  weightage: string;
  time: string;
}

interface Props {
  criteriaList: CriteriaList[];
}

const ValidatorCriteria = ({ criteriaList }: Props) => {
  return (
    <div className="mb-8">
      <div className="max-h-[700px] overflow-auto ">
        <table className="w-full custom-table criteria">
          <thead>
            <tr className="h-14">
              <th>Parameter</th>
              <th className={"!text-center"}>Criteria</th>
              <th className={"!text-center"}>Weightage</th>
              <th className={"!text-center"}>Time</th>
            </tr>
          </thead>
          <tbody>
            {criteriaList.map((item: any, index: number) => (
              <tr key={index}>
                <td className={"!text-left  h-[66px]"}>
                  {index === 0 || index === 1 ? (
                    <Tooltip
                      placement="right"
                      overlay={
                        <span className={"text-sm text-light-high font-light"}>
                          Current {item.parameter}
                        </span>
                      }
                    >
                      <button className="flex items-center px-1">
                        {item.parameter}
                        <Icon
                          viewClass="arrow-right !w-[14px] ml-1"
                          icon="info"
                        />
                      </button>
                    </Tooltip>
                  ) : (
                    item.parameter
                  )}
                </td>
                <td className={"!text-center"}>{item.criteria}</td>
                <td className={"!text-center"}>
                  <span
                    className={
                      "bg-[#A6A6A633] rounded-[34px] px-[18px] py-[4px]"
                    }
                  >
                    {item.weightage}
                  </span>
                </td>
                <td className={"!text-center"}>{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ValidatorCriteria;
