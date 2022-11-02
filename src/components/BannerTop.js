import React, {useState} from "react";
import Icon from "./Icon";
import stkATOM from "../assets/stkAtom.svg"

const BannerTop = () => {
    const [banner, setBanner] = useState(true);

    const closeBanner = () => {
        setBanner(false);
    }
    return (
      banner ?
        <div className="container-fluid top-banner-section">
                <div className="container flex align-items-center">
                    <div className="nav-banner py-1 d-flex align-items-center justify-content-center">
                        <img src={stkATOM} alt={"stkATOM"} width={"26px"} className="pr-2"/>
                        <p className="m-0 content">
                            Liquid staking solution for ATOM launching on 8th November.
                        </p>
                        <div onClick={closeBanner}>
                            <Icon viewClass="close" icon="close"/>
                        </div>
                    </div>
                </div>

        </div>
        : null

    );
};

export default BannerTop;
