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
import { decimalize } from "../../utils/helpers";

const AppContext = createContext<AppState>({
  cosmosData: {
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
  const [bnbData, setBnbData] = useState<any>({
    apy: 0,
    tvl: 0,
  });
  const [prices, setPrices] = useState<any>({
    BNB: 0,
    ATOM: 0,
  });

  useEffect(() => {
    const fetchApy = async () => {
      const [
        cosmosApyResponse,
        cosmosTvlResponse,
        bnbApyResponse,
        bnbTvlResponse,
        tokenPrices,
      ] = await Promise.all([
        getCosmosAPY(),
        getCosmosTVL(),
        getBnbApy(),
        getBnbTVL(),
        fetchTokenPrices(),
      ]);
      setCosmosData({
        apy: cosmosApyResponse,
        tvl: Number(decimalize(cosmosTvlResponse)),
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
  };

  return (
    <AppContext.Provider value={walletState}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
