import React from 'react';
import SectionTwo from '../containers/atom/SectionTwo';
import Footer from "../components/Footer";
import Banner from "../containers/atom/Banner";
import Comparison from "../containers/atom/Comparison";
import ScrollToTop from "../components/ScrollToTop";
import FeaturedBlogs from "../containers/atom/FeactureBlog";

const Atom = () => {
    return (
        <React.Fragment>
            <ScrollToTop/>
            <div className="container-fluid p-0 atom">
                <Banner />
                <SectionTwo />
                <Comparison/>
                <FeaturedBlogs/>
                <Footer />
            </div>
        </React.Fragment >
    );
}


export default Atom;