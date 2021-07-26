export const UNSTAKEDTOKENS = "wTOKENs";
export const STAKEDTOKENS = "pTOKENs";
export const STAKEDTOKEN = "pTOKEN";
export const ANALYTICS = "UA-199452342-1";

export const NETWORK_ID = "0x3";
export const NETWORK_NAME = "Ropsten";

const MATIC_API_URL = process.env.REACT_APP_MATIC_API_KEY;

export const getMaticStatusURL = () => `${MATIC_API_URL}/status`;
export const getCalculateMatic = (calAddress) => `${MATIC_API_URL}/delegator/${calAddress}`;

//native blockchain
export const CURRENCY = {
    solana: {
        name: "solana",
        token: "SOL",
        ustkToken: "ustkSOL",
        stkToken: "stkSOL",
        nameInCaps: "SOLANA",
        bech32Prefix: "cosmos",
        bech32Length: 38
    },
    polkadot: {
        name: "polkadot",
        token: "DOT",
        ustkToken: "ustkDOT",
        stkToken: "stkDOT",
        nameInCaps: "POLKADOT",
        bech32Prefix: "cosmos",
        bech32Length: 38
    },
    cosmos: {
        name: "cosmos",
        token: "ATOM",
        ustkToken: "pATOM",
        stkToken: "stkATOM",
        nameInCaps: "COSMOS",
        bech32Prefix: "cosmos",
        bech32Length: 38
    },
    eth2: {
        name: "eth2",
        token: "ETH2",
        ustkToken: "ustkETH2",
        stkToken: "stkETH2",
        nameInCaps: "ETH2",
        bech32Prefix: "cosmos",
        bech32Length: 38
    },
};