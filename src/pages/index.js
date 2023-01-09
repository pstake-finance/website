import React from 'react';
import Banner from '../containers/homepage/Banner';
import Features from '../containers/homepage/Features';
import Blogs from '../containers/homepage/Blogs';
import Networks from '../containers/homepage/Networks';
import Investors from '../containers/homepage/Investors';
import Footer from "../components/Footer";
import StakingSteps from "../containers/homepage/StakingSteps";
import Audited from "../containers/homepage/Audited";
import Validators from "../containers/homepage/Validators";
const homePage = () => {
  return (
    <React.Fragment>
      <div className="container-fluid p-0 tokensale home-page">
        <Banner />
        <Networks />
        <Features />
        <StakingSteps/>
        <Audited/>
        <Validators/>
        <Investors/>
        <Blogs />
        <Footer />
      </div>
    </React.Fragment >
  );
}


export default homePage;