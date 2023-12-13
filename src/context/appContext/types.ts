export interface AppState {
  cosmosData: {
    apy: number;
    tvl: number;
  };
  osmoData: {
    apy: number;
    tvl: number;
  };
  bnbData: {
    apy: number;
    tvl: number;
  };
  tokenPrices: {
    BNB: number;
    ATOM: number;
    OSMO: 0;
  };
}

export interface AppProviderProps {
  children: JSX.Element;
}
