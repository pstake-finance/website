import React, {useEffect, useState} from "react";
import ReactGa from "react-ga";
import { Modal } from "react-bootstrap";
import Icon from "../../components/Icon";
import "react-rangeslider/lib/index.css";
import axios from "axios";
import { getCalculateMatic, getMaticStatusURL } from "../../constants/config";
import copy from "../../assets/copy2.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import MaticWallets from "./maticWallet";
import { checkbech32 } from "../../actions/bech32Validation";
import RecordXPRTAddress from "./RecordXPRTAddress";

const MaticStakedrop = () => {

    const [show, setShow] = useState(false);
    const [tcShow, setTcShow] = useState(false);
    const [volume, setVolume] = useState(0);
    const [blockHeight, setBlockHeight] = useState("--");
    const [totalStaked, setTotalStaked] = useState("--");
    const [statkedOnAudit, setStatkedOnAudit] = useState("--");
    const [totalRewards, setTotalRewards] = useState("--");
    const [estimatedRewards, setEstimatedRewards] = useState("--");
    const [globalTotalStaked, setGlobalTotalStaked] = useState("");
    const [globalAuditStaked, setGlobalAuditStaked] = useState("");
    const [globalAuditStakedInt, setGlobalAuditStakedInt] = useState(0);
    const [totalDistributed, setTotalDistributed] = useState("");
    const [delegateAudit, setDelegateAudit] = useState(0);
    const [globalTotalStakedInt, setGlobalTotalStakedInt] = useState("");
    const [worldGlobalDelegation, setWorldGlobalDelegation] = useState("");
    const [delegateOther, setDelegateOther] = useState(0);
    const [errorAddress, setErrorAddress] = useState(false);
    const [copied, setCopied] = useState(false);
    const [copyValue, setCopyValue] = useState(false);
    const [errorxprtAddress, setErrorxprtAddress] = useState(false);
    const [notParticipantAddress, setNotParticipantAddress] = useState(false);
    const [showDelegateModal, setShowDelegateModal] = useState(false);
    const [showDelegateCliModal, setShowDelegateCliModal] = useState(false);
    const [showMagicTxnClieModel, setShowMagicTxnClieModel] = useState(false);
    const [totalDistributedInt, setTotalDistributedInt] = useState(0);
    const [account, setAccount] = useState("");
    const [maticAddress, setMaticAddress] = useState("");
    const [disableBtn, setDisableBtn] = useState(false);
    const [metamaskShow, setMetamaskShow] = useState(false);
    const [metamaskAccount, setMetamaskAccount] = useState("");
    const [updateAccount, setUpdateAccount] = useState("");
    const [networkName, setNetworkName] = useState("");

    const onCopy = () => {
        setCopyValue(true);
        setCopied(true);
        setTimeout(() => {
            setCopyValue(false);
        }, 1000);
    };

    const handleClose = () => {
        setShow(false);
        setShowDelegateModal(false);
        setShowDelegateCliModal(false);
        setShowMagicTxnClieModel(false);
    };

    const handleTcModal = () => {
        setTcShow(true);

    };

    const handleDelegateModel = () => {
        setShowDelegateModal(true);
    };

    const handleDelegateClieModel = () => {
        setShowDelegateModal(false);
        setShowDelegateCliModal(true);
    };

    const handleMagicTxnClieModel = () => {
        setShow(false);
        setShowMagicTxnClieModel(true);
    };

    const handleTerms = () => {
        setTcShow(false);
        setShow(true);
    };

    const handleCancelTerms = () => {
        setTcShow(false);
        setMetamaskShow(false);
        setDisableBtn(true);
    };

    const metamaskConnect = () => {
        const checkConnection = (cb) => {
            if (window.ethereum && window.ethereum.isMetaMask) {
                cb(null);
            } else {
                setMetamaskShow(true);
                setDisableBtn(true);
            }
        };
        checkConnection((err) => {
            if (err) {
                return;
            }
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((addr) => {
                    setAccount(addr[0]);
                });
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        ReactGa.pageview(window.location.pathname + window.location.search);
        const Statusurl = getMaticStatusURL();
        axios.get(Statusurl).then((statusResponse) => {
            const totalDistributed =
                200000 - statusResponse.data.totalDistributed / 1000000;
            const worldTotalDelegations =
                statusResponse.data.totalStakeDropGlobalDelegation;
            const worldAuditDelegations = statusResponse.data.worldAuditDelegation;
            const worldGlobalDelegation = statusResponse.data.worldGlobalDelegation;
            setTotalDistributedInt(totalDistributed);
            setWorldGlobalDelegation((Math.round(worldGlobalDelegation * 100) / 100).toLocaleString());
            setGlobalTotalStakedInt(worldTotalDelegations);
            setGlobalAuditStakedInt(worldAuditDelegations);
            setTotalDistributed(totalDistributed.toLocaleString());
            setGlobalTotalStaked(worldTotalDelegations.toLocaleString());
            setGlobalAuditStaked(worldAuditDelegations.toLocaleString());
        });

        return () => {};
    });

    const handlexprtAddressChange = (event) => {
        let calAddress = event.target.value;
        let checkBech32 = checkbech32(calAddress);
        if (checkBech32) {
            setErrorxprtAddress(false);
        } else {
            setErrorxprtAddress(true);
        }
    };

    const handleCalculate = (e) => {
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        e.preventDefault();
        setErrorAddress(false);
        setNotParticipantAddress(false);

        const calAddress = e.target.maticAddress.value;
        var addressPrefix = calAddress.startsWith("0x");

        if (addressPrefix === true && calAddress.length === 42) {
            const url = getCalculateMatic(calAddress);
            axios.get(url).then((result) => {
                const calculatedata = result.data;
                if (calculatedata.success === true) {
                    const currentEarned = calculatedata.received / 1000000;
                    const yourEstimatedRewards = calculatedata.estimated / 1000000;
                    const totalStaked = calculatedata.globalDelegation.toFixed(2);
                    const statkedOnAudit = calculatedata.auditDelegation.toFixed(2);
                    setBlockHeight(calculatedata.magicTxCheckpoint);
                    setTotalStaked(numberWithCommas(totalStaked));
                    setStatkedOnAudit(numberWithCommas(statkedOnAudit));
                    setTotalRewards((Math.round(currentEarned * 100) / 100).toFixed(2))
                    setEstimatedRewards((Math.round(yourEstimatedRewards * 100) / 100).toFixed(2))
                } else {
                    setNotParticipantAddress(true);
                }
            });
        } else {
            setErrorAddress(true);
        }
    };



    return (
        <div className="section-participate">
            <section className="participate-stakedrop">
                <div className="container">
                    <div className="col-lg-12">
                        {/*<p className="button-back" onClick={this.props.history.goBack}>
                            {" "}
                            <Icon viewClass="arrow-right" icon="arrow-right" /> Back to
                            Campaigns
                        </p>*/}
                        <div className="row">
                            <div className="col-lg-4 section-campaign">
                                <div className="row campaign-maintwo">
                                    <div className="col-lg-12  header-section">
                                        <h5 className="heading-participate">
                                            Matic StakeDrop Campaign
                                        </h5>
                                    </div>
                                    <div className="row body-section">
                                        <div className="col-lg-12 card-content campaign-card">
                                            <div className="card-inner">
                                                <h6>Campaign Duration</h6>
                                                <h1>76 Days</h1>
                                            </div>
                                            <Icon viewClass="social_icon_imgg" icon="participate" />
                                        </div>
                                        <div className="col-lg-12 card-content">
                                            <div className="participate-cardtwo">
                                                <h6>Tokens to distribute</h6>
                                                <h1>200,000 XPRT</h1>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 card-content">
                                            <div className="participate-cardtwo">
                                                <h6>Start</h6>
                                                <h1>
                                                    20th of January 2021 <span>Checkpoint: 9707</span>
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 card-content">
                                            <div className="participate-cardtwo end">
                                                <h6>End</h6>
                                                <h1>
                                                    16th of April 2021<span>Checkpoint: 11056</span>
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row campaign-maintwo second">
                                    <div className="col-lg-12  header-section">
                                        <h5 className="heading-participate two">
                                            Campaign Status
                                        </h5>
                                    </div>
                                    <div className="row body-section">
                                        <div className="col-lg-12 card-content">
                                            <div className="participate-cardtwo">
                                                <h6>Tokens left:</h6>
                                                <h1>{totalDistributed} XPRT</h1>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 card-content">
                                            <div className="participate-cardtwo">
                                                <h6>Time left:</h6>
                                                <h1 className="countdown">00:00:00:00</h1>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 card-content">
                                            <div className="participate-cardtwo">
                                                <h6>Total Staked:</h6>
                                                <h1>
                                                    {globalTotalStaked} MATIC{" "}
                                                    <span>
                          Total Active: {worldGlobalDelegation}
                        </span>
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 card-content">
                                            <div className="participate-cardtwo end">
                                                <h6>Total Staked on AUDIT.one:</h6>
                                                <h1>{globalAuditStaked} MATIC</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 staking-second-section">
                                <div className="col-lg-12 matic-tutorial-section">
                                    <p className="">
                                        Matic StakeDrop Tutorial:{" "}
                                        <a
                                            href="https://medium.com/persistence-blog/matic-stakedrop-tutorial-using-matic-web-wallet-how-matic-holders-can-participate-in-7f0e31df3a8c"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            How MATIC Holders Can Participate in StakeDrop?{" "}
                                        </a>
                                    </p>
                                </div>
                                <RecordXPRTAddress
                                    notParticipantAddress={notParticipantAddress}
                                />

                                <div className="col-lg-12 stakerow">
                                    <div className="col-lg-12  header-section">
                                        <h5 className="heading-participate">
                                            Calculate Your Estimated Rewards
                                        </h5>
                                    </div>
                                    <div className="body-section">
                                        <form onSubmit={handleCalculate}>
                                            <div className="inputstaking">
                                                <h5>Staking Address</h5>
                                                <input
                                                    type="text"
                                                    name="maticAddress"
                                                    id="maticAddress"
                                                    value={maticAddress}
                                                    //onChange={handleAddressChange}
                                                    placeholder="Enter Address"
                                                    required
                                                />
                                            </div>
                                            <div className="inputstaking left-align-calculate">
                                                <h5>&nbsp;</h5>
                                                <div className="btn-calculate">
                                                    <button type="submit" className="btn">
                                                        Calculate
                                                    </button>
                                                </div>
                                            </div>
                                            {errorAddress ? (
                                                <h6 className="valid-add">Enter Valid Address</h6>
                                            ) : (
                                                ""
                                            )}
                                            {notParticipantAddress ? (
                                                <h6 className="valid-add">
                                                    Not a StakeDrop participant address, please send the
                                                    magic transaction
                                                </h6>
                                            ) : (
                                                ""
                                            )}
                                        </form>

                                        <div className="">
                                            <div className="inputstaking justify-start">
                                                <h5>Start Checkpoint</h5>
                                                <h5 className="text-color">
                                                    {blockHeight}
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="row common-cards">
                                            <div className="inputstaking bottom">
                                                <h5>Total Staked</h5>
                                                <h5 className="value">
                                                    {totalStaked} MATIC
                                                </h5>
                                            </div>

                                            <div className="inputstaking bottom">
                                                <h5>Total Staked on AUDIT.one</h5>
                                                <h5 className="value">
                                                    {statkedOnAudit} MATIC
                                                </h5>
                                            </div>

                                            <div className="inputstaking bottom">
                                                <h5>Total Rewards</h5>
                                                <h5 className="value">
                                                    {totalRewards} XPRT
                                                </h5>
                                            </div>
                                            <div className="inputstaking bottom">
                                                <h5>Estimated Rewards</h5>
                                                <h5 className="value">
                                                    {estimatedRewards} XPRT
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

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

export default MaticStakedrop;
