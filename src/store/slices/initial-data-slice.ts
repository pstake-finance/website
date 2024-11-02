import { StateCreator } from "zustand";
import {
  getBnbTVL,
  getBTCTvl,
  getCosmosTVL,
  getMarketCap,
  getTokenPrices,
} from "../../pages/api/api";
import { decimalizeRaw } from "../../utils/helpers";
import { getXprtValidators } from "../../pages/api/onChain";

export interface ValidatorInfo {
  identity: string;
  name: string;
  weight: string;
  delegationAmount: string;
  targetDelegation: string;
}

export interface ValidatorsInfo {
  osmo: ValidatorInfo[];
  dydx: ValidatorInfo[];
  cosmos: {
    list: ValidatorInfo[];
    loader: boolean;
  };
  stars: ValidatorInfo[];
  huahua: {
    list: ValidatorInfo[];
    loader: boolean;
  };
  bld: {
    list: ValidatorInfo[];
    loader: boolean;
  };
  xprt: {
    list: ValidatorInfo[];
    loader: boolean;
  };
}

export interface InitialDataSliceState {
  tvlList: {
    cosmos: number;
    osmo: number;
    dydx: number;
    xprt: number;
    huahua: number;
    stars: number;
    btc: number;
    bnb: number;
  };
  btcTvl: number;
  marketCap: number;
  tokenPrices: {
    BNB: number;
    ATOM: number;
    OSMO: number;
    DYDX: number;
    STARS: number;
    XPRT: number;
    BLD: number;
    HUAHUA: number;
    BTC: number;
  };
  validatorsInfo: ValidatorsInfo;
  validatorsInfoLoader: {
    name: string;
    loader: boolean;
  };
}

export interface InitialDataSliceActions {
  fetchTVLList: () => Promise<void>;
  fetchTokenPrices: () => Promise<void>;
  fetchMarketCap: () => Promise<void>;
  fetchXprtValidatorsData: (chainID: string, env: string) => Promise<void>;
  resetInitialDataSlice: () => void;
}

const initialState: InitialDataSliceState = {
  btcTvl: 0,
  marketCap: 0,
  tvlList: {
    cosmos: 0,
    osmo: 0,
    dydx: 0,
    xprt: 0,
    huahua: 0,
    stars: 0,
    btc: 0,
    bnb: 0,
  },
  validatorsInfo: {
    osmo: [],
    dydx: [],
    cosmos: {
      list: [],
      loader: false,
    },
    stars: [],
    xprt: {
      list: [],
      loader: false,
    },
    bld: {
      list: [],
      loader: false,
    },
    huahua: {
      list: [],
      loader: false,
    },
  },
  validatorsInfoLoader: {
    name: "",
    loader: false,
  },
  tokenPrices: {
    BNB: 0,
    ATOM: 0,
    OSMO: 0,
    DYDX: 0,
    STARS: 0,
    XPRT: 0,
    BLD: 0,
    HUAHUA: 0,
    BTC: 0,
  },
};

export type InitialDataSlice = InitialDataSliceState & InitialDataSliceActions;

export const createInitialDataSlice: StateCreator<InitialDataSlice> = (
  set
) => ({
  ...initialState,
  fetchTVLList: async () => {
    console.log("fetch-tvl");
    getCosmosTVL("cosmos").then((response) => {
      set((state) => ({
        tvlList: {
          ...state.tvlList,
          cosmos: Number(decimalizeRaw(response)),
        },
      }));
    });
    getCosmosTVL("osmo").then((response) => {
      set((state) => ({
        tvlList: {
          ...state.tvlList,
          osmo: Number(decimalizeRaw(response)),
        },
      }));
    });
    getCosmosTVL("dydx").then((response) => {
      set((state) => ({
        tvlList: {
          ...state.tvlList,
          dydx: Number(Number(decimalizeRaw(response, 18)).toFixed(2)),
        },
      }));
    });
    getCosmosTVL("stars").then((response) => {
      set((state) => ({
        tvlList: {
          ...state.tvlList,
          stars: Number(decimalizeRaw(response)),
        },
      }));
    });
    getCosmosTVL("persistence").then((response) => {
      set((state) => ({
        tvlList: {
          ...state.tvlList,
          xprt: Number(decimalizeRaw(response)),
        },
      }));
    });
    getCosmosTVL("chihuahua").then((response) => {
      set((state) => ({
        tvlList: {
          ...state.tvlList,
          huahua: Number(decimalizeRaw(response)),
        },
      }));
    });
    getBnbTVL().then((response) => {
      set((state) => ({
        tvlList: {
          ...state.tvlList,
          bnb: response,
        },
      }));
    });
    getBTCTvl().then((response) => {
      set((state) => ({
        tvlList: {
          ...state.tvlList,
          btc: Number(response) + Number(100), // Institutional TVL,
        },
      }));
    });
  },
  fetchTokenPrices: async () => {
    const valResponse = await getTokenPrices();
    set((state) => ({
      tokenPrices: valResponse,
    }));
  },
  fetchXprtValidatorsData: async (chainID, env) => {
    set((state) => ({
      validatorsInfo: {
        ...state.validatorsInfo,
        xprt: {
          ...state.validatorsInfo.xprt,
          loader: true,
        },
      },
    }));
    const valResponse = await getXprtValidators(chainID, env);
    set((state) => ({
      validatorsInfo: {
        ...state.validatorsInfo,
        xprt: {
          list: valResponse,
          loader: false,
        },
      },
    }));
  },
  fetchMarketCap: async () => {
    const valResponse = await getMarketCap();
    set((state) => ({
      marketCap: valResponse,
    }));
  },
  resetInitialDataSlice: () => {
    set(initialState);
  },
});
