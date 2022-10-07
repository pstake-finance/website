import React, {useEffect, useState} from 'react';
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
import {fetchAlpaca, fetchBeefyInfo, fetchOpenLeverage, fetchPancakeInfo, fetchWombat} from "../actions/api";
import { useLocation } from "react-router-dom";

const Binance = () => {
    const [alpacaInfo, setAlpacaInfo] = useState({tvl:0, apy:0})
    const [beefyInfo, setBeefyInfo] = useState({tvl:0, apy:0})
    const [pancakeInfo, setPanCakeInfo] = useState({tvl:0, apy:0})
    const [openLeverageInfo, setOpenLeverageInfo] = useState({tvl:0, apy:0})
    const [wombatInfo, setWombatInfo] = useState({tvl:0, apy:0})
    const location = useLocation();

    useEffect(() => {
        if (window.location.pathname === '/bnb') {
            const script = document.createElement('script');

            script.src = "https://static.zdassets.com/ekr/snippet.js?key=90d2e772-18c1-44ad-8eab-6789a882b5f3";
            script.async = true;
            script.id = "ze-snippet";

            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            }
        }
    }, [location]);

    useEffect(()=>{
        const fetchApi = async () =>{
            setAlpacaInfo(await fetchAlpaca());
            setBeefyInfo(await fetchBeefyInfo());
            setPanCakeInfo(await fetchPancakeInfo());
            setOpenLeverageInfo(await fetchOpenLeverage());
            setWombatInfo(await fetchWombat());
        }
        fetchApi();
    }, [])

    const maxApy = Math.max(Number(alpacaInfo.apy),
        Number(beefyInfo.apy),
        Number(pancakeInfo.apy),
        Number(openLeverageInfo.apy),
        Number(wombatInfo.apy)
    );

    return (
        <React.Fragment>
            <ScrollToTop/>
            <div className="container-fluid p-0 binance">
                <Banner maxApy={maxApy}/>
                <SectionTwo />
                <Comparison />
                <EcosystemSlider
                    alpacaInfo={alpacaInfo}
                    beefyInfo={beefyInfo}
                    pancakeInfo={pancakeInfo}
                    openLeverageInfo={openLeverageInfo}
                    wombatInfo={wombatInfo}
                />
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