import React from "react";
import Card from "react-bootstrap/Card";
import { useTranslation } from "next-export-i18n";
import { GUIDE_VIDEO_URL } from "../../../utils/config";
import Icon from "../../molecules/Icon";

const Guides = () => {
  const { t } = useTranslation("common");
  return (
    <React.Fragment>
      <section className="guides-section">
        <div className="container">
          <h3 className="section-title">
            {t("GUIDES_TUTORIALS")}: How to Liquid Stake ATOM
          </h3>
          <div className="row">
            <Card className="col-md-6">
              <a
                href={GUIDE_VIDEO_URL}
                rel="noopener noreferrer"
                target="_blank"
                className="card-body"
              >
                <div className="guide-section">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      width="100"
                      height="60"
                      title="Introducing pSTAKE | Multi-chain Liquid Staking"
                      src={GUIDE_VIDEO_URL}
                      frameBorder="0"
                      className="embed-responsive-item"
                      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                  <div className="content">
                    <p className="heading">
                      Liquid Staking ATOM
                      <Icon viewClass="redirect" icon="redirect" />
                    </p>
                    <p className="text">
                      Step by step video tutorial on liquid staking ATOM with
                      pSTAKE
                    </p>
                  </div>
                </div>
              </a>
            </Card>
            <Card className="col-md-6">
              <a
                href="https://blog.pstake.finance/2022/08/07/stkbnb-user-guide-bnb-liquid-staking-tutorial/"
                rel="noopener noreferrer"
                target="_blank"
                className="card-body"
              >
                <div className="guide-section">
                  <div className="image-section">
                    <img
                      src="https://blog.pstake.finance/wp-content/uploads/2022/08/user-guide-1160x620.png"
                      alt="blog"
                    />
                  </div>
                  <div className="content">
                    <p className="heading">
                      stkATOM User Guide
                      <Icon viewClass="redirect" icon="redirect" />
                    </p>
                    <p className="text">
                      {" "}
                      Walk-through of how to liquid stake ATOM and use it in
                      DeFi
                    </p>
                  </div>
                </div>
              </a>
            </Card>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Guides;
