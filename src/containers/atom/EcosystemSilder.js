import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import uniswap from '../../assets/integrations/uniswap.svg';
import Card from "react-bootstrap/Card";

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
    const list = [
        {
            name:'Coming Soon!',
            tag:'DEX',
            logoUrl:uniswap,
            content:<span className='d-block'>Provide liquidity in the stkATOM/ATOM liquidity pool to earn trading fees</span>,
            primaryButtonText:'Add liquidity',
            primaryButtonUrl:`https://pancakeswap.finance/add/${process.env.REACT_APP_STK_BNB_CONTRACT_ADDRESS}/BNB`,
            secondaryButtonText:'Learn More',
            secondaryButtonUrl:'/',
            tvl:'$0',
            apy:'',
        },
    ];

    return (
        <section className="ecosystem-section" data-aos="fade-up">
            <div className="container">
                <h3 className="section-title">Put your stkATOM to work in the <br/> ATOM DeFi Ecosystem </h3>
                <Carousel
                    ssr
                    partialVisbile
                    deviceType={deviceType}
                    itemClass="image-item"
                    responsive={responsive}
                    autoPlay={false}
                >
                    {list.slice(0, 5).map((item, index) => {
                        return (
                            <Card key={index}>
                                <Card.Body className="pancake">
                                    <div className="tag">
                                        <p>{item.tag}</p>
                                    </div>
                                    <div className="icon-box">
                                        <img className="pt-4 pb-4" src={item.logoUrl} title="Asset" alt="Asset"/>
                                    </div>
                                    <div className="content">
                                        <p className="card-heading">{item.name}</p>
                                        <p className="card-content">
                                            {item.content}
                                        </p>
                                    </div>
                                    <div className="stats justify-content-center">
                                        <p className="item">{item.apy}</p>
                                        <p className="item">{item.tvl}</p>
                                    </div>
                                    <div className="buttons">
                                        <a rel="noopener noreferrer" target="_blank" href={item.primaryButtonUrl} className="button-link primary pointer-events-none">
                                            {item.primaryButtonText}
                                        </a>
                                        <a rel="noopener noreferrer"
                                           target="_blank"
                                           href={item.secondaryButtonUrl}
                                           className={`button-link secondary pointer-events-none`}
                                        >
                                            {item.secondaryButtonText}
                                        </a>
                                    </div>
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