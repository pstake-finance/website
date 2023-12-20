import { StateCreator } from "zustand";
import { getValidatorInfo, getValidators } from "../../pages/api/onChain";

export interface ValidatorInfo {
  identity: string;
  name: string;
  weight: string;
  delegationAmount: string;
  targetDelegation: string;
}

export interface ValidatorsInfo {
  osmo: ValidatorInfo[];
}

export interface InitialDataSliceState {
  validatorsInfo: ValidatorsInfo;
  validatorsInfoLoader: boolean;
}

export interface InitialDataSliceActions {
  fetchInitialData: (rpc: string, chainID: string) => Promise<void>;
  resetInitialDataSlice: () => void;
  setValidatorInfo: (value: ValidatorsInfo) => void;
  setValidatorInfoLoader: (value: boolean) => void;
}

const initialState: InitialDataSliceState = {
  validatorsInfo: {
    osmo: [],
  },
  validatorsInfoLoader: false,
};

export type InitialDataSlice = InitialDataSliceState & InitialDataSliceActions;

export const createInitialDataSlice: StateCreator<InitialDataSlice> = (
  set
) => ({
  ...initialState,
  fetchInitialData: async (rpc, chainID) => {
    set({
      validatorsInfoLoader: true,
    });
    const valResponse = await getValidators(rpc, chainID);
    set({
      validatorsInfo: {
        osmo: valResponse,
      },
    });
    set({
      validatorsInfoLoader: false,
    });
  },
  setValidatorInfo: (value: ValidatorsInfo) =>
    set(() => ({
      validatorsInfo: value,
    })),
  setValidatorInfoLoader: (value: boolean) =>
    set(() => ({
      validatorsInfoLoader: value,
    })),
  resetInitialDataSlice: () => {
    set(initialState);
  },
});
