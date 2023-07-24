import React from "react";
import Card from "react-bootstrap/Card";
import Icon from "../../molecules/Icon";

const Incentives = () => {
  const list = [
    {
      title: "Choose where you want to liquid stake",
      icon: "right",
      content:
        "With pSTAKE, you choose where to receive your liquid staked ETH—Arbitrum, Optimism, or Ethereum.",
    },
    {
      title: "Layer 2 native liquid staking",
      icon: "right",
      content:
        "Directly stake your ETH present on Arbitrum or Optimism. No need to bridge it back to Ethereum. No extra steps required. No time & gas fees lost.",
    },
    {
      title: "Convenience at your fingertips",
      icon: "right",
      content:
        "Say goodbye to multiple txns & high fees with 1-click liquid staking on Layer 2s.",
    },
  ];
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
        <div className="flex flex-wrap">
          {list.map((item, index) => (
            <div
              className="-lg:basis-[33.3%] -lg:max-w-[33.3%] px-4 mt-4 pt-12 md:pt-4"
              data-aos="fade-up"
              key={index}
            >
              {index === 0 ? <div className="feature-circle-red" /> : null}
              <div
                className="bg-black-emphasis md:p-4 p-8 h-full opacity-90
              rounded-md border border-solid border-[#2a2c31]"
              >
                <div className="content">
                  <p className="font-bold leading-snug text-base text-light-full mb-6">
                    {item.title}
                  </p>
                  <p className="font-normal text-sm leading-loose text-light-emphasis">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Incentives;
