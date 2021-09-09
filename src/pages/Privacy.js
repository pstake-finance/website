import React from 'react';
import {Table} from "react-bootstrap";
import Footer from "../Containers/HomePage/Footer";
import {
    PSTAKE_WEB_URL,CHORME_URL,
    FIREFOX_URL,
    SAFARI_URL,
    IE_URL } from '../constants/config';
const Privacy = () => {
    return (
        <React.Fragment>
            <div className="container-fluid p-0 terms-sections">
                <div className="container">
                    <div className="row">
                        <div className="main-banner-section">
                            <p className="banner-heading">PRIVACY POLICY</p>
                        </div>
                    </div>
                </div>
                <div className="terms-content">
                    <div className="container">
                        <div className="general-terms">
                            <h3 className="heading">General</h3>
                            <p className="sub-heading">1. Please read this privacy policy carefully.</p>
                            <p>The Privacy Policy details out how PSTAKE TECHNOLOGIES, handles the personal data of
                                individuals/ corporates (referred to as “you”, “your”) with regards to accessing and
                                using the website, application (referred to as “app”) and related services as available
                                at <a href={PSTAKE_WEB_URL} rel="noopener noreferrer" target="_blank">{PSTAKE_WEB_URL}</a> (“The Website”). PSTAKE TECHNOLOGIES (referred to as the
                                “Company”, “we”, “our”, “us”) is the controller for your personal data within the scope
                                of this Privacy Policy. The Company decides “why” and “how” your personal data is
                                processed in connection with the Staking Protocols & Services.</p>
                            <p>This Privacy Policy is a part of the Terms of Use which is incorporated in this Privacy Policy by way of reference. By using this Staking Protocols & Services and accessing the website and app, you agree to the terms and conditions of this Privacy Policy and consent to our use and disclosure of information provided by you in the manner described in this Privacy Policy. IF YOU DO NOT AGREE WITH THIS PRIVACY POLICY, PLEASE DO NOT USE THIS WEBSITE and APP. We reserve the right to revise this Privacy Policy and/or update the Website and App. Please check this page from time to time to take notice of any changes we make.</p>
                            <p className="sub-heading">2. Categories of Personal Data Collected, Purposes of and Bases for the Processing</p>
                            <Table bordered>
                                <thead>
                                <tr>
                                    <th>Purpose of processing</th>
                                    <th>Personal data</th>
                                    <th>Legal ground (basis)</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Communicating with you regarding your inquiries, questions or support tickets</td>
                                    <td>Email address, subject of inquiry and its content, attachments and any other information you voluntarily provide to us</td>
                                    <td>Our legitimate interests /contractual obligations</td>
                                </tr>
                                <tr>
                                    <td>Provides access to users of the website and app  to a decentralized protocol, known as “pSTAKE”</td>
                                    <td>Wallet addresses, transaction and balance information</td>
                                    <td>Our contractual obligations (Terms of Use)</td>
                                </tr>
                                <tr>
                                    <td>Analyzing our website and app visitors’ actions to improve our Services</td>
                                    <td>See section “Cookies and Automatically Collected Data”</td>
                                    <td>Your consent
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                            <p>The personal data we collect directly from you or from other parties whom you have authorized such collection. We do not process special categories of personal data about you unless you voluntarily provide such data to us.</p>
                            <p className="sub-heading">
                                3. Cookies and Automatically Collected Data
                            </p>
                            <p>Your consent is asked to use cookies, which are small filed places on the which are small files placed on the hard drive of your computer or mobile device, and web beacons, which are small electronic files located on pages of the website and application, to collect certain information about your equipment, browsing actions, and patterns, as you navigate and interact with our website and Staking Protocol & related services.
                            </p>
                            <p>The data automatically collected from cookies may include information from your web browser (such as browser type and browser language) and details of your visits to our website and application, including traffic data, location data and logs, page views, length of visit and website navigation paths as well as information about your device and internet connection, including your IP address and how you interact with the Services. We collect this data in order to help us improve our website , application and the related Services.</p>
                            <p>The information we collect automatically may also include statistical and performance information arising from your use of our Services, website and application. This type of data will only be used by us in an aggregated and anonymized manner.
                            </p>
                            <p>You can disable/delete the cookies set by our website - please find the appropriate instructions by following these links on how to implement the deletion in different browsers:</p>
                            <ul>
                                <li>For Google Chrome browser please refer to this
                                    <a href={CHORME_URL} rel="noopener noreferrer" target="_blank"> instructions</a>
                                </li>
                                <li>For Firefox browser please look up <a href={FIREFOX_URL} rel="noopener noreferrer" target="_blank">here</a>
                                </li>
                                <li>For Safari browser please <a href={SAFARI_URL} rel="noopener noreferrer" target="_blank">visit</a></li>
                                <li>For Internet Explorer browser please <a href={IE_URL} rel="noopener noreferrer" target="_blank">refer to</a>
                                </li>

                            </ul>
                            <p className="sub-heading">4. Personal Data of Children</p>
                            <p>If you are a resident of the US and you are under the age of 13, please do not submit any personal data through the website. If you have reason to believe that a child under the age of 13 has provided personal data to us through the Services, please contact us, and we will endeavour to delete that information from our databases.
                            </p>
                            <p>If you are a resident of the European Economic Area and you are under the age of 16, please do not submit any personal data through the Services and the website. We do not collect or process Personal Information pertaining to a child, where a child under the GDPR is defined as an individual below the age of 16 years old.</p>
                            <p className="sub-heading">5. Personal Data Storage Period or Criteria for Such Storage
                            </p>
                            <p>Your Personal data will be stored till:
                            </p>
                            <ul>
                                <li>they are necessary to render you the Services;
                                </li>
                                <li>your consent is no longer valid;
                                </li>
                                <li>your personal data have been deleted following your data deletion request;
                                </li>
                                <li>we have received the court order or a lawful authority’s request mandating to permanently delete all the personal data we have obtained about you; or</li>
                                <li>In other circumstances prescribed by applicable laws.
                                </li>
                            </ul>
                            <p>In any event, we will not store your personal data for periods longer than it is necessary for the purposes of the processing.</p>
                            <p className="sub-heading">6. Personal Data Recipients and Transfer of Personal Data</p>
                            <p>For the purposes of rendering the Services to you and operating the website and app, the Company may share your personal data with certain categories of recipients and under circumstances mentioned below:
                            </p>
                            <ul>
                                <li>Providers, consultants, advisors, vendors and partners acting as data processors (meaning they process your personal data on our behalf and according to your instructions), which may supply hosting services, web analytics services, email marketing and automation services to run and operate the website, maintain, deliver and improve the Services. With all such parties we enter into data processing agreements required to be concluded by the applicable laws between controllers and processors to protect and secure the personal data by using appropriate technical and organizational measures;
                                </li>
                                <li>Only in strict compliance with the applicable provisions, the Company also may share the personal data with governmental authorities upon their decision, receipt of court orders mandating the Company to disclose the personal data. In any such case, the Company will strive to disclose only a portion of the personal data which is definitely required to be disclosed, while continuing to treat the rest of the data in confidence;
                                </li>
                                <li>With any other third parties, if we have been explicitly requested to do so by you and as long as it doesn’t infringe the applicable laws.
                                </li>
                            </ul>
                            <p>Keep in mind that the use of services based on public blockchains intended to immutably record transactions across wide networks of computer systems. Many blockchains are open to forensic analysis which can lead to deanonymization and the unintentional revelation of personal data, in particular when blockchain data is combined with other data. Because blockchains are decentralized or third-party networks which are not controlled or operated by us, we are not able to erase, modify, or alter personal data from such networks.
                            </p>
                            <p className="sub-heading">7. Security of Processing</p>
                            <p>We take information security very seriously. We work hard to protect the personal data you give us from loss, misuse, or unauthorized access. We utilize a variety of safeguards to protect the personal data submitted to us, both during transmission and once it is received.</p>
                            <p className="sub-heading">8. Contacts and Requests; Changes to the Privacy Policy</p>
                            <p>Please send all your requests and queries in connection with your rights and freedoms relating to the personal data protection and processing conducted by the Company as part of providing the website and application and rendering the Services to you to:  <a href={PSTAKE_WEB_URL} rel="noopener noreferrer" target="_blank">{PSTAKE_WEB_URL}</a>
                            </p>
                            <p>Changes to the Privacy Policy will be displayed in the form of the updated document published on our website. We also can arrange the updates introduced to the Privacy Policy by archiving the previous versions of the document accessible in the electronic form on the website.</p>
                            <p className="sub-heading">9. Disclaimer</p>
                            <p>It may kindly be noted that the transmission of information via the internet is not completely secure. We will do our best to protect your Personal Information and Sensitive Personal Information but we cannot guarantee the security of your data transmitted to the Website. Any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorised access.
                            </p>
                            <p>We request you to ensure that all your information shared with us is accurate, correct and complete, at all times, and you must promptly inform us of any changes to your information which may impact your use of the Website and application. You understand that we shall not be liable or responsible for the authenticity of your information, or for any loss or damage that may occur to you or other third parties on account of the information being provided by you.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </React.Fragment>
    )
};
export default Privacy;
