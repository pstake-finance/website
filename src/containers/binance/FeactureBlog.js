import React from 'react';
import { useTranslation } from "react-i18next";
import {
    PSTAKE_BLOG_ONE_URL,
    PSTAKE_BLOG_ONE_IMG_URL,
    PSTAKE_BLOG_TWO_URL,
    PSTAKE_BLOG_TWO_IMG_URL,
    PSTAKE_BLOG_THREE_URL,
    PSTAKE_BLOG_THREE_IMG_URL,
} from '../../constants/config';
import Icon from "../../components/Icon";
const FeaturedBlogs = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <section className="stay-updated blog-section">
                <div className="title-line-section">
                    <h3 className="section-title">{t("FEACTURED_BLOGS")}</h3>
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
                                                <p className="text1">{t("USER GUIDE")}</p>
                                                <p className="learn-more">{t("LEARN_MORE")}<Icon viewClass="arrow-right" icon="arrow-right" /></p>
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
                                                <p className="text1">LIQUID STAKING</p>
                                                <p className="learn-more">{t("LEARN_MORE")}<Icon viewClass="arrow-right" icon="arrow-right" /></p>
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
                                                <p className="text1">STAKE ATOM</p>
                                                <p className="learn-more">{t("LEARN_MORE")}<Icon viewClass="arrow-right" icon="arrow-right" /></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*<div className="banner-buttons">*/}
                        {/*            <a rel="noopener noreferrer" target="_blank" href={PSTAKE_MEDIUM_URL}>*/}
                        {/*                <span className="button xprt">*/}
                        {/*                    <span className="hideone">{t("READ_ALL")}&nbsp;</span>*/}
                        {/*                </span>*/}
                        {/*            </a>*/}
                        {/*        </div>*/}
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}


export default FeaturedBlogs;