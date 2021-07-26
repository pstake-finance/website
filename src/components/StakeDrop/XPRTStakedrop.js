import React, { useEffect, useState } from "react";
import ReactGa from "react-ga";
import { Modal } from "react-bootstrap";

import "react-rangeslider/lib/index.css";


import copy from "../../assets/copy2.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import MaticWallets from "./maticWallet";

import RecordXPRTAddress from "./RecordXPRTAddress";

const XPRTStakedrop = () => {

    const [show, setShow] = useState(false);
    const [notParticipantAddress, setNotParticipantAddress] = useState(false);
    const [showDelegateModal, setShowDelegateModal] = useState(false);
    const [showDelegateCliModal, setShowDelegateCliModal] = useState(false);
    const [metamaskShow, setMetamaskShow] = useState(false);

    const handleCancelTerms = () => {
        setMetamaskShow(false);
        setNotParticipantAddress(false);
        this.setState({ tcShow: false });
        this.setState({ metamaskShow: false });
        this.setState({ disableBtn: true });
        this.props.history.push("/StakeDropMatic");
    };
    const onCopy = () => {
        this.setState({ copyValue: true });
        this.setState({ copied: true });
        setTimeout(() => {
            this.setState({ copyValue: false });
        }, 1000);
    };
    const handleClose = () => {
        setShow(false);
        setShowDelegateModal(false);
        setShowDelegateCliModal(false);

    };

    useEffect(() => {
        window.scrollTo(0, 0);
        ReactGa.pageview(window.location.pathname + window.location.search);
        return () => { };
    });

    return (
        <div className="section-participate">
            <section className="participate-stakedrop">
                <div className="container">
                    <div className="col-lg-12">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 staking-second-section">
                                <RecordXPRTAddress
                                    notParticipantAddress={notParticipantAddress}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <Modal
                    show={metamaskShow}
                    onHide={handleClose}
                    className="accountInfoModel"
                    centered
                >
                    <Modal.Body>
                        <p className="tc">Please install metamask</p>
                        <div className="button-section">
                            <button
                                className="btn decline"
                                onClick={handleCancelTerms}
                            >
                                Ok
                            </button>
                        </div>
                    </Modal.Body>
                </Modal>

                <Modal
                    size="lg"
                    show={show}
                    onHide={handleClose}
                    className="accountInfoModel"
                    centered
                >
                    <Modal.Body>
                        <div className="staking-wallet-section">
                            <h4 className="text-left title">
                                List of instructions to send Magic Transaction
                            </h4>
                            <ul className="staking-instructions">
                                <li className="text-left continue-text">
                                    After you have staked your tokens on Matic Network, to do
                                    magic tx, you have to send 0 Eth to the contract address{" "}
                                    <span className="addressmatic">
                                        0x925d092D9Ff6c95EaB70Ee5a23C77F355C67F46d{" "}
                                        <CopyToClipboard
                                            onCopy={onCopy}
                                            text={"0x925d092D9Ff6c95EaB70Ee5a23C77F355C67F46d"}
                                        >
                                            <img src={copy} alt="copy" className="copy-icon" />
                                        </CopyToClipboard>
                                    </span>{" "}
                                    from your ERC-20 wallet.
                                </li>
                                <p className="text-left continue-text">
                                    &emsp;Note: This address has to be same address from which
                                    you have staked your Matic tokens.
                                </p>
                                <p className="text-left continue-text">
                                    &emsp;Note: If you try to send more than 0 Eth, the
                                    transaction will fail.
                                </p>
                            </ul>
                        </div>
                    </Modal.Body>
                </Modal>

                <Modal
                    size="lg"
                    show={showDelegateModal}
                    onHide={handleClose}
                    className="accountInfoModel"
                    centered
                >
                    <Modal.Body>
                        <div className="staking-wallet-section">
                            <h4 className="title">
                                Available Methods to Participate in StakeDrop
                            </h4>

                            <p className="continue-text"> Choose wallet to continue</p>
                            <MaticWallets />
                        </div>
                    </Modal.Body>
                </Modal>

                <Modal
                    size="lg"
                    show={showDelegateCliModal}
                    onHide={handleClose}
                    className="accountInfoModel"
                    centered
                >
                    <Modal.Body>
                        <div className="cli-section">
                            <h3>CLI Method</h3>
                            <p className="info">
                                Awesome, everything that you need is below
                            </p>
                            <div className="cli-address">
                                <p>
                                    kvcli tx staking delegate
                                    kavavaloper14gfgngrgg0pj494euuuvhygrhfptzf2hxllsev [amount]
                                    --from [from_key_or_address] --chain-id kava-4 --node
                                    https://node1.rpc.kava.persistence.one:443
                                </p>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </section>
        </div>
    );

}

export default XPRTStakedrop;
