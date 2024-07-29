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
  getBnbTVL, getBTCTVL,
  getCosmosTVL,
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
  btcData:{
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
    BTC:0,
  },
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
    BTC: 0
  });

  useEffect(() => {
    const fetchApy = async () => {
      const [
        cosmosTvlResponse,
        osmoTvlResponse,
        dydxTvlResponse,
        starsTvlResponse,
        xprtTvlResponse,
        bldTvlResponse,
        huahuaTvlResponse,
        bnbTvlResponse,
        btcTVLResponse,
        tokenPrices,
      ] = await Promise.all([
        getCosmosTVL("cosmos"),
        getCosmosTVL("osmo"),
        getCosmosTVL("dydx"),
        getCosmosTVL("stars"),
        getCosmosTVL("persistence"),
        getCosmosTVL("agoric"),
        getCosmosTVL("chihuahua"),
        getBnbTVL(),
        getBTCTVL(),
        fetchTokenPrices(),
      ]);
      console.log(btcTVLResponse, tokenPrices, "tokenPrices-11")
      const list = await getValidatorLength("core-1");
      setChainValidators(list);
      setCosmosData({
        apy: 0,
        tvl: Number(decimalizeRaw(cosmosTvlResponse)),
      });
      setOsmoData({
        apy: 0,
        tvl: Number(decimalizeRaw(osmoTvlResponse)),
      });
      setDydxData({
        apy: 0,
        tvl: Number(decimalizeRaw(dydxTvlResponse, 18)).toFixed(2),
      });
      setStarsData({
        apy: 0,
        tvl: Number(decimalizeRaw(starsTvlResponse)),
      });
      setXprtData({
        apy: 0,
        tvl: Number(decimalizeRaw(xprtTvlResponse)),
      });
      setBldData({
        apy: 0,
        tvl: Number(decimalizeRaw(bldTvlResponse)),
      });
      setHuahuaData({
        apy: 0,
        tvl: Number(decimalizeRaw(huahuaTvlResponse)),
      });
      setBnbData({
        apy: 0,
        tvl: bnbTvlResponse,
      });
      setBtcData({
        apy: 0,
        tvl: Number(btcTVLResponse),
      });
      setPrices(tokenPrices);
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
  };

  return (
    <AppContext.Provider value={walletState}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
