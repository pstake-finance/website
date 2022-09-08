import React from 'react';

const StakingSteps = () => {
    return (
        <React.Fragment>
            <section className="steps-section aos-init aos-animate">
                <div className="container">
                    <h3 className="section-title">Liquid Staking as simple as 1, 2, 3</h3>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className="box">
                                <div className="icon-box">
                                    <span className='text'>1</span>
                                </div>
                                <h5>Stake your PoS ASSET</h5>
                                <p>Select a non-zero amount of tokens to stake through pSTAKE’s robust validator set & earn staking rewards</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className="box">
                                <div className="icon-box">
                                    <span className='text'>2</span>
                                </div>
                                <h5>Receive stkASSET</h5>
                                <p>Get your stkASSET token which increases in value relative to your staked amount each epoch from staking rewards</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className="box">
                                <div className="icon-box">
                                    <span className='text'>3</span>
                                </div>
                                <h5>Participate in DeFi</h5>
                                <p>Put your stkASSET to work with various opportunities in the DeFi tab on pSTAKE’s application</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </React.Fragment >
    );
}


export default StakingSteps;