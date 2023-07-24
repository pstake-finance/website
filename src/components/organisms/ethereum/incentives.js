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
            testnet participants, divided into two enticing parts:
          </p>
          <div className="rounded-md bg-[#26262B] p-6 mb-4">
            <p className={"text-light-high"}>
              1. Win a share of $500 in $PSTAKE for the top 10 most valuable
              feedback submissions.
            </p>
          </div>
          <div className="rounded-md bg-[#26262B] p-6">
            <p className={"text-light-high mb-4"}>
              2. Claim the exclusive stkETH Marvel NFTs on Galxe which will
              serve as a proof of your participation in the testnet, and unlocks
              a rewarding opportunity to receive a share of $10,000 in $PSTAKE
              rewards on Mainnet, based on the below-outlined criteria:
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
    </div>
  );
};

export default Incentives;
