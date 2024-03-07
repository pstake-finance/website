import Tooltip from "rc-tooltip";
import React from "react";
import Icon from "../../molecules/Icon";

export interface CriteriaList {
  parameter: string;
  criteria: string;
  weightage: string;
  time: string;
  tooltipTitle: string | null;
  tooltipContent: string | null;
}

interface Props {
  criteriaList: CriteriaList[];
}

const ValidatorCriteria = ({ criteriaList }: Props) => {
  return (
    <div className="mt-8 mb-2">
      <div className={"flex justify-between items-center lg:block"}>
        {criteriaList.map((item: CriteriaList, index: number) => (
          <div
            key={item.parameter}
            className={
              index === 0
                ? "flex flex-col justify-center items-center flex-1 border-r border-[#3E3E3E] w-[200px] lg:flex-row lg:w-auto lg:border-0 lg:justify-start"
                : index === criteriaList.length - 1
                ? "flex flex-col justify-center items-center flex-1 lg:justify-start"
                : "flex flex-col justify-center items-center flex-1 border-r border-[#3E3E3E] lg:border-0 lg:flex-row lg:justify-start"
            }
          >
            <div className="flex mx-2 relative">
              <p
                className={"text-sm text-light-mid lg:mb-0 lg:mr-4 text-center"}
              >
                {item.parameter}{" "}
                <span className="bg-[#A6A6A633] border-radius-[34px] px-[12px] py-[2px] rounded-[34px] text-[#FCFCFC] text-[12px]">
                  {item.weightage}
                </span>
              </p>
              {item.tooltipTitle || item.tooltipContent ? (
                <Tooltip
                  placement="bottom"
                  showArrow
                  overlayStyle={{
                    opacity: 1,
                  }}
                  overlay={
                    <span className={"text-sm text-light-high font-light"}>
                      <div className="flex flex-col items-center justify-center max-w-[320px]">
                        {item.tooltipTitle ? (
                          <p className="font-medium text-[12px]">
                            {item.tooltipTitle}
                          </p>
                        ) : null}
                        {item.tooltipContent ? (
                          <p className="text-center text-[12px]">
                            {item.tooltipContent}
                          </p>
                        ) : null}
                      </div>
                    </span>
                  }
                >
                  {/* <button className="flex items-center"> */}
                  <div className="hover:cursor-pointer">
                    <Icon
                      viewClass="arrow-right !w-[18px] ml-1 mt-0.5"
                      icon="info"
                    />
                  </div>
                  {/* </button> */}
                </Tooltip>
              ) : null}
            </div>

            <p
              className={
                "text-xl font-medium text-light-high md:text-base mt-1"
              }
            >
              {item.criteria}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValidatorCriteria;
