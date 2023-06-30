import React from "react";
import Card from "react-bootstrap/Card";
import Icon from "../../molecules/Icon";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import {ATOM_URL} from "../../../utils/config";

const Steps = () => {
    const list = [
        {
            title: "Get whitelisted",
            icon: "right",
            content:
                "Fill out the Whitelisting form for us to verify your spot. Meanwhile, join our discord for more information. ",
            link:"/",
            linkText:"Fill the Form"
        },
        {
            title: "Test the product",
            icon: "setting",
            content:
                "Get your testing hats on & perform various on-chain actions like minting stkETH natively on Arbitrum/Optimism—only possible with pSTAKE.",
            link:"/",
            linkText:"Participate in testnet"
        },
        {
            title: "Provide feedback",
            icon: "message",
            content:"Help us improve your ETH liquid staking experience by submitting feedback on our Discord.",
            link:"/",
            linkText:"Share feedback"
        },
        {
            title: "Claim & Earn",
            icon: "dollar",
            content:"Join the Testnet campaign on Galxe to verify quests and earn loyalty points. Unlock your rewards after the stkETH Mainnet launch.",
            link:"/",
            linkText:"Unlock rewards"
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
                            className="-lg:basis-[25%] -lg:max-w-[25%] px-4 mt-4 pt-12 md:pt-4"
                            data-aos="fade-up"
                            key={index}
                        >
                            { index === 3 ? (
                                <div className="feature-circle-two grey" />
                            ) : null}
                            <p className="uppercase mb-3 text-light-mid font-semibold">Step {index+1}</p>
                            <div
                                className="bg-black-emphasis md:p-4 p-8 h-full opacity-90 rounded-md border border-solid
                                 border-[#2a2c31] flex justify-between flex-col"
                            >
                                <div>
                                    <div className="py-4">
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
                                <div className="mt-4">
                                    <ButtonLink
                                        className={`w-[200px] mx-auto md:py-2 md:text-sm`}
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
