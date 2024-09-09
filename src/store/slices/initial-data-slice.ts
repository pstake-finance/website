import { StateCreator } from "zustand";
import { getValidators, getXprtValidators } from "../../pages/api/onChain";
import { getBTCTvl } from "../../pages/api/api";

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
  validatorsInfo: ValidatorsInfo;
  validatorsInfoLoader: {
    name: string;
    loader: boolean;
  };
  btcTvl: number;
}

export interface InitialDataSliceActions {
  fetchOsmoValidatorsData: (
    rpc: string,
    chainID: string,
    env: string
  ) => Promise<void>;
  fetchDydxValidatorsData: (
    rpc: string,
    chainID: string,
    env: string
  ) => Promise<void>;
  fetchCosmosValidatorsData: (
    rpc: string,
    chainID: string,
    env: string
  ) => Promise<void>;
  fetchStarsValidatorsData: (
    rpc: string,
    chainID: string,
    env: string
  ) => Promise<void>;
  fetchXprtValidatorsData: (chainID: string, env: string) => Promise<void>;
  fetchHuahuaValidatorsData: (
    rpc: string,
    chainID: string,
    env: string
  ) => Promise<void>;
  fetchBldValidatorsData: (
    rpc: string,
    chainID: string,
    env: string
  ) => Promise<void>;
  fetchBTCTvl: () => Promise<void>;
  resetInitialDataSlice: () => void;
  setValidatorInfoLoader: (name: string, value: boolean) => void;
}

const initialState: InitialDataSliceState = {
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
  btcTvl: 0,
};

export type InitialDataSlice = InitialDataSliceState & InitialDataSliceActions;

export const createInitialDataSlice: StateCreator<InitialDataSlice> = (
  set
) => ({
  ...initialState,
  fetchOsmoValidatorsData: async (rpc, chainID, env) => {
    set((state) => ({
      validatorsInfoLoader: {
        name: "osmo",
        loader: true,
      },
    }));
    const valResponse = await getValidators(rpc, chainID, env);
    set((state) => ({
      validatorsInfo: {
        ...state.validatorsInfo,
        osmo: valResponse,
      },
    }));
    set((state) => ({
      validatorsInfoLoader: {
        name: "",
        loader: false,
      },
    }));
  },
  fetchDydxValidatorsData: async (rpc, chainID, env) => {
    set((state) => ({
      validatorsInfoLoader: {
        name: "dydx",
        loader: true,
      },
    }));
    const valResponse = await getValidators(rpc, chainID, env);
    set((state) => ({
      validatorsInfo: {
        ...state.validatorsInfo,
        dydx: valResponse,
      },
    }));
    set((state) => ({
      validatorsInfoLoader: {
        name: "",
        loader: false,
      },
    }));
  },
  fetchStarsValidatorsData: async (rpc, chainID, env) => {
    set((state) => ({
      validatorsInfoLoader: {
        name: "stars",
        loader: true,
      },
    }));
    const valResponse = await getValidators(rpc, chainID, env);
    set((state) => ({
      validatorsInfo: {
        ...state.validatorsInfo,
        stars: valResponse,
      },
    }));
    set((state) => ({
      validatorsInfoLoader: {
        name: "",
        loader: false,
      },
    }));
  },
  fetchCosmosValidatorsData: async (rpc, chainID, env) => {
    set((state) => ({
      validatorsInfo: {
        ...state.validatorsInfo,
        cosmos: {
          ...state.validatorsInfo.cosmos,
          loader: true,
        },
      },
    }));
    const valResponse = await getValidators(rpc, chainID, env);
    set((state) => ({
      validatorsInfo: {
        ...state.validatorsInfo,
        cosmos: {
          list: valResponse,
          loader: false,
        },
      },
    }));
  },
  fetchBldValidatorsData: async (rpc, chainID, env) => {
    set((state) => ({
      validatorsInfo: {
        ...state.validatorsInfo,
        bld: {
          ...state.validatorsInfo.bld,
          loader: true,
        },
      },
    }));
    const valResponse = await getValidators(rpc, chainID, env);
    set((state) => ({
      validatorsInfo: {
        ...state.validatorsInfo,
        bld: {
          list: valResponse,
          loader: false,
        },
      },
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
  fetchBTCTvl: async () => {
    const valResponse = await getBTCTvl();
    set((state) => ({
      btcTvl: valResponse,
    }));
  },
  fetchHuahuaValidatorsData: async (rpc, chainID, env) => {
    set((state) => ({
      validatorsInfo: {
        ...state.validatorsInfo,
        huahua: {
          ...state.validatorsInfo.huahua,
          loader: true,
        },
      },
    }));
    const valResponse = await getValidators(rpc, chainID, env);
    set((state) => ({
      validatorsInfo: {
        ...state.validatorsInfo,
        huahua: {
          list: valResponse,
          loader: false,
        },
      },
    }));
  },
  setValidatorInfoLoader: (name, value) =>
    set(() => ({
      validatorsInfoLoader: {
        name: name,
        loader: value,
      },
    })),
  resetInitialDataSlice: () => {
    set(initialState);
  },
});
