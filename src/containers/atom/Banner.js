import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getExchangeRate, getTVU } from "../../actions/api";
import stkAtom from "../../assets/stkAtom.svg";
import Icon from "../../components/Icon";
import { STK_ATOM_TWITTER_URL } from "../../constants/config";
import { decimalize, formatNumber } from "../../utils/helpers";

const Banner = () => {
  const { t } = useTranslation();
  const [tvl, setTvl] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(1);
  useEffect(() => {
    const fetchValues = async () => {
      setTvl(await getTVU());
      setExchangeRate(await getExchangeRate());
    };
    fetchValues();
  }, []);
  return (
    <React.Fragment>
      <section className="banner-section aos-init aos-animate">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12 col-sm-12 banner-main-section"
              data-aos="fade-up"
            >
              <div className="logo">
                <img src={stkAtom} alt="Liquid Staking ATOM" />
              </div>
              <h1 className="banner-heading">
                Liquid Staking for The <br /> Internet of Blockchains
              </h1>
              <h6 className="banner-sub-heading">
                With stkATOM, enjoy the best of both worlds—Earn ATOM staking
                rewards while securing the cosmos hub and participate in DeFi
                for additional yields.
              </h6>
              <div className="banner-buttons">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={STK_ATOM_TWITTER_URL}
                  className="button-link"
                >
                  <span className="hideone">{t("Liquid Stake ATOM")}</span>
                  <Icon viewClass="right-arrow" icon="right-arrow" />
                </a>
              </div>
              <div className="network-stats">
                <div className="stats-count">
                  <h6 className="stats">
                    {formatNumber(Number(decimalize(tvl * exchangeRate)), 3, 2)}{" "}
                    ATOM
                  </h6>
                  <h6 className="label">{t("TOTAL_VALUE_UNLOCKED")}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Banner;
