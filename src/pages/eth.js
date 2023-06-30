import React from "react";
import Footer from "../components/molecules/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Banner from "../components/organisms/ethereum/Banner"
import Scaling from "../components/organisms/ethereum/Scalling";
import Steps from "../components/organisms/ethereum/Steps";
import Guides from "../components/organisms/ethereum/Guides";

const Eth = () => {
    return (
        <>
            <ScrollToTop />
            <Banner/>
            <Scaling/>
            <Steps/>
            <Guides/>
            <Footer />
        </>
    );
};

export default Eth;
