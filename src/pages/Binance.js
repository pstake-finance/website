import React from 'react';
import SectionTwo from '../containers/binance/SectionTwo';
import FeaturedBlogs from '../containers/binance/FeactureBlog';
import Footer from "../components/Footer";
import Banner from "../containers/binance/Banner";
import Comparison from "../containers/binance/Comparison";
import Ecosystem from "../containers/binance/Ecosystem";
import Guides from "../containers/binance/Guides";
import Audited from "../containers/binance/Audited";
import Validators from "../containers/binance/Validators";
import Faq from "../containers/binance/Faq";
const Binance = () => {
    return (
        <React.Fragment>
            <div className="container-fluid p-0 binance">
                <Banner />
                <SectionTwo />
                <Comparison/>
                <Ecosystem/>
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