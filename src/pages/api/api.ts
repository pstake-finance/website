import Axios from "axios";
import axios from "axios";
import {
  decimalize,
  decimalizeRaw,
  satsToBtc,
  sdkInstance,
} from "../../utils/helpers";
import { CRESCENT_STK_ATOM_DENOM, TVL } from "../../utils/config";
import { StkBNBWebSDK } from "@persistenceone/stkbnb-web-sdk";
import { SecretNetworkClient } from "secretjs";

export const OSMOSIS_POOL_URL = "https://api-osmosis.imperator.co/pools/v2/886";
export const OSMOSIS_POOL_APR_URL = "https://api.osmosis.zone/apr/v2/886";
export const APY_API = "https://api.persistence.one/pstake/stkatom/apy";
export const STK_OSMO_APY_API =
  "https://api.persistence.one/pstake/stkosmo/apy";
export const STK_STARS_APY_API =
  "https://api.persistence.one/pstake/stkstars/apy";
export const STK_DYDX_APY_API =
  "https://api.persistence.one/pstake/stkdydx/apy";
export const STK_ATOM_TVL_URL =
  "https://api.persistence.one/pstake/stkatom/atom_tvu";
export const STK_OSMO_TVL_API =
  "https://api.persistence.one/pstake/stkosmo/osmo_tvu";
export const STK_STAR_TVL_API =
  "https://api.persistence.one/pstake/stkstars/stars_tvu";
export const STK_DYDX_TVL_API =
  "https://api.persistence.one/pstake/stkdydx/dydx_tvu";
export const STK_XPRT_APY_API =
  "https://api.persistence.one/pstake/stkxprt/apy";
export const STK_BLD_APY_API =
  "https://staging.api.persistence.one/pstake/stkbld/apy";
export const STK_HUAHUA_APY_API =
  "https://staging.api.persistence.one/pstake/stkhuahua/apy";
export const STK_XPRT_TVL_API =
  "https://staging.api.persistence.one/pstake/stkxprt/xprt_tvu";
export const STK_BLD_TVL_API =
  "https://staging.api.persistence.one/pstake/stkbld/bld_tvu";
export const STK_HUAHUA_TVL_API =
  "https://staging.api.persistence.one/pstake/stkhuahua/huahua_tvu";
export const CRESCENT_POOL_URL = "https://apigw-v3.crescent.network/pool/live";
export const DEXTER_POOL_URL = "https://api.core-1.dexter.zone/v1/graphql";
export const UMEE_URL =
  "https://testnet-client-bff-ocstrhuppq-uc.a.run.app/convexity/assets/all";
export const SHADE_URL =
  "https://na36v10ce3.execute-api.us-east-1.amazonaws.com/API-mainnet-STAGE/shadeswap/pairs";
export const SHADE_LCD = "https://lcd.secret.express";

export const getTokenPrices = async () => {
  let data = {
    BNB: 0,
    ATOM: 0,
    OSMO: 0,
    DYDX: 0,
    STARS: 0,
    XPRT: 0,
    BLD: 0,
    HUAHUA: 0,
    BTC: 0,
  };
  try {
    const response = await fetch(`/api/prices`);
    const pricesResponse = await response.json();
    data.BNB = Number(pricesResponse.data["binancecoin"].usd);
    data.ATOM = Number(pricesResponse.data["cosmos"].usd);
    data.OSMO = Number(pricesResponse.data["osmosis"].usd);
    data.DYDX = Number(pricesResponse.data["dydx-chain"].usd);
    data.STARS = Number(pricesResponse.data["stargaze"].usd);
    data.XPRT = Number(pricesResponse.data["persistence"].usd);
    data.HUAHUA = Number(pricesResponse.data["chihuahua-token"].usd);
    data.BTC = Number(pricesResponse.data["bitcoin"].usd);
    return data;
  } catch (e) {
    return data;
  }
};

export const fetchOsmosisPoolInfo = async () => {
  try {
    const responses = await Axios.all([
      Axios.get(OSMOSIS_POOL_URL),
      Axios.get(OSMOSIS_POOL_APR_URL),
    ]);
    const responseOne = responses[0];
    const responseTwo = responses[1];

    const osmoInfo = {
      apy: 0,
      tvl: 0,
    };

    if (responseTwo && responseTwo.data) {
      osmoInfo.apy = Math.round(
        responseTwo.data[0].apr_list[0].apr_14d +
          responseTwo.data[0].apr_list[1].apr_14d
      );
    } else {
      osmoInfo.apy = 0;
    }
    if (responseOne && responseOne.data) {
      osmoInfo.tvl = Math.round(responseOne.data[0].liquidity);
    } else {
      osmoInfo.tvl = 0;
    }
    return osmoInfo;
  } catch (e) {
    return { tvl: 0, apy: 0 };
  }
};

export const fetchCrescentPoolInfo = async () => {
  try {
    const res = await Axios.get(CRESCENT_POOL_URL);
    if (res && res.data) {
      const response = res.data.data;
      let crescentInfo = response.find(
        (item: any) => item!.Reserved[1]?.denom === CRESCENT_STK_ATOM_DENOM
      );
      const atomTvl =
        Number(crescentInfo.Reserved[0].amount) *
        crescentInfo.Reserved[0].priceOracle;
      const stkAtomTvl =
        Number(crescentInfo.Reserved[1].amount) *
        crescentInfo.Reserved[1].priceOracle;
      return {
        tvl: Number(decimalize(atomTvl + stkAtomTvl)).toFixed(2),
        apy: Number(crescentInfo?.apr).toFixed(2),
      };
    }
    return { tvl: 0, apy: 0 };
  } catch (e) {
    return { tvl: 0, apy: 0 };
  }
};

export const fetchDexterPoolInfo = async () => {
  try {
    const res = await fetch(DEXTER_POOL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `{
            pool_weekly_aggregate_with_apr(where: {pool_id: {_eq: 1}}) {
              pool_id
              total_swap_fee
              current_liquidity_usd
              total_volume
              apr
            }
            pool_current_incentive_apr(where: {pool_id: {_eq: 1}}) {
               incentive_apr
               pool_id
            }
          }`,
      }),
    });
    const responseJson = await res.json();
    if (responseJson && responseJson.data) {
      const poolAggregate = responseJson.data.pool_weekly_aggregate_with_apr[0];
      const poolIncentiveAprList =
        responseJson.data.pool_current_incentive_apr?.filter((item: any) => {
          return item.pool_id === 1;
        });
      let poolIncentiveApr = 0;
      if (poolIncentiveAprList && poolIncentiveAprList.length) {
        poolIncentiveAprList.forEach((item: any) => {
          poolIncentiveApr += item.incentive_apr;
        });
      }
      return {
        apy: (
          poolIncentiveApr + (poolAggregate.apr ? poolAggregate.apr : 0)
        ).toFixed(2),
        tvl: poolAggregate.current_liquidity_usd!.toFixed(2),
      };
    }
    return { tvl: 0, apy: 0 };
  } catch (e) {
    return { tvl: 0, apy: 0 };
  }
};

export const fetchUmeeInfo = async () => {
  try {
    const res = await Axios.get(UMEE_URL);
    if (res && res.data) {
      const stkatom = res.data.find((item: any) => item.asset === "STKATOM");
      if (stkatom) {
        return {
          borrow_apy: Number(stkatom.borrow_apy).toFixed(2),
          total_supply: Number(stkatom.market_size_usd).toFixed(2),
        };
      }
      return { borrow_apy: 0, total_supply: 0 };
    }
    return { borrow_apy: 0, total_supply: 0 };
  } catch (e) {
    return { borrow_apy: 0, total_supply: 0 };
  }
};

export const fetchShadeInfo = async () => {
  try {
    const res = await Axios.get(SHADE_URL);
    if (res && res.data) {
      const stkATOMSilk = res.data.find(
        (item: any) => item.id === "ec478c0a-c7cd-4327-b6cb-8d01ca87d319"
      );
      const atomStkATOM = res.data.find(
        (item: any) => item.id === "1d7f9ba8-b4be-4a34-a54d-63554f14f8fb"
      );
      return {
        stkATOMSilk: {
          apy: Number(stkATOMSilk.apr.total).toFixed(2),
          tvl: Number(stkATOMSilk.liquidity_usd).toFixed(2),
        },
        atomStkAtom: {
          apy: Number(atomStkATOM.apr.total).toFixed(2),
          tvl: Number(atomStkATOM.liquidity_usd).toFixed(2),
        },
      };
    }
    return {
      stkATOMSilk: { apy: 0, tvl: 0 },
      atomStkAtom: { apy: 0, tvl: 0 },
    };
  } catch (e) {
    return {
      stkATOMSilk: { apy: 0, tvl: 0 },
      atomStkAtom: { apy: 0, tvl: 0 },
    };
  }
};

export const fetchShadeCollateral = async () => {
  try {
    let stkAtomPrice = 1;
    const res = await Axios.get(
      "https://api.coingecko.com/api/v3/coins/stkatom"
    );
    if (res && res.data) {
      stkAtomPrice = res.data.market_data.current_price.usd;
    }

    const secretjs = new SecretNetworkClient({
      url: SHADE_LCD,
      chainId: "secret-4",
    });

    const result: any = await secretjs.query.compute.queryContract({
      contract_address: "secret1qxk2scacpgj2mmm0af60674afl9e6qneg7yuny",
      query: { vault: { vault_id: "10" } },
    });
    if (result) {
      return {
        tvl:
          Number(decimalizeRaw(result.vault.collateral.base!, 18)) *
          stkAtomPrice,
        fees: Number(result.vault.config.fees.borrow_fee.delta) * 100,
      };
    }
    return { tvl: 0, fees: 0 };
  } catch (e) {
    return { tvl: 0, fees: 0 };
  }
};
export const getCosmosTVL = async (prefix: string) => {
  try {
    const res = await Axios.get(
      prefix === "cosmos"
        ? STK_ATOM_TVL_URL
        : prefix === "osmo"
        ? STK_OSMO_TVL_API
        : prefix === "stars"
        ? STK_STAR_TVL_API
        : prefix === "persistence"
        ? STK_XPRT_TVL_API
        : prefix === "agoric"
        ? STK_BLD_TVL_API
        : prefix === "chihuahua"
        ? STK_HUAHUA_TVL_API
        : STK_DYDX_TVL_API
    );
    if (res && res.data) {
      return res!.data!.amount!.amount;
    }
    return 0;
  } catch (e) {
    return 0;
  }
};

export const getCosmosAPY = async (prefix: string) => {
  try {
    const api =
      prefix === "cosmos"
        ? APY_API
        : prefix === "osmo"
        ? STK_OSMO_APY_API
        : prefix === "stars"
        ? STK_STARS_APY_API
        : prefix === "persistence"
        ? STK_XPRT_APY_API
        : prefix === "agoric"
        ? STK_BLD_APY_API
        : prefix === "chihuahua"
        ? STK_HUAHUA_APY_API
        : STK_DYDX_APY_API;
    const res = await Axios.get(api);
    if (res && res.data) {
      return Number((res.data * 100).toFixed(2));
    }
    return -1;
  } catch (e) {
    return -1;
  }
};

export const getBnbTVL = async () => {
  try {
    const tvl = await sdkInstance.getTvl();
    return Number(StkBNBWebSDK.format(tvl, 2));
  } catch (e) {
    console.log(e);
    return 0;
  }
};

export const getMarketCap = async () => {
  try {
    const MarketCap_API =
      "https://api.coingecko.com/api/v3/coins/pstake-finance";
    const res = await axios.get(MarketCap_API);
    if (res && res.data) {
      return Number(res.data.market_data?.market_cap.usd);
    }
    return 0;
  } catch (e) {
    return 0;
  }
};

export const getBTCTvl = async () => {
  try {
    const response = await fetch(`/api/get-tvl`);
    const data = await response.json();
    console.log(data.data.amount, "data-tvl");
    if (!response.ok) {
      throw new Error(data.error);
    }
    if (data && data.data.amount) {
      return Number(satsToBtc(data.data.amount, 8));
    }
    return 0;
  } catch (e) {
    return 0;
  }
};
