import React from "react";
import Icon from "../components/Icon";
import stkATOM2 from "../assets/stkATOM2.svg";
import { STK_ATOM_MIGRATION_URL } from "../constants/config";
import stkATOM from "../assets/stkAtom.svg";

const MigrationCard = () => {
  return (
    <section className="migration-section">
      <h3 className="section-title">stkATOM Migration</h3>
      <div className="migration-card">
        <div className="card-body p-0 d-flex align-items-center justify-content-between flex-wrap">
          <div className="content d-flex align-items-center flex-wrap">
            <div className="icon-box">
              <img src={stkATOM2} title="stkATOM2" alt="stkATOM2" />
              <Icon viewClass="right-arrow" icon="right-arrow-bold" />
              <img src={stkATOM} title="stkATOM2" alt="stkATOM2" />
            </div>
            <p className="card-text">
              Migration of stkATOM(ERC-20) to Persistence Core-1 Chain
            </p>
          </div>
          <div className="buttons m-0">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={STK_ATOM_MIGRATION_URL}
              className="button-link primary  m-0"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MigrationCard;
