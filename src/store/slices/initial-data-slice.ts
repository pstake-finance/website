import { StateCreator } from "zustand";
import { getValidators } from "../../pages/api/onChain";
import osmo from "../../pages/osmo";

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
  stars: ValidatorInfo[];
  cosmos: ValidatorInfo[];
}

export interface InitialDataSliceState {
  validatorsInfo: ValidatorsInfo;
  validatorsInfoLoader: {
    name: string;
    loader: boolean;
  };
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
  fetchStarsValidatorsData: (
    rpc: string,
    chainID: string,
    env: string
  ) => Promise<void>;
  fetchCosmosValidatorsData: (
    rpc: string,
    chainID: string,
    env: string
  ) => Promise<void>;
  resetInitialDataSlice: () => void;
  setValidatorInfoLoader: (name: string, value: boolean) => void;
}

const initialState: InitialDataSliceState = {
  validatorsInfo: {
    osmo: [],
    dydx: [],
    stars: [],
    cosmos: [],
  },
  validatorsInfoLoader: {
    name: "",
    loader: false,
  },
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
      validatorsInfoLoader: {
        name: "cosmos",
        loader: true,
      },
    }));
    const valResponse = await getValidators(rpc, chainID, env);
    set((state) => ({
      validatorsInfo: {
        ...state.validatorsInfo,
        cosmos: valResponse,
      },
    }));
    set((state) => ({
      validatorsInfoLoader: {
        name: "",
        loader: false,
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
