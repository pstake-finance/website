import React from 'react';
import SectionOne from '../pages/components/HomePage/section1';
import SectionTwo from '../pages/components/HomePage/section2';
const homePage = () => {

  

        return (
            <React.Fragment>
                <div className="container-fluid">
                    <SectionOne />
                    <SectionTwo />
                </div>
            </React.Fragment >
        );
    }


export default homePage;