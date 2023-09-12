import React from "react";
import Card from "react-bootstrap/Card";
import Icon from "../../molecules/Icon";

const Scaling = () => {
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
            content:"Say goodbye to multiple txns & high fees with 1-click liquid staking on Layer 2s.",
        },
    ];
    return (
        <div className="bg-black-high">
            <div className="sectionContainer py-[65px] md:py-[35px]">
                <h3 className="sectionTitle mb-8 md:mb-6">
                    Scaling the Ethereum  <br /> LSDeFi Landscape
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
                            ) :null}
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

export default Scaling;
