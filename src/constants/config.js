export const UNSTAKEDTOKENS = "wTOKENs";
export const STAKEDTOKENS = "pTOKENs";
export const STAKEDTOKEN = "pTOKEN";
export const ANALYTICS = "UA-199452342-1";

export const NETWORK_ID = "0x3";
export const NETWORK_NAME = "Ropsten";

const MATIC_API_URL = process.env.REACT_APP_MATIC_API_KEY;

export const getMaticStatusURL = () => `${MATIC_API_URL}/status`;
export const getCalculateMatic = (calAddress) => `${MATIC_API_URL}/delegator/${calAddress}`;
export const PSTAKE_MEDIUM_URL = "https://pstake.medium.com/";
export const PSTAKE_AIRDROP_URL = "https://airdrop.pstake.finance";
export const PSTAKE_DOCS_URL = "https://docs.pstake.finance";
export const PSTAKE_FORUM_URL = "https://forum.pstake.finance/";
export const PSTAKE_RAISE_A_TICKET_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe6oYvc2ffDtbnTbfrMYtkUG9vKcyzVoLxplFtF0XxNNjbGQg/viewform";
export const PSTAKE_APP_URL = "https://app.pstake.finance/";
export const PSTAKE_WEB_URL = "https://pstake.finance/";
export const PSTAKE_MATIC_WALLET_URL = "https://wallet.matic.network/";
export const PSTAKE_FRONTIER_URL = "https://frontier.xyz/";
export const PSTAKE_BLOG_ONE_URL = "https://medium.com/@pstakefinance/pstake-mainnet-launch-beta-releasing-with-cosmos-atom-support-on-july-12th-d9a69d9fb6e5";
export const PSTAKE_BLOG_ONE_IMG_URL = "https://miro.medium.com/max/1400/1*LJLKde50a10ZCzQuVzZgpw.png";
export const PSTAKE_BLOG_TWO_URL = "https://medium.com/@pstakefinance/pstake-alpha-release-bug-bounty-full-details-837b52fcdee5";
export const PSTAKE_BLOG_TWO_IMG_URL = "https://miro.medium.com/max/2880/1*CkXNjocOSl7i2HeUEpcFwA.png";
export const PSTAKE_BLOG_THREE_URL = "https://medium.com/@pstakefinance/introducing-pstake-unlocking-liquidity-of-staked-assets-c704738ab37f";
export const PSTAKE_BLOG_THREE_IMG_URL = "https://miro.medium.com/max/1440/1*mz3Ee2H4quxAOl7VQ6IgSQ.gif";
export const PSTAKE_TWITTER_URL = "https://twitter.com/pStakeFinance";
export const PSTAKE_TELEGRAM_URL = "https://t.me/PersistenceOneChat";
export const PSTAKE_YOUTUBE_URL = "https://www.youtube.com/channel/UC5wqI1ZRdkCjWWVOCQdhxLQ/featured";
export const PSTAKE_REDDIT_URL = "https://www.reddit.com/r/PersistenceOne/";
export const PERSISTENCE_ONE_URL = "https://persistence.one/";
export const CHORME_URL = "https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DDesktop&hl=en";
export const FIREFOX_URL = "https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox";
export const SAFARI_URL = "https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac";
export const IE_URL = "https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies";
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