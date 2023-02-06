import React from "react";
import useTranslation from "next-translate/useTranslation";

const Incentive = () => {
  const { t } = useTranslation("common");
  return (
    <React.Fragment>
      <section className="incentive-alignment">
        <div className="container">
          <h3 className="section-title">{t("INCENTIVE_ALIGNMENT")}</h3>
          <div className="inner-incentive">
            <img src={"/images/incentive.png"} alt="inentive" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Incentive;
