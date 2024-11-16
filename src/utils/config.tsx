import { ChainInfo } from "@keplr-wallet/types";

interface ExternalChainData {
  [index: string]: ChainInfo[];
}

export const ENVIRONMENT = process.env.NEXT_PUBLIC_ENV || "testnet";
export const ANALYTICS = "G-H8D8RR8PNL";
export const PSTAKE_BRIDGE_URL = "https://bridge.persistence.one/";
export const BSC_BRIDGE_URL = "https://cbridge.celer.network/56/1/PSTAKE";
export const BLAST_BRIDGE_URL = "https://cbridge.celer.network/1/81457/PSTAKE";
export const OPTIMISM_BRIDGE_URL = "https://superbridge.app/optimism";
export const SUI_BRIDGE_URL = "https://superbridge.app/optimism";
export const PSTAKE_MEDIUM_URL =
  "https://blog.pstake.finance/?utm_source=pstake_website&utm_medium=pstake&utm_campaign=pstake_liquid_staking";
export const DISCORD_URL = "https://discord.gg/2ek5rUyT8x";
export const GITHUB_URL = "https://github.com/persistenceOne/";
export const PSTAKE_AUDITS_URL =
  "https://github.com/persistenceOne/pStake-auditReports";
export const PECKSHIELD_AUDIT_REPORT =
  "https://github.com/persistenceOne/pStake-auditReports/blob/main/stkBNB/pStake_stkBNB_Smart_Contract_Audit_Peckshield%20%5B04.07.2022%5D.pdf?utm_source=pstake_BNB_website_page&utm_medium=pstake_BNB&utm_campaign=pstake_BNB_liquid_staking";
export const HALBOR_AUDIT_REPORT =
  "https://github.com/persistenceOne/pStake-auditReports/blob/main/stkBNB/pSTAKE_stkBNB_Smart_Contract_Audit_Halborn%20%5B05.08.2022%5D.pdf?utm_source=pstake_BNB_website_page&utm_medium=pstake_BNB&utm_campaign=pstake_BNB_liquid_staking";
export const PSTAKE_FORUM_URL = "https://forum.pstake.finance/";
export const PSTAKE_APP_URL = "https://app.pstake.finance/";
("https://github.com/persistenceOne/pStake-auditReports/blob/main/stkBNB/pStake_stkBNB_Smart_Contract_Audit_Peckshield%20%5B04.07.2022%5D.pdf?utm_source=pstake_website&utm_medium=pstake&utm_campaign=pstake_liquid_staking");
export const PSTAKE_CERTORA =
  "https://github.com/persistenceOne/stkBNB-contracts/tree/main/certora?utm_source=pstake_BNB_website_page&utm_medium=pstake_BNB&utm_campaign=pstake_BNB_liquid_staking";
export const PSTAKE_BLOG_ONE_URL =
  "https://blog.pstake.finance/2024/05/23/why-we-are-building-on-babylon/";
export const PSTAKE_BLOG_ONE_IMG_URL =
  "https://blog.pstake.finance/wp-content/uploads/2024/05/BTC-BABYLON-min-1160x652.jpg";
export const PSTAKE_BLOG_TWO_URL =
  "https://blog.pstake.finance/2024/05/25/the-shared-security-war-babylon-vs-eigenlayer/";
export const PSTAKE_BLOG_TWO_IMG_URL =
  "https://blog.pstake.finance/wp-content/uploads/2024/05/GOQu3iuWkAA1XMG-1160x652.jpeg";
export const PSTAKE_BLOG_THREE_URL =
  "https://blog.pstake.finance/2024/05/21/pstake-btc-liquid-staking-and-yield-thesis/";
export const PSTAKE_BLOG_THREE_IMG_URL =
  "https://blog.pstake.finance/wp-content/uploads/2024/05/PSTAKE-BTC-YIELD-THESIS01-18-17-min-1160x652.jpg";
export const PSTAKE_TWITTER_URL =
  "https://twitter.com/pStakeFinance?utm_source=pstake_website&utm_medium=pstake&utm_campaign=pstake_liquid_staking";
export const STK_BNB_TWITTER_URL = "https://twitter.com/pSTAKE_stkBNB";
export const PSTAKE_TELEGRAM_URL = "https://t.me/pstakefinancechat";
export const PSTAKE_DISCORD = "https://discord.pstake.finance/";
export const PSTAKE_YOUTUBE_URL = "https://www.youtube.com/@pstakefinance";
export const PSTAKE_REDDIT_URL = "https://www.reddit.com/r/pstake_official/";
export const PERSISTENCE_ONE_URL =
  "https://persistence.one/?utm_source=pstake_website&utm_medium=pstake&utm_campaign=pstake_liquid_staking";
export const GOV_URL = "https://forum.pstake.finance/";
export const STAKEFISH =
  "https://stake.fish/en/?utm_source=pstake_website&utm_medium=pstake&utm_campaign=pstake_liquid_staking";
export const FIGMENT =
  "https://www.figment.io/?utm_source=pstake_website&utm_medium=pstake&utm_campaign=pstake_liquid_staking";
export const EVERSTAKE =
  "https://everstake.one/?utm_source=pstake_website&utm_medium=pstake&utm_campaign=pstake_liquid_staking";
export const VALIDATOR_LEGEND =
  "https://www.bnbchain.org/en/staking/validator/bva142lu7y78yk23cdeujduy9g8gqxp7xl3wrz4ska?utm_source=pstake_BNB_website_page&utm_medium=pstake_BNB&utm_campaign=pstake_BNB_liquid_staking";
export const VALIDATOR_MATH =
  "https://mathwallet.org/en-us/?utm_source=pstake_BNB_website_page&utm_medium=pstake_BNB&utm_campaign=pstake_BNB_liquid_staking";
export const VALIDATOR_COINBASE =
  "https://www.coinbase.com/cloud?utm_source=pstake_BNB_website_page&utm_medium=pstake_BNB&utm_campaign=pstake_BNB_liquid_staking";
export const VALIDATOR_ANKR =
  "https://www.ankr.com/docs/build-blockchain/app-chain/components/validator-nodes/?utm_source=pstake_BNB_website_page&utm_medium=pstake_BNB&utm_campaign=pstake_BNB_liquid_staking#%3A%7E%3Atext=Ankr+provides+full+engineering+support%2Cor+take+over+the+reins";
export const VALIDATOR_DEFIBIT =
  "https://www.stakingrewards.com/savings/defibit/?utm_source=pstake_BNB_website_page&utm_medium=pstake_BNB&utm_campaign=pstake_BNB_liquid_staking";
export const VALIDATOR_CERTIC =
  "https://www.bnbchain.org/en/blog/bsc-validator-spotlight-certik/?utm_source=pstake_BNB_website_page&utm_medium=pstake_BNB&utm_campaign=pstake_BNB_liquid_staking";
export const VALIDATOR_FUJI =
  "https://www.bnbchain.org/en/staking/validator/bva18wgcs0k0glcmaxreweyeydu9mudtsftcxpkt4n?utm_source=pstake_BNB_website_page&utm_medium=pstake_BNB&utm_campaign=pstake_BNB_liquid_staking";
export const VALIDATOR_TRANCHES =
  "https://tranchess.com/?utm_source=pstake_BNB_website_page&utm_medium=pstake_BNB&utm_campaign=pstake_BNB_liquid_staking";
export const VALIDATOR_AVENGERS =
  "https://www.bnbchain.org/en/staking/validator/bva1s0ntnh523dc2u5ez3dcj2t34k2x7y60cue46rt?utm_source=pstake_BNB_website_page&utm_medium=pstake_BNB&utm_campaign=pstake_BNB_liquid_staking";
export const VALIDATOR_NODE_REAL =
  "https://nodereal.io/?utm_source=pstake_BNB_website_page&utm_medium=pstake_BNB&utm_campaign=pstake_BNB_liquid_staking";
export const LEARN_MORE =
  "https://blog.pstake.finance/2021/09/09/introducing-pstake/";
export const GUIDE_VIDEO_URL = "https://www.youtube.com/embed/sPHdPXcTjqA";
export const SECURITY_AUDIT_URL =
  "https://github.com/persistenceOne/pStake-auditReports";
export const STK_BNB_SECURITY_AUDIT_URL =
  "https://github.com/persistenceOne/pStake-auditReports/tree/main/stkBNB";
export const GUIDES_FAQ_URL = "https://blog.pstake.finance/faqs/";
export const STK_FAQ_URL = "https://blog.pstake.finance/stkbnb-faqs/";
export const GUIDES_URL = "https://blog.pstake.finance/category/guides/";
export const STKATOM_BLOG_URL =
  "https://blog.pstake.finance/category/product/stkatom/";
export const DOCS_URL = "https://docs.pstake.finance";
export const STK_BNB_DOCS_URL =
  "https://docs.pstake.finance/stkBNB_Staking_Overview/";
export const SNANPSHOT_URL = "https://snapshot.org/#/pstakefinance.eth";
export const CREW3_URL = "https://pstake.crew3.xyz/questboard";
export const BNB_URL = "https://bnb.pstake.finance/";
export const FORTA_WEB_URL =
  "https://app.forta.network/agents/pstake?utm_source=pstake_BNB_website_page&utm_medium=pstake_BNB&utm_campaign=pstake_BNB_liquid_staking";
export const IMMUNEFI_WEB_URL =
  "https://immunefi.com/bounty/pstake/?utm_source=pstake_BNB_website_page&utm_medium=pstake_BNB&utm_campaign=pstake_BNB_liquid_staking";
export const IMMUNEFI_STK_ATOM_URL =
  "https://immunefi.com/bounty/pstakeoncosmos/";
export const COSMOS_URL =
  "https://app.pstake.finance/cosmos?token=ATOM&chain=cosmos/";
export const OSMOSIS_URL =
  "https://app.pstake.finance/cosmos?token=OSMO&chain=osmosis";
export const pstake_cosmos_twitter_url =
  "https://twitter.com/pstake_cosmos?s=11&t=E_q2T3rK9Bwiywy_YCvo5A";
export const STK_ODMO_TWITTER_URL = "https://twitter.com/pStakeFinance";
export const STK_ATOM_TWITTER_URL =
  "https://twitter.com/pstake_cosmos?s=11&t=E_q2T3rK9Bwiywy_YCvo5A";
export const STK_BTC_BLOG_ONE_URL =
  "https://blog.pstake.finance/2024/07/11/introducing-bitcoin-liquid-staking-on-babylon-with-pstake/";
export const STK_BTC_BLOG_ONE_IMAGE_URL =
  "https://blog.pstake.finance/wp-content/uploads/2024/07/bitcoin-liquid-staking-09-09-min-2048x1152.jpg";
export const STK_BTC_BLOG_TWO_URL =
  "https://blog.pstake.finance/2024/06/25/pstake-finance-a-new-identity-and-roadmap-for-bitcoin-yields/";
export const STK_BTC_BLOG_TWO_IMAGE_URL =
  "https://blog.pstake.finance/wp-content/uploads/2024/06/New-logo-blg-01-01-min-2048x1152.jpg";
export const STK_BTC_BLOG_THREE_URL =
  "https://www.youtube.com/watch?v=8zhejOADKTY";
export const STK_BTC_BLOG_THREE_IMAGE_URL =
  "https://i3.ytimg.com/vi/8zhejOADKTY/maxresdefault.jpg";
export const STK_BTC_BLOG_FOUR_URL =
  "https://blog.pstake.finance/2024/05/23/why-we-are-building-on-babylon/";
export const STK_BTC_BLOG_FOUR_IMAGE_URL =
  "https://blog.pstake.finance/wp-content/uploads/2024/05/BTC-BABYLON-min-1160x652.jpg";
export const STK_BTC_BLOG_FIVE_URL =
  "https://blog.pstake.finance/2024/05/29/the-genesis-of-yield-changing-bitcoins-value-proposition/";
export const STK_BTC_BLOG_FIVE_IMAGE_URL =
  "https://blog.pstake.finance/wp-content/uploads/2024/05/genesis-of-yield-min-1160x652.jpg";
export const STK_BTC_BLOG_SIX_URL =
  "https://blog.pstake.finance/2024/05/28/speicherx-talks-bitcoin-exploring-btc-beyond-a-store-of-value/";
export const STK_BTC_BLOG_SIX_IMAGE_URL =
  "https://blog.pstake.finance/wp-content/uploads/2024/05/image1-1160x653.jpg";
export const STK_BTC_BLOG_SEVEN_URL =
  "https://blog.pstake.finance/2024/05/25/the-shared-security-war-babylon-vs-eigenlayer/";
export const STK_BTC_BLOG_SEVEN_IMAGE_URL =
  "https://blog.pstake.finance/wp-content/uploads/2024/05/GOQu3iuWkAA1XMG-1160x652.jpeg";
export const STK_BTC_BLOG_EIGHT_URL =
  "https://blog.pstake.finance/2024/04/24/bitcoin-capital-efficiency-with-liquid-staking/";
export const STK_BTC_BLOG_EIGHT_IMAGE_URL =
  "https://blog.pstake.finance/wp-content/uploads/2024/04/Screenshot-2024-04-24-at-19.15.31-1-1160x646.png";
export const STK_BTC_BLOG_NINE_URL =
  "https://cointelegraph.com/news/bitcoins-op-cat-proposal-could-transform-the-bitcoin-blockchain";
export const STK_BTC_BLOG_NINE_IMAGE_URL =
  "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/uploads/2024-05/d851b86b-668a-4dd7-9076-053ee1fb88a2.jpg";
export const STK_BTC_BLOG_TEN_URL =
  "https://crypto.news/hitting-the-icebergs-tip-the-untapped-potential-of-bitcoin-defi-opinion/";
export const STK_BTC_BLOG_TEN_IMAGE_URL =
  "https://crypto.news/app/uploads/2024/05/crypto-news-Hitting-the-icebergs-tip-option01.webp";
export const STK_BTC_BLOG_11_URL =
  "https://blog.pstake.finance/2024/05/21/pstake-btc-liquid-staking-and-yield-thesis/";
export const STK_BTC_BLOG_11_IMAGE_URL =
  "https://blog.pstake.finance/wp-content/uploads/2024/05/PSTAKE-BTC-YIELD-THESIS01-18-17-min-1160x652.jpg";
export const STK_BTC_BLOG_12_URL =
  "https://blog.pstake.finance/2024/05/15/pstake-finance-to-launch-btc-liquid-staking-in-collaboration-with-babylon/";
export const STK_BTC_BLOG_12_IMAGE_URL =
  "https://blog.pstake.finance/wp-content/uploads/2024/05/BTC@1.5x-min-1160x650.png";

export const BTC_SERIES_BLOG_ONE_URL =
  "https://blog.pstake.finance/2024/05/20/bitcoin-101-series-1-what-is-bitcoin/";
export const BTC_SERIES_BLOG_ONE_IMAGE_URL =
  "https://blog.pstake.finance/wp-content/uploads/2024/05/Bitcoin-101-Series-1-1160x652.jpg";

export const BTC_SERIES_BLOG_TWO_URL =
  "https://blog.pstake.finance/2024/05/26/bitcoin-101-series-2-what-is-proof-of-work-pow/";
export const BTC_SERIES_BLOG_TWO_IMAGE_URL =
  "https://blog.pstake.finance/wp-content/uploads/2024/05/Bitcoin101-2-1160x653.jpg";

export const BTC_SERIES_BLOG_THREE_URL =
  "https://blog.pstake.finance/2024/05/28/bitcoin-101-series-3-what-is-blockchain/";
export const BTC_SERIES_BLOG_THREE_IMAGE_URL =
  "https://blog.pstake.finance/wp-content/uploads/2024/05/btc-101-3-1160x653.jpg";

export const BTC_SERIES_BLOG_FOUR_URL =
  "https://blog.pstake.finance/2024/06/04/what-are-bitcoin-layer-2s/";
export const BTC_SERIES_BLOG_FOUR_IMAGE_URL =
  "https://blog.pstake.finance/wp-content/uploads/2024/06/Bitcoin-101-4-1160x653.jpg";

export const BTC_SERIES_BLOG_FIVE_URL =
  "https://blog.pstake.finance/2024/06/20/what-is-bitcoin-liquid-staking/";
export const BTC_SERIES_BLOG_FIVE_IMAGE_URL =
  "https://blog.pstake.finance/wp-content/uploads/2024/06/image2-1160x653.jpg";

export const STK_ATOM_SECURITY_AUDIT_URL =
  "https://github.com/persistenceOne/pStake-auditReports/tree/main/stkATOM";
export const STK_ATOM_DOCS_URL = "https://blog.pstake.finance";
export const STK_ATOM_FAQ_URL = "#stkAtomFaqs";
export const STK_OSMO_FAQ_URL = "#stkOsmoFaqs";
export const STK_OSMO_SECURITY_AUDIT_URL =
  "https://github.com/persistenceOne/pStake-auditReports";
export const ATOM_URL =
  "https://app.pstake.finance/cosmos?token=ATOM&chain=cosmos/";
export const OSMO_URL =
  "https://app.pstake.finance/cosmos?token=OSMO&chain=osmosis";
export const DYDX = "https://app.pstake.finance/cosmos";
export const ETH_URL = "https://testnet.app.pstake.finance/eth";
export const STK_ETH_TWITTER = "https://twitter.com/pSTAKE_ETH";
export const STK_ETH_DOCS = "https://blog.pstake.finance/category/stketh/";
export const COSMOS_IMMUNEFI = "https://immunefi.com/bounty/pstakeoncosmos/";
export const BNB_IMMUNEFI = "https://immunefi.com/bounty/pstake/";
export const FORT_MONITERING = "https://app.forta.network/agents/pstake";
export const COSMOS_OAK_SECURITY =
  "https://github.com/persistenceOne/pStake-auditReports/blob/main/stkATOM/2023-02-17%20Audit%20Report%20-%20pSTAKE%20Native%20v1.0.pdf";
export const COSMOS_NOTIANAL =
  "https://github.com/persistenceOne/pStake-auditReports/blob/main/stkATOM/Notional%20-%20Persistence%20Security%20Audit.pdf";
export const HALBORN_COSMOS_STAKING =
  "https://github.com/persistenceOne/pStake-auditReports/blob/main/stkATOM/Persistence_Liquid_Staking_Module_Cosmos_Security_Assessment_Report_Halborn_Final.pdf";
export const HALBORN_COSMOS_MODULE =
  "https://github.com/persistenceOne/pStake-auditReports/blob/main/stkATOM/Persistence_stkATOM_Cosmos_Security_Audit_Report_Halborn_Final.pdf";
export const HALBORN_BNB_MODULE =
  "https://github.com/persistenceOne/pStake-auditReports/blob/main/stkBNB/pSTAKE_stkBNB_Smart_Contract_Audit_Halborn%20%5B05.08.2022%5D.pdf";
export const PECKSHIELD_BNB =
  "https://github.com/persistenceOne/pStake-auditReports/blob/main/stkBNB/pStake_stkBNB_Smart_Contract_Audit_Peckshield%20%5B04.07.2022%5D.pdf";
export const TRAIL_OF_BITS =
  "https://github.com/persistenceOne/pStake-auditReports/blob/main/pStake%20Smart%20Contracts%20%2B%20Bridge%20Audit%20-%20Trail%20of%20Bits%20%5B26.04.22%5D.pdf";
export const CONSENSYS_DILLIGENCE =
  "https://consensys.io/diligence/audits/2021/08/pstake-finance/";
export const PECKSHIELD_ETHEREUM =
  "https://github.com/persistenceOne/pStake-auditReports/blob/main/pSTAKE%20Smart%20Contract%20Audit%20-%20PeckShield%20%5B09.07.2021%5D.pdf";
export const SOLIDIFIED =
  "https://github.com/persistenceOne/pStake-auditReports/blob/main/pSTAKE%20Smart%20Contract%20Audit%20-%20Solidified%20%5B02.08.2021%5D.pdf";

export const API_URL =
  ENVIRONMENT === "devnet"
    ? "https://devnet-btc-orchestrator.tail78aed.ts.net"
    : ENVIRONMENT === "mainnet"
    ? "https://byp-btc-orchestrator-mainnet.tail78aed.ts.net"
    : "https://testnet-byp-btc-orchestrator.tail78aed.ts.net";

export const BABYLON_RUSH_END_DATE = "2024-08-21T23:59:59";

export const ChainExternalInfo: any = {
  Testnet: {
    persistence: {
      chainID: "test-core-2",
      explorer: "https://testnet.mintscan.io/persistence-testnet",
    },
    cosmos: {
      chainID: "theta-testnet-001",
      explorer: "https://testnet.mintscan.io/cosmoshub-testnet",
    },
    osmosis: {
      chainID: "osmo-test-5",
      explorer: "https://testnet.mintscan.io/osmosis-testnet",
    },
    dydx: {
      chainID: "tytx-test-1",
      explorer: "https://testnet.mintscan.io/dydx-testnet",
    },
  },
  Mainnet: {
    persistence: {
      chainID: "core-1",
      explorer: "https://mintscan.io/persistence",
    },
    cosmos: {
      chainID: "cosmoshub-4",
      explorer: "https://mintscan.io/cosmos",
    },
    osmosis: {
      chainID: "osmosis-1",
      explorer: "https://mintscan.io/osmosis",
    },
    dydx: {
      chainID: "dydx-mainnet-1",
      explorer: "https://mintscan.io/dydx",
    },
  },
};

export const ExternalChains: ExternalChainData = {
  Devnet: [
    {
      rpc: "https://rpc.devnet.persistence.pstake.finance",
      rest: "https://rest.devnet.persistence.pstake.finance",
      chainId: "pstaked-1",
      chainName: "pStake Persistence Devnet",
      stakeCurrency: {
        coinDenom: "XPRT",
        coinMinimalDenom: "uxprt",
        coinDecimals: 6,
        coinGeckoId: "persistence",
      },
      bip44: {
        coinType: 118,
      },
      currencies: [
        {
          coinDenom: "XPRT",
          coinMinimalDenom: "uxprt",
          coinDecimals: 6,
          coinGeckoId: "persistence",
        },
        {
          coinDenom: "STKATOM",
          coinMinimalDenom: "stk/uatom",
          coinDecimals: 6,
          coinGeckoId: "persistence",
        },
      ],
      feeCurrencies: [
        {
          coinDenom: "XPRT",
          coinMinimalDenom: "uxprt",
          coinDecimals: 6,
          coinGeckoId: "persistence",
        },
      ],
      bech32Config: {
        bech32PrefixAccAddr: "persistence",
        bech32PrefixAccPub: "persistencepub",
        bech32PrefixValAddr: "persistencevaloper",
        bech32PrefixValPub: "persistencevaloperpub",
        bech32PrefixConsAddr: "persistencevalcons",
        bech32PrefixConsPub: "persistencevalconspub",
      },
    },
    {
      rpc: "https://rpc.devnet.cosmos.pstake.finance",
      rest: "https://rest.devnet.cosmos.pstake.finance",
      chainId: "gaiad-1",
      chainName: "pStake Cosmos Devnet",
      stakeCurrency: {
        coinDenom: "ATOM",
        coinMinimalDenom: "uatom",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
      },
      bip44: {
        coinType: 118,
      },
      currencies: [
        {
          coinDenom: "ATOM",
          coinMinimalDenom: "uatom",
          coinDecimals: 6,
          coinGeckoId: "cosmos",
        },
      ],
      feeCurrencies: [
        {
          coinDenom: "ATOM",
          coinMinimalDenom: "uatom",
          coinDecimals: 6,
          coinGeckoId: "cosmos",
        },
      ],
      bech32Config: {
        bech32PrefixAccAddr: "cosmos",
        bech32PrefixAccPub: "cosmospub",
        bech32PrefixValAddr: "cosmosvaloper",
        bech32PrefixValPub: "cosmosvaloperpub",
        bech32PrefixConsAddr: "cosmosvalcons",
        bech32PrefixConsPub: "persistencevalconspub",
      },
    },
  ],
  Testnet: [
    {
      rpc: "https://rpc.testnet2.persistence.one",
      rest: "https://rest.testnet2.persistence.one/",
      chainId: "test-core-2",
      chainName: "Persistence test-net",
      stakeCurrency: {
        coinDenom: "XPRT",
        coinMinimalDenom: "uxprt",
        coinDecimals: 6,
        coinGeckoId: "persistence",
      },
      bip44: {
        coinType: 118,
      },
      currencies: [
        {
          coinDenom: "XPRT",
          coinMinimalDenom: "uxprt",
          coinDecimals: 6,
          coinGeckoId: "persistence",
        },
        {
          coinDenom: "STKATOM",
          coinMinimalDenom: "stk/uatom",
          coinDecimals: 6,
          coinGeckoId: "persistence",
        },
      ],
      feeCurrencies: [
        {
          coinDenom: "XPRT",
          coinMinimalDenom: "uxprt",
          coinDecimals: 6,
          coinGeckoId: "persistence",
        },
      ],
      bech32Config: {
        bech32PrefixAccAddr: "persistence",
        bech32PrefixAccPub: "persistencepub",
        bech32PrefixValAddr: "persistencevaloper",
        bech32PrefixValPub: "persistencevaloperpub",
        bech32PrefixConsAddr: "persistencevalcons",
        bech32PrefixConsPub: "persistencevalconspub",
      },
    },
    {
      rpc: "https://rpc.sentry-02.theta-testnet.polypore.xyz",
      rest: "https://rest.sentry-02.theta-testnet.polypore.xyz",
      chainId: "theta-testnet-001",
      chainName: "pStake Cosmos Testnet",
      stakeCurrency: {
        coinDenom: "ATOM",
        coinMinimalDenom: "uatom",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
      },
      bip44: {
        coinType: 118,
      },
      currencies: [
        {
          coinDenom: "ATOM",
          coinMinimalDenom: "uatom",
          coinDecimals: 6,
          coinGeckoId: "cosmos",
        },
      ],
      feeCurrencies: [
        {
          coinDenom: "ATOM",
          coinMinimalDenom: "uatom",
          coinDecimals: 6,
          coinGeckoId: "cosmos",
        },
      ],
      bech32Config: {
        bech32PrefixAccAddr: "cosmos",
        bech32PrefixAccPub: "cosmospub",
        bech32PrefixValAddr: "cosmosvaloper",
        bech32PrefixValPub: "cosmosvaloperpub",
        bech32PrefixConsAddr: "cosmosvalcons",
        bech32PrefixConsPub: "persistencevalconspub",
      },
    },
    {
      rpc: "https://dydx-testnet-rpc.publicnode.com",
      rest: "https://dydx-testnet-rest.publicnode.com",
      chainId: "dydx-testnet-4",
      chainName: "Dydx-Test",
      stakeCurrency: {
        coinDenom: "DV4TNT",
        coinDecimals: 18,
        coinMinimalDenom: "adv4tnt",
      },
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "dydx",
        bech32PrefixAccPub: "dydxpub",
        bech32PrefixValAddr: "dydxvaloper",
        bech32PrefixValPub: "dydxvaloperpub",
        bech32PrefixConsAddr: "dydxvalcons",
        bech32PrefixConsPub: "dydxvalconspub",
      },
      currencies: [
        {
          coinDenom: "DV4TNT",
          coinDecimals: 18,
          coinMinimalDenom: "adv4tnt",
        },
      ],
      feeCurrencies: [
        {
          coinDenom: "DV4TNT",
          coinDecimals: 18,
          coinMinimalDenom: "adv4tnt",
        },
      ],
      features: [],
    },
    {
      rpc: "https://rpc.elgafar-1.stargaze-apis.com",
      rest: "https://rest.elgafar-1.stargaze-apis.com",
      chainId: "elgafar-1",
      chainName: "Stargaze Testnet",
      stakeCurrency: {
        coinDenom: "STARS",
        coinMinimalDenom: "ustars",
        coinDecimals: 6,
      },
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "stars",
        bech32PrefixAccPub: "starspub",
        bech32PrefixValAddr: "starsvaloper",
        bech32PrefixValPub: "starsvaloperpub",
        bech32PrefixConsAddr: "starsvalcons",
        bech32PrefixConsPub: "starsvalconspub",
      },
      currencies: [
        {
          coinDenom: "STARS",
          coinMinimalDenom: "ustars",
          coinDecimals: 6,
          coinGeckoId: "stars",
        },
      ],
      feeCurrencies: [
        {
          coinDenom: "STARS",
          coinMinimalDenom: "ustars",
          coinDecimals: 6,
          coinGeckoId: "stars",
        },
      ],
      features: [],
    },
  ],
  Mainnet: [
    {
      rpc: "https://cosmos-rpc.polkachu.com/",
      rest: "https://cosmos-rest.staketab.org/",
      chainId: ChainExternalInfo["Mainnet"].cosmos.chainID,
      chainName: "Cosmos Hub",
      stakeCurrency: {
        coinDenom: "ATOM",
        coinMinimalDenom: "uatom",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
      },
      bip44: {
        coinType: 118,
      },
      currencies: [
        {
          coinDenom: "ATOM",
          coinMinimalDenom: "uatom",
          coinDecimals: 6,
          coinGeckoId: "cosmos",
        },
      ],
      feeCurrencies: [
        {
          coinDenom: "ATOM",
          coinMinimalDenom: "uatom",
          coinDecimals: 6,
          coinGeckoId: "cosmos",
        },
      ],
      bech32Config: {
        bech32PrefixAccAddr: "cosmos",
        bech32PrefixAccPub: "cosmospub",
        bech32PrefixValAddr: "cosmosvaloper",
        bech32PrefixValPub: "cosmosvaloperpub",
        bech32PrefixConsAddr: "cosmosvalcons",
        bech32PrefixConsPub: "persistencevalconspub",
      },
    },
    {
      rpc: "https://rpc.core.persistence.one/",
      rest: "https://rest.core.persistence.one/",
      chainId: ChainExternalInfo["Mainnet"].persistence.chainID,
      chainName: "Persistence",
      stakeCurrency: {
        coinDenom: "XPRT",
        coinMinimalDenom: "uxprt",
        coinDecimals: 6,
        coinGeckoId: "persistence",
      },
      bip44: {
        coinType: 750,
      },
      currencies: [
        {
          coinDenom: "XPRT",
          coinMinimalDenom: "uxprt",
          coinDecimals: 6,
          coinGeckoId: "persistence",
        },
        {
          coinDenom: "STKATOM",
          coinMinimalDenom: "stk/uatom",
          coinDecimals: 6,
          coinGeckoId: "persistence",
        },
        {
          coinDenom: "STKOSMO",
          coinMinimalDenom: "stk/uosmo",
          coinDecimals: 6,
          coinGeckoId: "stk/uosmo",
        },
      ],
      feeCurrencies: [
        {
          coinDenom: "XPRT",
          coinMinimalDenom: "uxprt",
          coinDecimals: 6,
          coinGeckoId: "persistence",
        },
      ],
      bech32Config: {
        bech32PrefixAccAddr: "persistence",
        bech32PrefixAccPub: "persistencepub",
        bech32PrefixValAddr: "persistencevaloper",
        bech32PrefixValPub: "persistencevaloperpub",
        bech32PrefixConsAddr: "persistencevalcons",
        bech32PrefixConsPub: "persistencevalconspub",
      },
    },
    {
      rpc: "https://osmosis-rpc.polkachu.com",
      rest: "https://osmosis-api.polkachu.com",
      chainId: ChainExternalInfo["Mainnet"].osmosis.chainID,
      chainName: "Osmosis",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "osmo",
        bech32PrefixAccPub: "osmopub",
        bech32PrefixValAddr: "osmovaloper",
        bech32PrefixValPub: "osmovaloperpub",
        bech32PrefixConsAddr: "osmovalcons",
        bech32PrefixConsPub: "osmovalconspub",
      },
      currencies: [
        {
          coinDenom: "OSMO",
          coinMinimalDenom: "uosmo",
          coinDecimals: 6,
          coinGeckoId: "uosmo",
        },
      ],
      feeCurrencies: [
        {
          coinDenom: "OSMO",
          coinMinimalDenom: "uosmo",
          coinDecimals: 6,
          coinGeckoId: "uosmo",
        },
      ],
      stakeCurrency: {
        coinDenom: "OSMO",
        coinMinimalDenom: "uosmo",
        coinDecimals: 6,
        coinGeckoId: "uosmo",
      },
    },
    {
      rpc: "https://dydx-dao-rpc.polkachu.com",
      rest: "https://dydx-dao-api.polkachu.com",
      chainId: "dydx-mainnet-1",
      chainName: "dYdX",
      stakeCurrency: {
        coinDenom: "DYDX",
        coinDecimals: 18,
        coinMinimalDenom: "adydx",
      },
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "dydx",
        bech32PrefixAccPub: "dydxpub",
        bech32PrefixValAddr: "dydxvaloper",
        bech32PrefixValPub: "dydxvaloperpub",
        bech32PrefixConsAddr: "dydxvalcons",
        bech32PrefixConsPub: "dydxvalconspub",
      },
      currencies: [
        {
          coinDenom: "DYDX",
          coinDecimals: 18,
          coinMinimalDenom: "adydx",
        },
      ],
      feeCurrencies: [
        {
          coinDenom: "DYDX",
          coinDecimals: 18,
          coinMinimalDenom: "adydx",
        },
      ],
      features: [],
    },
    {
      rpc: "https://rpc.stargaze-apis.com",
      rest: "https://rest.stargaze-apis.com",
      chainId: "stargaze-1",
      chainName: "Stargaze",
      stakeCurrency: {
        coinDenom: "STARS",
        coinMinimalDenom: "ustars",
        coinDecimals: 6,
      },
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "stars",
        bech32PrefixAccPub: "starspub",
        bech32PrefixValAddr: "starsvaloper",
        bech32PrefixValPub: "starsvaloperpub",
        bech32PrefixConsAddr: "starsvalcons",
        bech32PrefixConsPub: "starsvalconspub",
      },
      currencies: [
        {
          coinDenom: "STARS",
          coinMinimalDenom: "ustars",
          coinDecimals: 6,
          coinGeckoId: "stars",
        },
      ],
      feeCurrencies: [
        {
          coinDenom: "STARS",
          coinMinimalDenom: "ustars",
          coinDecimals: 6,
          coinGeckoId: "stars",
        },
      ],
      features: [],
    },
    {
      rpc: "https://agoric-rpc.polkachu.com",
      rest: "https://agoric-api.polkachu.com",
      chainId: "agoric-3",
      chainName: "Agoric",
      stakeCurrency: {
        coinDenom: "BLD",
        coinMinimalDenom: "ubld",
        coinDecimals: 6,
      },
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "agoric",
        bech32PrefixAccPub: "agoricpub",
        bech32PrefixValAddr: "agoricvaloper",
        bech32PrefixValPub: "agoricvaloperpub",
        bech32PrefixConsAddr: "agoricvalcons",
        bech32PrefixConsPub: "agoricvalconspub",
      },
      currencies: [
        {
          coinDenom: "BLD",
          coinMinimalDenom: "ubld",
          coinDecimals: 6,
        },
      ],
      feeCurrencies: [
        {
          coinDenom: "BLD",
          coinMinimalDenom: "ubld",
          coinDecimals: 6,
        },
      ],
      features: [],
    },
    {
      rpc: "https://chihuahua-rpc.polkachu.com",
      rest: "https://chihuahua-api.polkachu.com",
      chainId: "chihuahua-1",
      chainName: "Chihuahua",
      stakeCurrency: {
        coinDenom: "HUAHUA",
        coinMinimalDenom: "uhuahua",
        coinDecimals: 6,
      },
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "chihuahua",
        bech32PrefixAccPub: "chihuahuapub",
        bech32PrefixValAddr: "chihuahuavaloper",
        bech32PrefixValPub: "chihuahuavaloperpub",
        bech32PrefixConsAddr: "chihuahuavalcons",
        bech32PrefixConsPub: "chihuahuavalconspub",
      },
      currencies: [
        {
          coinDenom: "HUAHUA",
          coinMinimalDenom: "uhuahua",
          coinDecimals: 6,
        },
      ],
      feeCurrencies: [
        {
          coinDenom: "HUAHUA",
          coinMinimalDenom: "uhuahua",
          coinDecimals: 6,
        },
      ],
      features: [],
    },
  ],
};
