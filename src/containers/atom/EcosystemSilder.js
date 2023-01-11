import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { fetchOsmosisPoolInfo } from "../../actions/api";
import { useEffect } from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 10
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 10
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 10
  }
};

const EcosystemSlider = ({ deviceType }) => {
  const [osmosisInfo, setOsmosisInfo] = useState({ tvl: 0 });
  useEffect(() => {
    const fetchApi = async () => {
      const [osmosis] = await Promise.all([fetchOsmosisPoolInfo()]);

      setOsmosisInfo(osmosis);
    };
    fetchApi();
  }, []);
  const list = [
    {
      name: "Osmosis",
      tag: "DEX",
      logoUrl: "/images/integrations/osmosis.svg",
      content: (
        <span className="d-block">
          Provide liquidity in the stkATOM/ATOM liquidity pool to earn trading
          fees, OSMO emissions & external incentives
        </span>
      ),
      primaryButtonText: "Add Liquidity",
      primaryButtonUrl: `https://app.osmosis.zone/pool/843`,
      secondaryButtonText: "Learn More",
      secondaryButtonUrl: "/",
      tvl: (
        <>
          ${parseInt(osmosisInfo.tvl).toLocaleString()} <span>TVL</span>
        </>
      )
      // apy: (
      //   <>
      //     <span>upto </span>0% <span>APY</span>
      //   </>
      // )
    },
    {
      name: "Coming Soon"
    }
  ];

  return (
    <section className="ecosystem-section" data-aos="fade-up">
      <div className="container">
        <h3 className="section-title">
          Liquid Stake ATOM & put your stkATOM to work in the Cosmos DeFi
          Ecosystem
        </h3>
        <Carousel
          ssr
          partialVisbile
          deviceType={deviceType}
          itemClass="image-item"
          responsive={responsive}
          autoPlay={false}
        >
          {list.slice(0, list.length).map((item, index) => {
            return item.name !== "Coming Soon" ? (
              <Card key={index}>
                <Card.Body className="pancake">
                  <div className="tag">
                    <p>{item.tag}</p>
                  </div>
                  <div className="icon-box">
                    <img
                      className="pb-2"
                      src={item.logoUrl}
                      title="Asset"
                      alt="Asset"
                    />
                  </div>
                  <div className="content">
                    <p className="card-heading">{item.name}</p>
                    <p className="card-content">{item.content}</p>
                  </div>
                  <div className="stats justify-content-center">
                    <p className="item">{item.apy}</p>
                    <p className="item">{item.tvl}</p>
                  </div>
                  <div className="buttons">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={item.primaryButtonUrl}
                      className="button-link primary"
                    >
                      {item.primaryButtonText}
                    </a>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={item.secondaryButtonUrl}
                      className={`button-link secondary pointer-events-none`}
                    >
                      {item.secondaryButtonText}
                    </a>
                  </div>
                </Card.Body>
              </Card>
            ) : (
              <Card>
                <Card.Body className="coming-soon d-flex justify-content-center align-items-center">
                  <p className="card-heading">Coming soon!</p>
                </Card.Body>
              </Card>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default EcosystemSlider;
