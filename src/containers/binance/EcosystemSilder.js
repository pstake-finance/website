import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import pancake from '../../assets/integrations/pancake.svg';
import alpaca from '../../assets/integrations/alpaca.svg';
import beefy from '../../assets/integrations/beefy.svg';
import wombat from '../../assets/integrations/wombat.svg';
import leverage from '../../assets/integrations/leverage.svg';
import midas from '../../assets/integrations/midas.svg';
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

const EcosystemSlider = ({ deviceType, pancakeInfo, openLeverageInfo, beefyInfo, alpacaInfo, wombatInfo }) => {

    const list = [
        {
            name:'PancakeSwap',
            tag:'DEX',
            logoUrl:pancake,
            content:<span className='mb-4 d-block'>Provide liquidity in the stkBNB/BNB liquidity pool to earn trading fees and $CAKE rewards</span>,
            primaryButtonText:'Add liquidity',
            primaryButtonUrl:`https://pancakeswap.finance/add/${process.env.REACT_APP_STK_BNB_CONTRACT_ADDRESS}/BNB`,
            secondaryButtonText:'Learn More',
            secondaryButtonUrl:'https://youtube.com/clip/UgkxCZAHN3sTY8sH3FD_UoKvYZns6oZBFaza',
            tvl:<>${parseInt(pancakeInfo.tvl).toLocaleString()} <span>TVL</span></>,
            apy: ''
        },
        {
            name:'Alpaca Finance',
            tag:'Yield Farming',
            logoUrl:alpaca,
            content:'Earn additional rewards from stkBNB/BNB pool on Pancakeswap by borrowing assets and Leverage Farming',
            primaryButtonText:'Start farming',
            primaryButtonUrl:'https://app.alpacafinance.org/farm/pancake-swap/pool/pcs-stkbnb-bnb/-/open?leverage=4&configKey=pcs-stkbnb-bnb',
            secondaryButtonText:'Learn More',
            secondaryButtonUrl:'https://youtube.com/clip/UgkxNxpgUN_yqPpLh2vknM6pQxpmSzH1vSPr',
            tvl:<>${parseInt(alpacaInfo.tvl).toLocaleString()} <span>TVL</span></>,
            apy: <>{alpacaInfo.apy}% <span>APY</span></>
        },
        {
            name:'Wombat',
            tag:'DEX',
            logoUrl: wombat,
            content:<span className='mb-4 d-block'>Provide single sided stkBNB liquidity to earn trading fees, $PSTAKE and $WOM emissions</span>,
            primaryButtonText:'Add liquidity',
            primaryButtonUrl:'https://app.wombat.exchange/pool',
            secondaryButtonText:'Learn More',
            secondaryButtonUrl:'https://youtube.com/clip/UgkxCZAHN3sTY8sH3FD_UoKvYZns6oZBFaza',
            tvl:<>${parseInt(wombatInfo.tvl).toLocaleString()} <span>TVL</span></>,
            apy: ''
        },
        {
            name:'Beefy',
            tag:'Yield Farming',
            logoUrl: beefy,
            content:'Earn compound interest on stkBNB/BNB pool on Pancakeswap by depositing BNB or stkBNB in Beefy vault',
            primaryButtonText:'Start farming',
            primaryButtonUrl:'https://app.beefy.finance/vault/cakev2-wbnb-stkbnb',
            secondaryButtonText:'Learn More',
            secondaryButtonUrl:'https://www.youtube.com/watch?v=UgiEqmKSOWI',
            tvl:<>${parseInt(beefyInfo.tvl).toLocaleString()} <span>TVL</span></>,
            apy: <>{beefyInfo.apy}% <span>APY</span></>
        },
        {
            name:'OpenLeverage',
            tag:'Margin Trading',
            logoUrl: leverage,
            content:'Earn leveraged staking yields on your stkBNB by borrowing BNB upto 6x leverage and converting it to stkBNB',
            primaryButtonText:'Leveraged Staking',
            primaryButtonUrl:`https://bnb.openleverage.finance/app/trade/pairs/345`,
            secondaryButtonText:'Learn More',
            secondaryButtonUrl:'https://www.youtube.com/watch?v=UgiEqmKSOWI',
            tvl:<>${parseInt(openLeverageInfo.tvl).toLocaleString()} <span>TVL</span></>,
            apy: <><span>upto </span>{openLeverageInfo.apy}% <span>APY</span></>
        },
        {
            name:'Midas Capital',
            tag:'Borrowing/Lending',
            logoUrl: midas,
            content:<span className='mb-4 d-block '>Deposit stkBNB/BNB/stkBNB-BNB LP token as collateral to borrow BNB</span>,
            primaryButtonText:'Borrow',
            primaryButtonUrl:`https://app.midascapital.xyz/56/pool/11`,
            secondaryButtonText:'Learn More',
            secondaryButtonUrl:'',
            tvl:<span className="invisible">''<span>TVL</span></span>,
            apy:''
        }
    ];

    return (
        <section className="ecosystem-section">
            <div className="container">
                <h3 className="section-title">Put your stkBNB to work in the <br/> BNB DeFi Ecosystem </h3>
                <Carousel
                    ssr
                    partialVisbile
                    deviceType={deviceType}
                    itemClass="image-item"
                    responsive={responsive}
                    autoPlay={false}
                >
                    {list.slice(0, 6).map((item, index) => {
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
                                        <a rel="noopener noreferrer" target="_blank" href={item.primaryButtonUrl} className="button-link primary">
                                            {item.primaryButtonText}
                                        </a>
                                        <a rel="noopener noreferrer"
                                           target="_blank"
                                           href={item.secondaryButtonUrl}
                                           className={`button-link secondary ${item.name === 'Wombat' || item.name === 'Midas Capital' ? 'pointer-events-none' : ''}`}
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