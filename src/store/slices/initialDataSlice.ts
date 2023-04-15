import { StateCreator } from "zustand";
import React from "react";
import { fetchTokensInfo } from "../../pages/api/api";

export type responseObjType = {
  hopers: string;
  jackal: string;
  rebus: string;
  osmosis: string;
  persistence: string;
  evmos: string;
  cosmos: string;
  akash: string;
  stargaze: string;
};

export interface InitialTvlApyFeeTypes {
  tvl: number | React.ReactNode;
  apy: number | React.ReactNode;
}

export interface InitialDataSliceState {
  prices: responseObjType | null;
}

export interface InitialDataSliceActions {
  fetchInitialData: () => Promise<void>;
  resetInitialDataSlice: () => void;
}

const initialState: InitialDataSliceState = {
  prices: {
    hopers: "0",
    jackal: "0",
    rebus: "0",
    osmosis: "0",
    persistence: "0",
    evmos: "0",
    cosmos: "0",
    akash: "0",
    stargaze: "0",
  },
};

export type InitialDataSlice = InitialDataSliceState & InitialDataSliceActions;

export const createInitialDataSlice: StateCreator<InitialDataSlice> = (
  set
) => ({
  ...initialState,
  fetchInitialData: async () => {
    const response = await fetchTokensInfo();
    set({
      prices: response,
    });
  },
  resetInitialDataSlice: () => {
    set(initialState);
  },
});
