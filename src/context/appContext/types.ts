export interface AppState {
  cosmosData: {
    apy: number;
    tvl: number;
  };
  osmoData: {
    apy: number;
    tvl: number;
  };
  dydxData: {
    apy: number;
    tvl: number;
  };
  starsData: {
    apy: number;
    tvl: number;
  };
  xprtData: {
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
    OSMO: number;
    DYDX: number;
    STARS: number;
  };
}

export interface AppProviderProps {
  children: JSX.Element;
}
