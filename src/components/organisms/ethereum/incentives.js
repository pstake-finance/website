import React from "react";
import Card from "react-bootstrap/Card";
import Icon from "../../molecules/Icon";

const Incentives = () => {
  return (
    <div className="bg-black-high">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-8 md:mb-6">Testnet Incentives</h3>
        <div className="max-w-[700px] mx-auto">
          <p className="text-light-emphasis mt-8 text-center mb-6">
            Introducing $10,500 in exciting incentives exclusively for our
            testnet participants, divided into two parts:
          </p>
          <div className="rounded-md bg-[#26262B] p-6 mb-4">
            <p className={"text-light-high"}>
              1. <b>Beta testers:</b> Win a share of $500 in $PSTAKE for the top
              10 most valuable feedback submissions.
            </p>
          </div>
          <div className="rounded-md bg-[#26262B] p-6">
            <p className={"text-light-high mb-4"}>
              2. <b>Road to Mainnet:</b> Claimed exclusive Marvel NFTs on Galxe?
              Join us on Mainnet and share a pool of $10,000 in PSTAKE based on
              the below criteria:
            </p>
            <table className="border-separate border-spacing-0 border border-[#DBD6D6] w-full rounded-md">
              <thead>
                <tr>
                  <td className="text-light-emphasis text-center p-3 border-b border-[#DBD6D6] font-medium">
                    Amount staked (ETH)
                  </td>
                  <td className="text-light-emphasis text-center p-3 border-b border-[#DBD6D6] font-medium">
                    % USD value as incentives
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-light-emphasis text-center p-3 border-b border-[#DBD6D6]">
                    0.1 ETH - 5 ETH
                  </td>
                  <td className="text-light-emphasis text-center p-3 border-b border-[#DBD6D6]">
                    1%
                  </td>
                </tr>
                <tr>
                  <td className="text-light-emphasis text-center p-3 border-b border-[#DBD6D6]">
                    5 ETH - 50 ETH
                  </td>
                  <td className="text-light-emphasis text-center p-3 border-b border-[#DBD6D6]">
                    0.5%
                  </td>
                </tr>
                <tr>
                  <td className="text-light-emphasis text-center p-3 border-b border-[#DBD6D6]">
                    50 ETH - 250 ETH
                  </td>
                  <td className="text-light-emphasis text-center p-3 border-b border-[#DBD6D6]">
                    0.25%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="max-w-[50%] md:max-w-full mx-auto mb-4">
        <a
          href="https://blog.pstake.finance/2023/07/27/stketh-v2-marvel-testnet-user-guide/"
          rel="noopener noreferrer"
          target="_blank"
          className="flex bg-black-emphasis border border-solid
              border-[#2a2c31] p-6 rounded-xl"
        >
          <div className="flex items-center justify-center">
            <div className="w-[24px]">
              <img
                src="/images/stkEth_lg.svg"
                alt="blog"
                className={"w-full m-auto"}
              />
            </div>
            <div className="ml-4 md:ml-2">
              <p className="flex items-center ">
                <span className="font-semibold text-lg leading-snug text-light-high md:text-sm">
                  Learn more about the important stkETH v2 Updates here
                </span>
                <Icon
                  viewClass="redirect w-[16px] md:w-[10px] ml-2"
                  icon="redirect"
                />
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Incentives;
