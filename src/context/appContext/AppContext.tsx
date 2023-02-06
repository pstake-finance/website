import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { AppProviderProps, AppState } from "./types";
import {
  getBnbApy,
  getBnbTVL,
  getCosmosAPY,
  getCosmosTVL,
} from "../../pages/api/api";

const AppContext = createContext<AppState>({
  cosmosData: {
    apy: 0,
    tvl: 0,
  },
  bnbData: {
    apy: 0,
    tvl: 0,
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

  useEffect(() => {
    const fetchApy = async () => {
      const [
        cosmosApyResponse,
        cosmosTvlResponse,
        bnbApyResponse,
        bnbTvlResponse,
      ] = await Promise.all([
        getCosmosAPY(),
        getCosmosTVL(),
        getBnbApy(),
        getBnbTVL(),
      ]);
      setCosmosData({
        apy: cosmosApyResponse,
        tvl: cosmosTvlResponse,
      });
      setBnbData({
        apy: bnbApyResponse,
        tvl: bnbTvlResponse,
      });
    };
    fetchApy();
  }, []);

  const walletState: AppState = {
    cosmosData: cosmosData,
    bnbData: bnbData,
  };

  return (
    <AppContext.Provider value={walletState}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
