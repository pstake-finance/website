import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import useTranslation from "next-translate/useTranslation";
import {
 APR_DEFAULT, PSTAKE_APP_STKETH_URL,
  PSTAKE_APP_URL,
} from "../../constants/config";
import Link from "next/link";
import { getAPY } from "../../actions/api";

const Networks = () => {
  const { t } = useTranslation("common");

  const [apy, setApy] = useState(APR_DEFAULT)


  useEffect(() => {
    const fetchValues = async () => {
      setApy(await getAPY())
    };
    fetchValues();
  }, []);
  return (
    <React.Fragment>
      <section className="networks-section">
        <div className="container">
          <h3 className="section-title">{t("STAKE_YOUR_ASSETS")}</h3>
          <p className="section-sub-title m-auto">
            pSTAKE offers liquid staking for the following networks
          </p>
          <div className="row justify-content-center">
            <Card className="col-md-4 col-xs-6">
              <Card.Body className="cosmos m-auto justify-content-center">
                <div className="text-center">
                  <img
                    className="pt-4 pb-4 logo"
                    src={"/images/networks/atom.svg"}
                    title="Asset"
                    alt="Asset"
                  />
                  <Card.Title>{t("COSMOS")}</Card.Title>
                </div>
                <div className="apr text-center m-0">
                  <h1 className="main-text">
                    ~{apy === -1 ? APR_DEFAULT : apy.toFixed(2)}%{" "}
                    <span className="helper-text">{t("APY")}</span>
                  </h1>
                  <Link href="/atom">
                    <p className="link">{t("STAKE_NOW")}</p>
                  </Link>
                </div>
              </Card.Body>
            </Card>
            <Card className="col-md-4 col-xs-6">
              <Card.Body className="bnb m-auto justify-content-center">
                <div className="text-center">
                  <img
                    className="pt-4 pb-4 logo"
                    src={"/images/networks/bnb.svg"}
                    title="Asset"
                    alt="Asset"
                  />
                  <Card.Title>{t("BNB")}</Card.Title>
                </div>
                <div className="apr text-center m-0">
                  <h1 className="main-text">
                    {t("BNB_APY")}{" "}
                    <span className="helper-text">{t("APY")}</span>
                  </h1>
                  <Link href="/bnb">
                    <p className="link">{t("STAKE_NOW")}</p>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="row justify-content-center">
            <Card className="col-md-4  col-xs-6">
              <Card.Body className="ethereum m-auto justify-content-center">
                <div className="text-center">
                  <img
                    className="pt-4 pb-4 logo"
                    src={"/images/networks/ethereum.svg"}
                    title="Asset"
                    alt="Asset"
                  />
                  <Card.Title>{t("ETHEREUM")}</Card.Title>
                  <span className="helper-text">{t("(ERC20)")}</span>
                </div>
                <div className="apr text-center m-0">
                  <h1 className="main-text">
                    {t("ETH_APR")}{" "}
                    <span className="helper-text">{t("APY")}</span>
                  </h1>
                  <a
                    href={PSTAKE_APP_STKETH_URL}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <p className="link">{t("STAKE_NOW")}</p>
                  </a>
                </div>
              </Card.Body>
            </Card>
            <Card className="col-md-4  col-xs-6">
              <Card.Body className="persistence m-auto justify-content-center">
                <div className="text-center">
                  <img
                    className="pt-4 pb-4 logo"
                    src={"/images/networks/persistence.svg"}
                    title="Asset"
                    alt="Asset"
                  />
                  <Card.Title>
                    {t("PERSISTENCE")}&nbsp;
                    <span className="helper-text font-weight-normal">
                      {t("(ERC20)")}
                    </span>
                  </Card.Title>
                  <span className="helper-text">(Deprecated)</span>
                </div>
                <div className="apr text-center m-0">
                  <h1 className="main-text">
                    {t("XPRT_APR")}{" "}
                    <span className="helper-text">{t("APY")}</span>
                  </h1>
                  <a
                    href={PSTAKE_APP_URL}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <p className="link">{t("WITHDRAW_ASSETS")}</p>
                  </a>
                </div>
              </Card.Body>
            </Card>
            <Card className="col-md-4 col-xs-6">
              <Card.Body className="cosmos m-auto justify-content-center">
                <div className="text-center">
                  <img
                    className="pt-4 pb-4 logo"
                    src={"/images/networks/atom.svg"}
                    title="Asset"
                    alt="Asset"
                  />
                  <Card.Title>
                    {t("COSMOS")}&nbsp;
                    <span className="helper-text font-weight-normal">
                      {t("(ERC20)")}
                    </span>
                  </Card.Title>
                  <span className="helper-text">(Deprecated)</span>
                </div>
                <div className="apr text-center m-0">
                  <h1 className="main-text">
                    {t("ATOM_APR")}{" "}
                    <span className="helper-text">{t("APY")}</span>
                  </h1>
                  <a
                    href={PSTAKE_APP_URL}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <p className="link">{t("WITHDRAW_ASSETS")}</p>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Networks;
