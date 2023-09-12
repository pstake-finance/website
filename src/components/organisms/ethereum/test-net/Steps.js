import React from "react";
import Card from "react-bootstrap/Card";
import Icon from "../../molecules/Icon";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { ATOM_URL } from "../../../utils/config";

const Steps = () => {
  const list = [
    {
      title: "Participate in testnet",
      icon: "profile",
      content:
        "Get your testing hats on & perform various on-chain actions like minting stkETH natively on Arbitrum/Optimism—only possible with pSTAKE.",
      link: "https://testnet.app.pstake.finance/eth",
      linkText: "Participate in testnet",
    },
    {
      title: "Provide feedback",
      icon: "message",
      content:
        " Fill out the form to share your experience, report any bugs, and provide suggestions for improvement. 10 most valuable feedback submissions win $50 in PSTAKE each.",
      link: "https://pstake.typeform.com/to/tQ9afKwU?utm_source=webpage",
      linkText: "Share feedback",
    },
    {
      title: "Claim & Earn",
      icon: "dollar",
      content:
        "Join the Testnet campaign on Galxe to verify quests and mint exclusive Marvel NFTs. Unlock $10,000 in PSTAKE rewards after the stkETH Mainnet launch.",
      link: "https://galxe.com/pSTAKE/campaign/GCyeHU7TK2",
      linkText: "Unlock rewards",
    },
  ];
  return (
    <div className="bg-black-high">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-8 md:mb-6">Steps to Participate</h3>
        <div className="flex flex-wrap">
          {list.map((item, index) => (
            <div
              className="-lg:basis-[33%] -lg:max-w-[33%] px-4 mt-4 pt-8 md:pt-4"
              data-aos="fade-up"
              key={index}
            >
              {index === 3 ? <div className="feature-circle-two grey" /> : null}
              <div
                className="bg-black-emphasis md:p-4 px-8 py-6 h-full opacity-90 rounded-md border border-solid
                                 border-[#2a2c31] flex justify-between flex-col"
              >
                <div>
                  <div className="pb-4 flex items-center">
                    <Icon
                      viewClass="use-case w-[24px] fill-[#5064fb]"
                      icon={item.icon}
                    />
                    <p className="font-bold leading-snug text-base text-light-full ml-3">
                      {item.title}
                    </p>
                  </div>
                  <div className="content">
                    <p className="font-normal text-sm leading-loose text-light-emphasis">
                      {item.content}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <ButtonLink
                    className={`w-full mx-auto md:py-2 md:text-sm`}
                    variant={"custom"}
                    href={item.link}
                    scale="lg"
                    customButtonClass="bg-ethPrimary text-light-high text-sm"
                    target={"_blank"}
                    isDisabled={false}
                    focusEffect={true}
                  >
                    {item.linkText}
                  </ButtonLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
