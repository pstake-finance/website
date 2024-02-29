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
  bnbData: {
    apy: 0,
    tvl: 0,
  },
  tokenPrices: {
    BNB: 0,
    ATOM: 0,
    OSMO: 0,
    DYDX: 0,
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
  const [prices, setPrices] = useState<any>({
    BNB: 0,
    ATOM: 0,
    OSMO: 0,
    DYDX: 0,
  });

  useEffect(() => {
    const fetchApy = async () => {
      const [
        cosmosApyResponse,
        osmoApyResponse,
        starsApyResponse,
        cosmosTvlResponse,
        osmoTvlResponse,
        dydxApyResponse,
        dydxTvlResponse,
        starsTvlResponse,
        bnbApyResponse,
        bnbTvlResponse,
        tokenPrices,
      ] = await Promise.all([
        getCosmosAPY("cosmos"),
        getCosmosAPY("osmo"),
        getCosmosAPY("stars"),
        getCosmosTVL("cosmos"),
        getCosmosTVL("osmo"),
        getCosmosAPY("dydx"),
        getCosmosTVL("dydx"),
        getCosmosTVL("stars"),
        getBnbApy(),
        getBnbTVL(),
        fetchTokenPrices(),
      ]);
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
  };

  return (
    <AppContext.Provider value={walletState}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
