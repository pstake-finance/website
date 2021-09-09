import React from 'react';
import {
    PSTAKE_BLOG_ONE_URL,
    PSTAKE_BLOG_ONE_IMG_URL,
    PSTAKE_BLOG_TWO_URL,
    PSTAKE_BLOG_TWO_IMG_URL,
    PSTAKE_BLOG_THREE_URL,
    PSTAKE_BLOG_THREE_IMG_URL
} from '../../constants/config';
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
                                    <a href={PSTAKE_BLOG_ONE_URL}
                                        target="_blank" rel="noopener noreferrer">
                                        <div className="custom-card mb-10" data-aos="fade-up">
                                            <div className="blog-image">
                                                <img className="card-img-top" alt="blog2"
                                                    src={PSTAKE_BLOG_ONE_IMG_URL} />
                                            </div>

                                            <div className="custom-card-body">
                                                <p className="text1">LAUNCH</p>
                                                <p className="learn-more">Learn More<Icon viewClass="arrow-right" icon="arrow-right" /></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 blog-articles left">
                            <div className="row m-0">
                                <div className="col-md-12">
                                    <a href={PSTAKE_BLOG_TWO_URL}
                                        target="_blank" rel="noopener noreferrer">
                                        <div className="custom-card mb-10" data-aos="fade-up">
                                            <div className="blog-image">
                                                <img className="card-img-top" alt="blog2"
                                                    src={PSTAKE_BLOG_TWO_IMG_URL}/>
                                            </div>

                                            <div className="custom-card-body">
                                                <p className="text1">PROGRAM</p>
                                                <p className="learn-more">Learn More<Icon viewClass="arrow-right" icon="arrow-right" /></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 blog-articles left">
                            <div className="row m-0">
                                <div className="col-md-12">
                                    <a href={PSTAKE_BLOG_THREE_URL}
                                        target="_blank" rel="noopener noreferrer">
                                        <div className="custom-card mb-10" data-aos="fade-up">
                                            <div className="blog-image">
                                                <img className="card-img-top" alt="blog2"
                                                    src={PSTAKE_BLOG_THREE_IMG_URL} />
                                            </div>

                                            <div className="custom-card-body">
                                                <p className="text1">STAKE</p>
                                                <p className="learn-more">Learn More<Icon viewClass="arrow-right" icon="arrow-right" /></p>
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