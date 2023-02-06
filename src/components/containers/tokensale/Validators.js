import React from "react";
import useTranslation from "next-translate/useTranslation";

import {
  STAKEFISH,
  FIGMENT,
  EVERSTAKE,
  CHORUS,
  COSMOSTATION,
} from "../../../constants/config";

const Validators = () => {
  const { t } = useTranslation("common");
  return (
    <React.Fragment>
      <section className="investors validators">
        <div className="container">
          <h3 className="section-title">{t("VALIDATORS")}</h3>
          <div className="investor-list">
            <a href={STAKEFISH} target="_blank" rel="noopener noreferrer">
              <img
                className=""
                src={"/images/validators/stakefish.svg"}
                title="Stakefish"
                alt="Stakefish"
              />
            </a>
            <a href={FIGMENT} target="_blank" rel="noopener noreferrer">
              <img
                className=""
                src={"/images/validators/figment.svg"}
                title="Figment"
                alt="Figment"
              />
            </a>
            <a href={EVERSTAKE} target="_blank" rel="noopener noreferrer">
              <img
                className=""
                src={"/images/validators/everstake.svg"}
                title="Everstake"
                alt="Everstake"
              />
            </a>
            <a href={CHORUS} target="_blank" rel="noopener noreferrer">
              <img
                className=""
                src={"/images/validators/chorus.svg"}
                title="Chorus"
                alt="Chorus"
              />
            </a>
            <a href={COSMOSTATION} target="_blank" rel="noopener noreferrer">
              <img
                className=""
                src={"images/validators/cosmostation.svg"}
                title="Cosmostation"
                alt="Cosmostation"
              />
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Validators;
