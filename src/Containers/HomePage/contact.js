import React from 'react';
import Icon from "../../components/Icon";
const Contact = () => {
    return (
        <React.Fragment>
            <section className="contact-section">
                <div className="container">
                   <div className="row">
                       <div className="col-md-6 col-sm-12">
                           <div className="content">
                               <div className="info">
                                   <p>Tutorial</p>
                                   <button className="blog-button">
                                       <Icon viewClass="medium" icon="medium-m"/>
                                       <span className="text">Blog Post</span>
                                       <Icon viewClass="social_icon_img" icon="arrow-navigate"/>
                                   </button>
                               </div>
                           </div>
                       </div>
                       <div className="col-md-6 col-sm-12">
                       </div>
                   </div>
                </div>
            </section>
        </React.Fragment >
    );
}


export default Contact;