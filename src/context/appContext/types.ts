export interface AppState {
  cosmosData: {
    apy: number;
    tvl: number;
  };
  bnbData: {
    apy: number;
    tvl: number;
  };
}

export interface AppProviderProps {
  children: JSX.Element;
}
