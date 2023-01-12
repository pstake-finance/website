import React from "react";
import stake_atom from "../../assets/steps/stake_atom.svg";
import receive_stkatom from "../../assets/steps/receive_stkatom.svg";
import participate_in_defi from "../../assets/steps/participate_in_defi.svg";
import { ATOM_URL } from "../../constants/config";

const LiquidStakingSteps = () => {
  return (
    <>
      <section className="liquid-staking-steps-section">
        <div className="container">
          <h3 className="section-title">Liquid Staking ATOM in 1, 2, 3</h3>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-xs-12 d-flex flex-column align-items-center"
              data-aos="fade-up"
            >
              <a
                href={ATOM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-box"
              >
                <img src={stake_atom} alt="Liquid ATOM Staking" />
                {/* <Icon viewClass="use-case" icon="stake-atom" /> */}
              </a>
              <div className="content">
                <p className="card-heading">Liquid Stake ATOM</p>
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
              <a
                href={ATOM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-box"
              >
                <img src={receive_stkatom} alt="Liquid ATOM Staking" />
              </a>
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
              <a
                href={ATOM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-box"
              >
                <img src={participate_in_defi} alt="Liquid ATOM Staking" />
              </a>
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
