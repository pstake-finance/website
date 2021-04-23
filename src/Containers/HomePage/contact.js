import React, { Component } from 'react';
import Icon from "../../components/Icon";
import ModalVideo from 'react-modal-video';
import playicon from '../../assets/play.svg';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
      }
    render() {
    return (
        <React.Fragment>
            <section className="contact-section">
                <div className="container">
                   <div className="row">
                       <div className="col-md-6 col-sm-12 content">
                           <div className="">
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
                       <div className="col-md-6 col-sm-12 play-section">
                        <img src={playicon} className="text-center play-icon" alt="play" onClick={this.openModal}/>
                       <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                       </div>
                   </div>
                </div>
            </section>
        </React.Fragment >
    );
    }
}


export default Contact;