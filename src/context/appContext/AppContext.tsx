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
  getBnbApy,
  getBnbTVL,
  getCosmosAPY,
  getCosmosTVL,
} from "../../pages/api/api";
import { decimalize, decimalizeRaw } from "../../utils/helpers";

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
  tokenPrices: {
    BNB: 0,
    ATOM: 0,
    OSMO: 0,
    DYDX: 0,
    STARS: 0,
    XPRT: 0,
    BLD: 0,
    HUAHUA: 0,
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
  const [prices, setPrices] = useState<any>({
    BNB: 0,
    ATOM: 0,
    OSMO: 0,
    DYDX: 0,
    STARS: 0,
    XPRT: 0,
    BLD: 0,
    HUAHUA: 0,
  });

  useEffect(() => {
    const fetchApy = async () => {
      const [
        cosmosApyResponse,
        osmoApyResponse,
        starsApyResponse,
        xprtApyResponse,
        dydxApyResponse,
        bldApyResponse,
        huahuaApyResponse,
        cosmosTvlResponse,
        osmoTvlResponse,
        dydxTvlResponse,
        starsTvlResponse,
        xprtTvlResponse,
        bldTvlResponse,
        huahuaTvlResponse,
        bnbApyResponse,
        bnbTvlResponse,
        tokenPrices,
      ] = await Promise.all([
        getCosmosAPY("cosmos"),
        getCosmosAPY("osmo"),
        getCosmosAPY("stars"),
        getCosmosAPY("persistence"),
        getCosmosAPY("dydx"),
        getCosmosAPY("agoric"),
        getCosmosAPY("chihuahua"),
        getCosmosTVL("cosmos"),
        getCosmosTVL("osmo"),
        getCosmosTVL("dydx"),
        getCosmosTVL("stars"),
        getCosmosTVL("persistence"),
        getCosmosTVL("agoric"),
        getCosmosTVL("chihuahua"),
        getBnbApy(),
        getBnbTVL(),
        fetchTokenPrices(),
      ]);
      console.log(tokenPrices, "tokenPrices");
      setCosmosData({
        apy: cosmosApyResponse,
        tvl: Number(decimalizeRaw(cosmosTvlResponse)),
      });
      setOsmoData({
        apy: osmoApyResponse,
        tvl: Number(decimalizeRaw(osmoTvlResponse)),
      });
      setDydxData({
        apy: dydxApyResponse,
        tvl: Number(decimalizeRaw(dydxTvlResponse, 18)).toFixed(2),
      });
      setStarsData({
        apy: starsApyResponse,
        tvl: Number(decimalizeRaw(starsTvlResponse)),
      });
      setXprtData({
        apy: xprtApyResponse,
        tvl: Number(decimalizeRaw(xprtTvlResponse)),
      });
      setBldData({
        apy: bldApyResponse,
        tvl: Number(decimalizeRaw(bldTvlResponse)),
      });
      setHuahuaData({
        apy: huahuaApyResponse,
        tvl: Number(decimalizeRaw(huahuaTvlResponse)),
      });
      setBnbData({
        apy: bnbApyResponse,
        tvl: bnbTvlResponse,
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
  };

  return (
    <AppContext.Provider value={walletState}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
