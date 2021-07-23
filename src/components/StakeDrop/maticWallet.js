import React from 'react';
import 'react-rangeslider/lib/index.css'
import maticwallet from '../../assets/matic_icon.svg'
import frontier_wallet from '../../assets/frontier_wallet.svg'

const MaticWallets = () => {
    return (
        <div className="row">
            <a href="https://wallet.matic.network/" target="_blank" rel="noopener noreferrer" title="Trust Wallet" className="wallet-card">
                <div className="card-inner">
                    <img src={maticwallet} alt="Trust Wallet" />
                    <p>Matic Wallet</p>
                </div>
            </a>
            <a href="https://frontier.xyz/" target="_blank" rel="noopener noreferrer" title="Frontier Wallet" className="wallet-card">
                <div className="card-inner">
                    <img src={frontier_wallet} alt="Frontier Wallet" />
                    <p>Frontier Wallet</p>
                </div>
            </a>

        </div>
    );
}

export default MaticWallets;


