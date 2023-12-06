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
  };
}

export interface AppProviderProps {
  children: JSX.Element;
}
