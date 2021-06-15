import React from 'react';
import Icon from "../../components/Icon";
const FeactureBlog = () => {
    return (
        <React.Fragment>
             <section className="stay-updated">
            <div className="title-line-section">
                <h3 className="section-title">Featured Blogs</h3>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 blog-articles left">
                        <div className="row m-0">
                            <div className="col-md-12">
                            <a href="https://medium.com/@pstakefinance/pstake-alpha-release-bug-bounty-full-details-837b52fcdee5"
                                   target="_blank" rel="noopener noreferrer">
                                    <div className="custom-card mb-10" data-aos="fade-up">
                                        <div className="blog-image">
                                            <img className="card-img-top" alt="blog2"
                                                 src="https://miro.medium.com/max/2880/1*CkXNjocOSl7i2HeUEpcFwA.png"/>
                                        </div>

                                        <div className="custom-card-body">
                                            <p className="text1">PROGRAM</p>
                                            <p className="learn-more">Learn More<Icon viewClass="arrow-right" icon="arrow-right"/></p>
                                        </div>
                                    </div>
                                </a> 
                            </div> 
                        </div>
                    </div>
                    <div className="col-md-4 blog-articles left">
                        <div className="row m-0">
                            <div className="col-md-12">
                            <a href="https://medium.com/@pstakefinance/introducing-pstake-unlocking-liquidity-of-staked-assets-c704738ab37f"
                                   target="_blank" rel="noopener noreferrer">
                                    <div className="custom-card mb-10" data-aos="fade-up">
                                        <div className="blog-image">
                                            <img className="card-img-top" alt="blog2"
                                                 src="https://miro.medium.com/max/1440/1*mz3Ee2H4quxAOl7VQ6IgSQ.gif"/>
                                        </div>

                                        <div className="custom-card-body">
                                            <p className="text1">STAKE</p>
                                            <p className="learn-more">Learn More<Icon viewClass="arrow-right" icon="arrow-right"/></p>
                                        </div>
                                    </div>
                                </a>
                              
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4 blog-articles left">
                        <div className="row m-0">
                            <div className="col-md-12">
                            <a href="https://buff.ly/3x3DN89"
                                   target="_blank" rel="noopener noreferrer">
                                    <div className="custom-card mb-10" data-aos="fade-up">
                                        <div className="blog-image">
                                            <img className="card-img-top" alt="blog2"
                                                 src="https://miro.medium.com/max/2880/1*oueKH_JZZx5SNeqiNyL7VA.gif"/>
                                        </div>

                                        <div className="custom-card-body">
                                            <p className="text1">STAKE</p>
                                            <p className="learn-more">Learn More<Icon viewClass="arrow-right" icon="arrow-right"/></p>
                                        </div>
                                    </div>
                                </a>
                              
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </section>
        </React.Fragment >
    );
}


export default FeactureBlog;