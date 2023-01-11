import React from "react";
import useTranslation from "next-translate/useTranslation";
import Icon from "../../components/Icon";

const Governance = () => {
  const { t } = useTranslation("common");
  return (
    <React.Fragment>
      <div className="inner-bg">
        <div className="governance">
          <section className="second-section aos-init aos-animate">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 gov-displaycontent">
                  <div className="feactures-card">
                    <img
                      src={"/images/gov.svg"}
                      className="text-left icon-feacture"
                      alt="feacture"
                      title="feacture"
                    />
                    <h5 className="section-title">{t("GOVERNANCE")}</h5>
                    <h6>{t("GOVERNANCE_DES")}</h6>
                    <div className="gov-list">
                      <h5>{t("BENEFITS_INCLUDING")}</h5>
                      <ul class="fa-ul">
                        <li>
                          <span class="fa-li">
                            {" "}
                            <Icon viewClass="social_icon_img" icon="list" />
                          </span>
                          {t("BENEFITS_ONE")}
                        </li>
                        <li>
                          <span class="fa-li">
                            {" "}
                            <Icon viewClass="social_icon_img" icon="list" />
                          </span>
                          {t("BENEFITS_TWO")}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 gov-displaycontent">
                  <div className="feactures-card">
                    <img
                      src={"/images/incent.svg"}
                      className="text-left icon-feacture"
                      alt="feacture"
                      title="feacture"
                    />
                    <h5 className="section-title">{t("INSURANCE")}</h5>
                    <p className="caption">{t("INSURANCE_TITLE")}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Governance;
