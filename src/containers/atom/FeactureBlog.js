import React from 'react';
import { useTranslation } from "react-i18next";
import {
    STK_ATOM_BLOG_ONE_URL,
    STK_ATOM_BLOG_ONE_IMAGE_URL,
    STK_ATOM_BLOG_TWO_URL, STK_ATOM_BLOG_TWO_IMAGE_URL, STK_ATOM_BLOG_URL,
} from '../../constants/config';
import Icon from "../../components/Icon";
const FeaturedBlogs = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <section className="blogs-section">
                <h3 className="section-title">{t("FEATURED_BLOGS")}</h3>
                <div className="container" data-aos="fade-up">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 blog-articles left">
                            <div className="col-md-12 px-4">
                                    <a href={STK_ATOM_BLOG_ONE_URL}
                                       target="_blank" rel="noopener noreferrer">
                                        <div className="custom-card mb-10">
                                            <div className="blog-image">
                                                <img className="card-img-top" alt="blog2"
                                                     src={STK_ATOM_BLOG_ONE_IMAGE_URL} />
                                            </div>
                                            <div className="custom-card-body">
                                                {/*<p className="tag">{t("A Letter to the Cosmos Community:From pSTAKE")}</p>*/}
                                                <p className="learn-more">{t("LEARN_MORE")}<Icon viewClass="right-arrow" icon="right-arrow" /></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                        </div>
                        <div className="col-lg-4 col-md-6 blog-articles left">
                            <div className="col-md-12 px-4">
                                    <a href={STK_ATOM_BLOG_TWO_URL}
                                       target="_blank" rel="noopener noreferrer">
                                        <div className="custom-card mb-10">
                                            <div className="blog-image">
                                                <img className="card-img-top" alt="blog2"
                                                     src={STK_ATOM_BLOG_TWO_IMAGE_URL}
                                                />
                                            </div>
                                            <div className="custom-card-body">
                                                {/*<p className="tag">{t("Liquid Staking with IBC: ATOM & stkATOM")}</p>*/}
                                                <p className="learn-more">{t("LEARN_MORE")}<Icon viewClass="right-arrow" icon="right-arrow" /></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <a rel="noopener noreferrer" target="_blank" href={STK_ATOM_BLOG_URL} className="button-link primary">
                                <span className="button xprt">
                                    <span className="hideone">{t("READ_ALL")}&nbsp;</span>
                                </span>
                        </a>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}


export default FeaturedBlogs;