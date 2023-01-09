import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import ReactGa from 'react-ga4';

import Icon from "../../components/Icon";

import {
    LEARN_MORE,
    REGISTER
} from '../../constants/config';


const Participate = () => {
    const { t } = useTranslation('common');
    const onClickRegister = () => {
        ReactGa.event({
            category: 'TokenSale',
            action: 'Clicked on Register'
        })
    
    }
    const onClickLearnMore = () => {
        ReactGa.event({
            category: 'TokenSale',
            action: 'Clicked on LearnMore'
        })
    
    }
    return (
        <React.Fragment>
            <section className="participate">
                <div className="container">
                    <h3 className="section-title">{t("PARTICIPATE_TOKEN")}</h3>
                    <div className="ptp-btn">
                        <span className="buttonapp" onClick={onClickRegister}><a href={REGISTER} target="_blank" rel="noopener noreferrer" className="nav-link"><span className="nav-link app-btn">{t("REGISTER")}</span></a></span>
                        <span className="buttonapp second" onClick={onClickLearnMore}><a href={LEARN_MORE} target="_blank" rel="noopener noreferrer" className="nav-link"><span className="nav-link app-btn">{t("LEARN_MORE")}&nbsp;<Icon viewClass="social_icon_img" icon="linkext" /></span></a></span>
                    </div>
                </div>

            </section>
        </React.Fragment >
    );
}


export default Participate;