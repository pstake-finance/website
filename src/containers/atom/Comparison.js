import React, { useEffect, useState } from "react";
import stkAtom from "../../assets/stkAtom.svg";
import atom from "../../assets/atom.svg";
import { APR_DEFAULT, ATOM_URL } from "../../constants/config";
import { getAPR } from "../../actions/api";

const Comparison = () => {
  const [apr, setApr] = useState(APR_DEFAULT);
  useEffect(() => {
    const fetchValues = async () => {
      setApr(await getAPR());
    };
    fetchValues();
  }, []);
  return (
    <React.Fragment>
      <section className="comparison-section" data-aos="fade-up">
        <div className="container">
          <h3 className="section-title">Staking vs Liquid Staking ATOM</h3>
          <div className="list">
            <div className="item-header">
              <div className="type"></div>
              <div className="bnb">
                <img src={atom} alt="Liquid ATOM Staking" />
                Staking $ATOM
              </div>
              <div className="stk-bnb">
                <img src={stkAtom} alt="Liquid Stake ATOM" />
                Liquid Staking $ATOM with pSTAKE
              </div>
            </div>
            <div className="list-data">
              <div className="item">
                <div className="type">What is it?</div>
                <div className="bnb">
                  Act of locking $ATOM for securing the Cosmos Hub to receive
                  rewards
                </div>
                <div className="stk-bnb">
                  Liquidity for staked ATOM so users can earn ATOM staking
                  rewards and use stkATOM across Cosmos DeFi
                </div>
              </div>
              <div className="item">
                <div className="type">APR (after fees)</div>
                <div className="bnb">Average ~18.5 %</div>
                <div className="stk-bnb">
                  Up to ~{apr === -1 ? APR_DEFAULT : apr} %
                </div>
              </div>
              <div className="item">
                <div className="type">Auto-compounding rewards</div>
                <div className="bnb">No</div>
                <div className="stk-bnb">Yes</div>
              </div>
              <div className="item">
                <div className="type">Liquidity</div>
                <div className="bnb">None</div>
                <div className="stk-bnb">High</div>
              </div>
              <div className="item">
                <div className="type">Risk</div>
                <div className="bnb">Low</div>
                <div className="stk-bnb">Medium</div>
              </div>
              <div className="item">
                <div className="type">Participation in Governance</div>
                <div className="bnb">Yes</div>
                <div className="stk-bnb">
                  In subsequent upgrade after stkATOM launch
                </div>
              </div>
              <div className="item">
                <div className="type">Unstaking</div>
                <div className="bnb">
                  Unbonding period of 21 days where no staking rewards are
                  earned
                </div>
                <div className="stk-bnb">
                  Directly swap for $ATOM via a Liquidity Pool
                </div>
              </div>
              <div className="item">
                <div className="type">Drawbacks</div>
                <div className="bnb">
                  Staked $ATOM remains locked and inaccessible
                </div>
                <div className="stk-bnb">
                  Additional smart contract risk with liquid staking ATOM
                </div>
              </div>
              <div className="item">
                <div className="type">Fees & Commissions</div>
                <div className="bnb">Average 7% on ATOM staking rewards</div>
                <div className="stk-bnb">
                  0% on withdrawals & deposits <br /> 5% on ATOM staking rewards
                </div>
              </div>
              <div className="item">
                <div className="type">Validator Delegation</div>
                <div className="bnb">You choose who to delegate to</div>
                <div className="stk-bnb">
                  Your ATOM stake is divided equally among 62 validators
                </div>
              </div>
              <div className="item">
                <div className="type">
                  Instant Redemption by skipping unbonding period
                </div>
                <div className="bnb">Not possible</div>
                <div className="stk-bnb">Only possible with pSTAKE</div>
              </div>
              <div className="item">
                <div className="type"></div>
                <div className="bnb"></div>
                <div className="stk-bnb">
                  <div className="buttons m-0">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={ATOM_URL}
                      className="button-link primary  m-0"
                    >
                      Go to app
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Comparison;
