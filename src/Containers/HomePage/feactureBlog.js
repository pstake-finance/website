import React from 'react';
import Icon from "../../components/Icon";
const FeactureBlog = () => {
    return (
        <React.Fragment>
             <section className="stay-updated">
            <div className="title-line-section">
                <h3 className="section-title">Feacture Blog</h3>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5" data-aos="fade-up">
                        <a href="https://medium.com/@pstakefinance/introducing-pstake-unlocking-liquidity-of-staked-assets-c704738ab37f"
                           rel="noopener noreferrer" target="_blank">
                            <div className="blog-section">
                                <div className="custom-card">
                                    <img className="card-img-top" alt="blog"
                                         src="https://miro.medium.com/max/2880/1*mz3Ee2H4quxAOl7VQ6IgSQ.gif"/>
                                    <div className="custom-card-body">
                                        <p className="text">About</p>
                                        <p className="text1">The Internet disintermediated the media & communications industry. Using HTTP, SMTP, and TCP/IP as the foundational layers, the cost of information exchange was significantly...</p>
                                        <p className="learn-more">Learn More<Icon viewClass="arrow-right" icon="arrow-right"/></p>
                                    </div>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div className="col-md-7">
                        <div className="row m-0">
                            <div className="col-md-6 blog-articles left">
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