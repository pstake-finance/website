import React from "react";
import { useTranslation } from "next-export-i18n";
import { ATOM_URL } from "../../../utils/config";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";

const Banner = () => {
    const { t } = useTranslation("common");
    return (
        <div className="text-center aos-init aos-animate bg-ethBanner bg-no-repeat">
            <div
                className="sectionContainer pt-[170px] pb-[100px]"
                data-aos="fade-up"
            >
                <div className="flex items-center justify-center">
                    <img
                        src={"/images/stkEth_lg.svg"}
                        className="w-[151px] h-[151px] md:w-[70px] md:h-[70px]"
                        alt="Liquid ATOM Staking"
                    />
                </div>
                <h1
                    className="banner-heading font-bold text-[54px] leading-tight
        text-dark-black-high mt-6 md:text-[40px] sm:text-3xl"
                >
                    Join the stkETH v2 Testnet
                </h1>
                <div className="mt-8">
                    <ButtonLink
                        className={`w-[200px] mx-auto md:py-2 md:text-sm`}
                        variant={"custom"}
                        href={ATOM_URL}
                        scale="lg"
                        customButtonClass="hover:bg-ethPrimary hover:text-light-high border border-[#000000]
                        text-[#393939] hover:border-transparent hover:bg-opacity-100"
                        target={"_blank"}
                        isDisabled={false}
                        focusEffect={true}
                    >
                        {t("Starts July 10th - Ends July 31st")}
                    </ButtonLink>
                </div>
                <h6
                    className="max-w-[700px] mx-auto mt-6 font-medium text-base
        text-dark-black-high leading-loose sm:text-sm"
                >
                    Feelin’ lucky? Become one of the first DeFi users to natively liquid stake ETH on L2s — Arbitrum & Optimism.
                </h6>

            </div>
        </div>
    );
};

export default Banner;
