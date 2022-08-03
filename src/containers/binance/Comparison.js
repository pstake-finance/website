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
                                <td>ELI5</td>
                                <td>Act of locking $BNB for securing the BNB chain to receive rewards</td>
                                <td>Liquidity on staked $BNB to enable its usage in DeFi dApps on BSC</td>
                            </tr>
                            <tr>
                                <td>APR</td>
                                <td>Upto 5.58%</td>
                                <td>Upto N %</td>
                            </tr>
                            <tr>
                                <td>Minimum $BNB Requirement</td>
                                <td>1 BNB</td>
                                <td>No minimum</td>
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
                                <td>Participation in Governance</td>
                                <td>No</td>
                                <td>No</td>
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