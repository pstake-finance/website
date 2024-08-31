import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { AppProviderProps, AppState } from "./types";
import {
  fetchTokenPrices,
  getBnbTVL,
  getBTCTVL,
  getCosmosTVL,
  getMarketCap,
} from "../../pages/api/api";
import { decimalize, decimalizeRaw } from "../../utils/helpers";
import { getValidatorLength } from "../../pages/api/onChain";

const AppContext = createContext<AppState>({
  cosmosData: {
    apy: 0,
    tvl: 0,
  },
  osmoData: {
    apy: 0,
    tvl: 0,
  },
  dydxData: {
    apy: 0,
    tvl: 0,
  },
  starsData: {
    apy: 0,
    tvl: 0,
  },
  xprtData: {
    apy: 0,
    tvl: 0,
  },
  bldData: {
    apy: 0,
    tvl: 0,
  },
  huahuaData: {
    apy: 0,
    tvl: 0,
  },
  bnbData: {
    apy: 0,
    tvl: 0,
  },
  btcData: {
    apy: 0,
    tvl: 0,
  },
  validatorsList: {
    uatom: 0,
    uosmo: 0,
    adydx: 0,
    ustars: 0,
    uhuahua: 0,
    ubld: 0,
    uxprt: 0,
  },
  tokenPrices: {
    BNB: 0,
    ATOM: 0,
    OSMO: 0,
    DYDX: 0,
    STARS: 0,
    XPRT: 0,
    BLD: 0,
    HUAHUA: 0,
    BTC: 0,
  },
  marketCap: 0,
});

export const useApp = (): AppState => {
  return useContext(AppContext);
};

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [cosmosData, setCosmosData] = useState<any>({
    apy: 0,
    tvl: 0,
  });
  const [osmoData, setOsmoData] = useState<any>({
    apy: 0,
    tvl: 0,
  });
  const [bnbData, setBnbData] = useState<any>({
    apy: 0,
    tvl: 0,
  });
  const [dydxData, setDydxData] = useState<any>({
    apy: 0,
    tvl: 0,
  });
  const [starsData, setStarsData] = useState<any>({
    apy: 0,
    tvl: 0,
  });
  const [xprtData, setXprtData] = useState<any>({
    apy: 0,
    tvl: 0,
  });
  const [huahuaData, setHuahuaData] = useState<any>({
    apy: 0,
    tvl: 0,
  });
  const [bldData, setBldData] = useState<any>({
    apy: 0,
    tvl: 0,
  });
  const [btcData, setBtcData] = useState<any>({
    apy: 0,
    tvl: 0,
  });
  const [marketCap, setMarketCap] = useState<any>(0);

  const [chainValidators, setChainValidators] = useState<any>({
    uatom: 0,
    uosmo: 0,
    adydx: 0,
    ustars: 0,
    uhuahua: 0,
    ubld: 0,
    uxprt: 0,
  });

  const [prices, setPrices] = useState<any>({
    BNB: 0,
    ATOM: 0,
    OSMO: 0,
    DYDX: 0,
    STARS: 0,
    XPRT: 0,
    BLD: 0,
    HUAHUA: 0,
    BTC: 0,
  });

  useEffect(() => {
    const fetchApy = async () => {
      getCosmosTVL("cosmos").then((response) => {
        setCosmosData({
          apy: 0,
          tvl: Number(decimalizeRaw(response)),
        });
      });
      getCosmosTVL("osmo").then((response) => {
        setOsmoData({
          apy: 0,
          tvl: Number(decimalizeRaw(response)),
        });
      });
      getCosmosTVL("dydx").then((response) => {
        setDydxData({
          apy: 0,
          tvl: Number(decimalizeRaw(response, 18)).toFixed(2),
        });
      });
      getCosmosTVL("stars").then((response) => {
        setStarsData({
          apy: 0,
          tvl: Number(decimalizeRaw(response)),
        });
      });
      getCosmosTVL("persistence").then((response) => {
        setXprtData({
          apy: 0,
          tvl: Number(decimalizeRaw(response)),
        });
      });
      getCosmosTVL("chihuahua").then((response) => {
        setHuahuaData({
          apy: 0,
          tvl: Number(decimalizeRaw(response)),
        });
      });
      getBnbTVL().then((response) => {
        setBnbData({
          apy: 0,
          tvl: response,
        });
      });
      getBTCTVL().then((response) => {
        setBtcData({
          apy: 0,
          tvl: Number(response),
        });
      });
      fetchTokenPrices().then((response) => {
        setPrices(response);
      });
      getMarketCap().then((response) => {
        setMarketCap(response);
      });
    };
    fetchApy();
  }, []);

  const walletState: AppState = {
    cosmosData: cosmosData,
    bnbData: bnbData,
    tokenPrices: prices,
    osmoData,
    dydxData,
    starsData,
    xprtData,
    bldData,
    huahuaData,
    btcData,
    validatorsList: chainValidators,
    marketCap,
  };

  return (
    <AppContext.Provider value={walletState}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
