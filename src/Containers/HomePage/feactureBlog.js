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
                        <a href="https://medium.com/persistence-blog/how-persistence-is-ushering-in-a-new-era-of-next-gen-financial-products-a06e5d57c72b"
                           rel="noopener noreferrer" target="_blank">
                            <div className="blog-section">
                                <div className="custom-card">
                                    <img className="card-img-top" alt="blog"
                                         src="https://miro.medium.com/max/1684/1*H0mHBkwD2VdVnQ_9ECQmfA.png"/>
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
                            <a href="https://medium.com/persistence-blog/xprt-tokenomics-and-utility-powering-the-persistence-ecosystem-70fc49e10362"
                                   target="_blank" rel="noopener noreferrer">
                                    <div className="custom-card mb-10" data-aos="fade-up">
                                        <div className="blog-image">
                                            <img className="card-img-top" alt="blog2"
                                                 src="https://miro.medium.com/max/3200/0*pmqr3HP6JhJGG0uC"/>
                                        </div>

                                        <div className="custom-card-body">
                                            <p className="text1">TOKEN ECONOMICS</p>
                                            <p className="learn-more">Learn More<Icon viewClass="arrow-right" icon="arrow-right"/></p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://medium.com/persistence-blog/persistence-xprt-staking-guide-4504cf9a19df"
                                   target="_blank" rel="noopener noreferrer">
                                    <div className="custom-card" data-aos="fade-up">
                                        <div className="blog-image">
                                            <img className="card-img-top" alt="blog3"
                                                 src="https://miro.medium.com/max/1000/1*ZQmstOH9DYK30v8zQWB8-g.png"/>
                                        </div>
                                        <div className="custom-card-body">
                                            <p className="text1">STAKING</p>
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