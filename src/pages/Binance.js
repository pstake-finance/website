import React from 'react';
import SectionTwo from '../containers/binance/SectionTwo';
import FeaturedBlogs from '../containers/binance/FeactureBlog';
import Footer from "../components/Footer";
import Banner from "../containers/binance/Banner";
import Comparison from "../containers/binance/Comparison";
import Guides from "../containers/binance/Guides";
import Audited from "../containers/binance/Audited";
import Validators from "../containers/binance/Validators";
import Faq from "../containers/binance/Faq";
import ScrollToTop from "../components/ScrollToTop";
import EcosystemSlider from "../containers/binance/EcosystemSilder";

const Binance = () => {
    return (
        <React.Fragment>
            <ScrollToTop/>
            <div className="container-fluid p-0 binance">
                <Banner />
                <SectionTwo />
                <Comparison/>
                <EcosystemSlider/>
                <Guides/>
                <Validators/>
                <Audited/>
                <FeaturedBlogs />
                <Faq/>
                <Footer />
            </div>
        </React.Fragment >
    );
}


export default Binance;