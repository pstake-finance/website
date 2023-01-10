import React from "react";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";
import { PSTAKE_APP_STKETH_URL, PSTAKE_APP_URL } from "../../constants/config";
import atom from "../../assets/networks/atom.svg";
import persistence from "../../assets/networks/persistence.svg";
import ethereum from "../../assets/networks/ethereum.svg";
import bnb from "../../assets/networks/bnb.svg";
import { Link } from "react-router-dom";

const Networks = () => {
  const { t } = useTranslation();
  // const [apr, setApr] = useState(APR_DEFAULT);
  // useEffect(() => {
  //   const fetchValues = async () => {
  //     setApr(await getAPR());
  //   };
  //   fetchValues();
  // }, []);
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
              <Card.Body className="bnb m-auto justify-content-center">
                <div className="text-center">
                  <img
                    className="pt-4 pb-4 logo"
                    src={bnb}
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
                  <Link to="/bnb">
                    <p className="link">{t("STAKE_NOW")}</p>
                  </Link>
                </div>
              </Card.Body>
            </Card>
            <Card className="col-md-4 col-xs-6">
              <Card.Body className="cosmos m-auto justify-content-center">
                <div className="text-center">
                  <img
                    className="pt-4 pb-4 logo"
                    src={atom}
                    title="Asset"
                    alt="Asset"
                  />
                  <Card.Title>{t("COSMOS")}</Card.Title>
                </div>
                {/*<div className="apr text-center m-0">*/}
                {/*  <h1 className="main-text">*/}
                {/*    ~{apr === -1 ? APR_DEFAULT : apr}%{" "}*/}
                {/*    <span className="helper-text">{t("APY")}</span>*/}
                {/*  </h1>*/}
                {/*  <Link to="/atom">*/}
                {/*    <p className="link">{t("STAKE_NOW")}</p>*/}
                {/*  </Link>*/}
                {/*</div>*/}
                <div className="apr text-center m-0">
                  <h1 className="main-text">
                    <span className="helper-text">{t("COMING_SOON")}</span>
                  </h1>
                  <Link to="/atom">
                    <p className="link">{t("LEARN_MORE")}</p>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="row justify-content-center">
            <Card className="col-md-4  col-xs-6">
              <Card.Body className="persistence m-auto justify-content-center">
                <div className="text-center">
                  <img
                    className="pt-4 pb-4 logo"
                    src={persistence}
                    title="Asset"
                    alt="Asset"
                  />
                  <Card.Title>{t("PERSISTENCE")}</Card.Title>
                  <span className="helper-text">{t("(ERC20)")}</span>
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
                    <p className="link">{t("STAKE_NOW")}</p>
                  </a>
                </div>
              </Card.Body>
            </Card>
            <Card className="col-md-4  col-xs-6">
              <Card.Body className="ethereum m-auto justify-content-center">
                <div className="text-center">
                  <img
                    className="pt-4 pb-4 logo"
                    src={ethereum}
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
            <Card className="col-md-4 col-xs-6">
              <Card.Body className="cosmos m-auto justify-content-center">
                <div className="text-center">
                  <img
                    className="pt-4 pb-4 logo"
                    src={atom}
                    title="Asset"
                    alt="Asset"
                  />
                  <Card.Title>{t("COSMOS")}</Card.Title>
                  <span className="helper-text">{t("(ERC20)")}</span>
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
                    <p className="link">{t("STAKE_NOW")}</p>
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
