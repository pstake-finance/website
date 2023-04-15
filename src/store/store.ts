import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import {
  createInitialDataSlice,
  InitialDataSlice,
} from "./slices/initialDataSlice";

type StoreState = InitialDataSlice;

export const useAppStore = create<StoreState>()((...a) => ({
  ...createInitialDataSlice(...a),
}));

mountStoreDevtool("Store", useAppStore);
