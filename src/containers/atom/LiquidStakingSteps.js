import React from "react";
import { Card } from "react-bootstrap";
import Icon from "../../components/Icon";

const LiquidStakingSteps = () => {
  return (
    <>
      <section className="liquid-staking-steps-section">
        <div className="container">
          <h3 className="section-title">
            Liquid Staking ATOM as <br /> simple as 1, 2, 3
          </h3>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-xs-12 d-flex flex-column align-items-center"
              data-aos="fade-up"
            >
              <div className="icon-box">
                <Icon viewClass="use-case" icon="usecase2" />
              </div>
              <div className="content">
                <p className="card-heading">Stake your ATOM</p>
                <p className="card-content">
                  Deposit any non-zero amount of ATOM to stake through pSTAKE’s
                  diverse validator set & earn staking rewards
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-xs-12 d-flex flex-column align-items-center"
              data-aos="fade-up"
            >
              <div className="icon-box">
                <Icon viewClass="use-case" icon="security" />
              </div>
              <div className="content">
                <p className="card-heading">Receive stkATOM</p>
                <p className="card-content">
                  Get liquid stkATOM in return which increases in value relative
                  to your staked amount every staking rewards epoch
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-xs-12 d-flex flex-column align-items-center"
              data-aos="fade-up"
            >
              <div className="icon-box">
                <Icon viewClass="use-case" icon="enhance-ui" />
              </div>
              <div className="content">
                <p className="card-heading">Participate in DeFi</p>
                <p className="card-content">
                  Put your stkATOM to work in the Cosmos Ecosystem with various
                  opportunities in the DeFi tab on pSTAKE’s application
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LiquidStakingSteps;
