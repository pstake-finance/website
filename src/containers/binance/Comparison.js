import React from 'react';
import { useTranslation } from "react-i18next";
import {Table} from "react-bootstrap";

const Comparison = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <section className="comparison-section">
                <div className="container">
                    <h3 className="section-title">{t("STAKING_VS_LIQUID_STAKING")}</h3>
                    <div className="table-container">
                        <Table responsive>
                            <thead>
                            <tr>
                                <th>Parameter</th>
                                <th>Staking BNB</th>
                                <th>Liquid Staking BNB with pSTAKE</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>What is it?</td>
                                <td>Act of locking $BNB for securing the BNB chain to receive rewards</td>
                                <td>Liquidity on staked $BNB to enable its usage in DeFi dApps on BSC</td>
                            </tr>
                            <tr>
                                <td>Rewards</td>
                                <td>Upto ~5%</td>
                                <td>Upto N %</td>
                            </tr>
                            <tr>
                                <td>Minimum $BNB Requirement</td>
                                <td>0.000001 BNB</td>
                                <td>0.000001 BNB</td>
                            </tr>
                            <tr>
                                <td>Auto-compounding Rewards</td>
                                <td>No</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Liquidity</td>
                                <td>None</td>
                                <td>High</td>
                            </tr>
                            <tr>
                                <td>Risk</td>
                                <td>Low</td>
                                <td>Medium</td>
                            </tr>
                            <tr>
                                <td>Unstaking</td>
                                <td>Unbonding period of 7 days where no staking rewards are earned</td>
                                <td>Directly swap for BNB via a Liquidity Pool</td>
                            </tr>
                            <tr>
                                <td>Drawbacks</td>
                                <td>Staked $BNB remains locked and inaccessible</td>
                                <td>Additional smart contract risk</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}


export default Comparison;