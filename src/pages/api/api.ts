import Axios from "axios";
import axios from "axios";
import { satsToBtc, sdkInstance } from "../../utils/helpers";
import { StkBNBWebSDK } from "@persistenceone/stkbnb-web-sdk";

export const STK_ATOM_TVL_URL =
  "https://api.persistence.one/pstake/stkatom/atom_tvu";
export const STK_OSMO_TVL_API =
  "https://api.persistence.one/pstake/stkosmo/osmo_tvu";
export const STK_STAR_TVL_API =
  "https://api.persistence.one/pstake/stkstars/stars_tvu";
export const STK_DYDX_TVL_API =
  "https://api.persistence.one/pstake/stkdydx/dydx_tvu";
export const STK_XPRT_TVL_API =
  "https://staging.api.persistence.one/pstake/stkxprt/xprt_tvu";
export const STK_BLD_TVL_API =
  "https://staging.api.persistence.one/pstake/stkbld/bld_tvu";
export const STK_HUAHUA_TVL_API =
  "https://staging.api.persistence.one/pstake/stkhuahua/huahua_tvu";

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

export const fetchTokenPrices = async () => {
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
    data.BLD = Number(pricesResponse.data["agoric"].usd);
    data.HUAHUA = Number(pricesResponse.data["chihuahua-token"].usd);
    data.BTC = Number(pricesResponse.data["bitcoin"].usd);
    return data;
  } catch (e) {
    return data;
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

export const getBnbTVL = async () => {
  try {
    const tvl = await sdkInstance.getTvl();
    console.log(tvl, "tvl-bnb");
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
    // const response = await fetch(`/api/get-tvl`);
    // const data = await response.json();
    // if (!response.ok) {
    //   throw new Error(data.error);
    // }
    // if (data && data.data.data.amount) {
    //   return Number(satsToBtc(data.data.data.amount, 8));
    // }
    return 54.31254358;
  } catch (e) {
    return 0;
  }
};
