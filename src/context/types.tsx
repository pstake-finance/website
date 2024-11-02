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
  bldData: {
    apy: number;
    tvl: number;
  };
  huahuaData: {
    apy: number;
    tvl: number;
  };
  bnbData: {
    apy: number;
    tvl: number;
  };
  btcData: {
    apy: number;
    tvl: number;
  };
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
  validatorsList: {
    uatom: number;
    uosmo: number;
    adydx: number;
    ustars: number;
    uhuahua: number;
    ubld: number;
    uxprt: number;
  };
  marketCap: number;
}

export interface AppProviderProps {
  children: JSX.Element;
}
