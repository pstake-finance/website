import React from "react";
import Card from "react-bootstrap/Card";
import Icon from "../../molecules/Icon";

const Features = () => {
  const list = [
    {
      title: "ATOM yields like never before",
      icon: "usecase2",
      content:
        "Liquid staking ATOM on pSTAKE generates high yields by\n" +
        "                  auto-compounding ATOM staking rewards while enabling you to\n" +
        "                  easily use your staked ATOM in Cosmos DeFi",
    },
    {
      title: "Safe, Secure, Solid",
      icon: "security",
      content:
        "Security audits from Halborn & Oak Security, upcoming Immunefi\n" +
        "                  Bug Bounty, and on-chain monitoring measures ensure you have a\n" +
        "                  secure experience while liquid staking your ATOM",
    },
    {
      title: (
        <>
          {" "}
          By Cosmonauts,
          <br /> For Cosmonauts
        </>
      ),
      icon: "cosmos",
      content:
        " Minimal fees, fast transactions, high rewards, and IBC\n" +
        "                  interoperability make liquid staking your ATOM smooth and\n" +
        "                  seamless",
    },
  ];
  return (
    <div className="bg-black-high">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-12 md:mb-6">
          Why liquid stake your <br /> ATOM with pSTAKE?
        </h3>
        <div className="flex flex-wrap">
          {list.map((item, index) => (
            <div
              className="-lg:basis-[33.3%] -lg:max-w-[33.3%] px-4 mt-4 pt-12 md:pt-4"
              data-aos="fade-up"
              key={index}
            >
              {index === 0 ? (
                <div className="feature-circle-red" />
              ) : index === 2 ? (
                <div className="feature-circle-two violet" />
              ) : null}
              <div
                className="bg-black-emphasis md:p-4 p-8 h-full opacity-90
              rounded-md border border-solid border-[#2a2c31]"
              >
                <div className="py-6">
                  <Icon
                    viewClass="use-case w-[34px] fill-[#5064fb]"
                    icon={item.icon}
                  />
                </div>
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

export default Features;
