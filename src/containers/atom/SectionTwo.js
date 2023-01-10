import React from "react";
import Card from "react-bootstrap/Card";
import Icon from "../../components/Icon";

const SectionTwo = () => {
  return (
    <React.Fragment>
      <section className="use-case-section">
        <div className="container">
          <h3 className="section-title">
            Why liquid stake your <br /> ATOM with pSTAKE?
          </h3>
          <div className="row">
            <Card className="col-lg-4 col-md-6 col-xs-12" data-aos="fade-up">
              <div className="circle"></div>
              <Card.Body className="">
                <div className="icon-box">
                  <Icon viewClass="use-case" icon="usecase2" />
                </div>
                <div className="content">
                  <p className="card-heading">ATOM yields like never before</p>
                  <p className="card-content">
                    Liquid staking ATOM on pSTAKE generates high yields by
                    auto-compounding ATOM staking rewards while enabling you to
                    easily use your staked ATOM in Cosmos DeFi
                  </p>
                </div>
              </Card.Body>
            </Card>
            <Card className="col-lg-4 col-md-6  col-xs-12" data-aos="fade-up">
              <Card.Body className="">
                <div className="icon-box">
                  <Icon viewClass="use-case" icon="security" />
                </div>
                <div className="content">
                  <p className="card-heading">Safe, Secure, Solid</p>
                  <p className="card-content">
                    Security audits from Halborn & Oak Security, upcoming
                    Immunefi Bug Bounty, and on-chain monitoring measures ensure
                    you have a secure experience while liquid staking your ATOM
                  </p>
                </div>
              </Card.Body>
            </Card>
            <Card className="col-lg-4 col-md-6 col-xs-12" data-aos="fade-up">
              <div className="circle"></div>
              <Card.Body className="">
                <div className="icon-box">
                  <Icon viewClass="use-case" icon="cosmos" />
                </div>
                <div className="content">
                  <p className="card-heading">
                    By Cosmonauts,
                    <br /> For Cosmonauts
                  </p>
                  <p className="card-content">
                    Minimal fees, fast transactions, high rewards, and IBC
                    interoperability make liquid staking your ATOM smooth and
                    seamless
                  </p>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SectionTwo;
