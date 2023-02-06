import React from "react";
import useTranslation from "next-translate/useTranslation";

const Tokenomics = () => {
  const { t } = useTranslation("common");
  return (
    <React.Fragment>
      <section className="tokenomics">
        <div className="container">
          <h3 className="section-title">{t("TOKENOMICS")}</h3>
          <h5>{t("GENESIS_SUPPLY")}</h5>
          <h6>{t("GENEIS_SUPPLY_DES")}</h6>
          <div className="inner-incentive">
            <div className="incentive-statistics">
              <h4>{t("TOKEN_ALLOCATION")}</h4>
              <img
                className="img-width"
                src={"/images/incentization.svg"}
                alt="incentization"
              />
            </div>
            <div className="incentive-statistics">
              <h4>{t("TOKEN_DISTRIBUTION")}</h4>
              <img
                className="img-width"
                src={"/images/tokenomics.png"}
                alt="tokenomics"
              />
            </div>
            <div className="incentive-statistics">
              <img
                className="img-width"
                src={"/images/datalist.png"}
                alt="data"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Tokenomics;
