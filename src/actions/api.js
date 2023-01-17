import Axios from "axios";
import {
  bigNumberToEther,
  decimalize,
  shieldContractsAddress,
  SPEEDY_NODE_URL
} from "../utils/helpers";
import { QueryClientImpl as StakingQueryClient } from "cosmjs-types/cosmos/staking/v1beta1/query";
import { QueryClientImpl as BankQuery } from "cosmjs-types/cosmos/bank/v1beta1/query";
import { QueryClientImpl } from "../helpers/proto-codecs/codec/pstake/pstake/lscosmos/v1beta1/query";
import { ethers } from "ethers";
import shield from "../utils/ABIs/shield.json";
import {
  APR_BASE_RATE,
  APR_DEFAULT,
  CHAIN_ID,
  ExternalChains,
  STK_ATOM_MINIMAL_DENOM,
  TVL
} from "../constants/config";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
const ALPACA_API =
  "https://alpaca-static-api.alpacafinance.org/bsc/v1/landing/summary.json";
const BEEFY_APY_API = "https://api.beefy.finance/apy";
const BEEFY_APY_TVL = "https://api.beefy.finance/tvl";
export const OPEN_LEVERAGE_API =
  "https://bnb.openleverage.finance/api/info/pool/0x9630cefdccbc7eb8689ed1de14a1899468b0839d";
export const PANCAKE_API =
  "https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2";
export const WOMBAT_API =
  "https://api.thegraph.com/subgraphs/name/wombat-exchange/wombat-exchange";
export const WOMBAT_APR_API =
  "https://api.thegraph.com/subgraphs/name/wombat-exchange/wombat-apr";
export const SHIELD_TVL_API = "https://api2.shieldex.io/mainnet/mvault/getTVL";
export const THENA_API =
  "https://api.thegraph.com/subgraphs/name/thenaursa/thena-v1";

export const OSMOSIS_POOL_URL = "https://api-osmosis.imperator.co/pools/v2/886";

const initialLiquidity = { [TVL]: 0 };

const env = process.env.REACT_APP_ENVIRONMENT;

const persistenceChainInfo = ExternalChains[env].find(
  (chain) => chain.chainId === CHAIN_ID[env].persistenceChainID
);

const cosmosChainInfo = ExternalChains[env].find(
  (chain) => chain.chainId === CHAIN_ID[env].cosmosChainID
);

export const fetchAlpaca = async () => {
  try {
    const res = await Axios.get(ALPACA_API);
    if (res && res.data && res.data.data && res.data.data.farmingPools) {
      const farmingPools = res.data.data.farmingPools;
      const data = farmingPools.filter((val) => {
        return val.key.toLowerCase() === "pcs-stkbnb-bnb";
      });
      return {
        tvl: Number(data[0].tvl).toFixed(2),
        apy: Number(data[0].totalApy).toFixed(2)
      };
    }
  } catch (e) {
    return { tvl: 0, apy: 0 };
  }
};
export const fetchBeefyInfo = async () => {
  try {
    const responses = await Axios.all([
      Axios.get(BEEFY_APY_API),
      Axios.get(BEEFY_APY_TVL)
    ]);
    const responseOne = responses[0];
    const responseTwo = responses[1];
    let apy;
    let tvl;
    if (responseOne && responseOne.data) {
      apy = responseOne.data["cakev2-wbnb-stkbnb"] * 100;
    } else {
      apy = 0;
    }
    if (responseOne && responseOne.data) {
      tvl = responseTwo.data[56]["cakev2-wbnb-stkbnb"];
    } else {
      tvl = 0;
    }
    return { tvl: Number(tvl).toFixed(2), apy: Number(apy).toFixed(2) };
  } catch (e) {
    return { tvl: 0, apy: 0 };
  }
};

export const fetchOpenLeverage = async () => {
  try {
    const res = await Axios.get(OPEN_LEVERAGE_API);
    if (res && res.data && res.data.data && res.data.data.currentTVLUsd) {
      const tvlUSD = res.data.data.currentTVLUsd;
      return { tvl: Number(tvlUSD).toFixed(2), apy: 15 };
    } else {
      return { tvl: 0, apy: 0 };
    }
  } catch (e) {
    return { tvl: 0, apy: 0 };
  }
};

export const fetchWombat = async () => {
  try {
    const res = await fetch(WOMBAT_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `{
              asset(id: "0xc496f42ea6fc72af434f48469b847a469fe0d17f") {
                    liabilityUSD
              }
             }`
      })
    });
    const aprResponse = await fetch(WOMBAT_APR_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `{
                    asset(id: "0xc496f42ea6fc72af434f48469b847a469fe0d17f") {
                    symbol
                    womBaseAPR
                    totalBonusTokenAPR
                    medianBoostedAPR
                  }
             }`
      })
    });
    const aprResponseJson = await aprResponse.json();
    let apr;
    if (aprResponseJson?.data?.asset) {
      const medianBoostedAPR = aprResponseJson.data.asset.medianBoostedAPR;
      const totalBonusTokenAPR = aprResponseJson.data.asset.totalBonusTokenAPR;
      const womBaseAPR = aprResponseJson.data.asset.womBaseAPR;
      apr = (
        (Number(medianBoostedAPR) +
          Number(totalBonusTokenAPR) +
          Number(womBaseAPR)) *
        100
      ).toFixed(2);
    }

    const responseJson = await res.json();
    if (responseJson && responseJson.data && responseJson.data.asset) {
      return {
        tvl: Number(responseJson.data.asset.liabilityUSD).toFixed(2),
        apy: apr
      };
    }
  } catch (e) {
    return { tvl: 0, apy: 0 };
  }
};

export const fetchPancakeInfo = async () => {
  try {
    const res = await fetch(PANCAKE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `{
               pair(id: "0xaa2527ff1893e0d40d4a454623d362b79e8bb7f1") {
                 reserveUSD
               }
             }`
      })
    });
    const responseJson = await res.json();
    if (responseJson && responseJson.data) {
      return {
        tvl: Number(responseJson.data.pair.reserveUSD).toFixed(2),
        apy: 0
      };
    }
  } catch (e) {
    return { tvl: 0, apy: 0 };
  }
};

export const fetchShieldTVL = async () => {
  try {
    const res = await Axios.post(SHIELD_TVL_API, {
      vault: shieldContractsAddress,
      nodeType: "BSC"
    });
    if (res.data.code === 200) {
      const data = res.data.msg;
      return bigNumberToEther(data.toString());
    }
    return 0;
  } catch (e) {
    return 0;
  }
};

export const fetchShield = async () => {
  try {
    const provider = new ethers.providers.JsonRpcProvider(SPEEDY_NODE_URL);
    const contract = new ethers.Contract(
      shieldContractsAddress,
      shield,
      provider
    );
    const response = await contract.getLatestRoundInfo();
    const apy = bigNumberToEther(response["APY"]) * 100;
    const tvl = await fetchShieldTVL();
    return { tvl: parseInt(tvl).toLocaleString(), apy: apy.toFixed(2) };
  } catch (e) {
    return { tvl: 0, apy: 0 };
  }
};

export const fetchThenaInfo = async () => {
  try {
    const res = await fetch(THENA_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `{
                pair(id: "0x2b3510f57365aa17bff8e6360ea67c136175dc6d") {
                   reserveUSD,
                 }
             }`
      })
    });
    const responseJson = await res.json();
    if (responseJson && responseJson.data) {
      return { tvl: parseInt(responseJson.data.pair.reserveUSD), apy: 0 };
    }
    return { tvl: 0, apy: 0 };
  } catch (e) {
    return { tvl: 0, apy: 0 };
  }
};

export const fetchOsmosisPoolInfo = async () => {
  try {
    const res = await Axios.get(OSMOSIS_POOL_URL);
    if (res && res.data) {
      return {
        [TVL]: Math.round(res.data[0].liquidity)
      };
    }
  } catch (e) {
    return initialLiquidity;
  }
};

export async function RpcClient(rpc) {
  const tendermintClient = await Tendermint34Client.connect(rpc);
  const queryClient = new QueryClient(tendermintClient);
  return createProtobufRpcClient(queryClient);
}

export const getExchangeRate = async (rpc) => {
  try {
    const rpcClient = await RpcClient(persistenceChainInfo.rpc);
    const pstakeQueryService = new QueryClientImpl(rpcClient);
    const cvalue = await pstakeQueryService.CValue({});
    return Number(decimalize(cvalue.cValue, 18));
  } catch (e) {
    return 1;
  }
};

export const getTVU = async (rpc) => {
  try {
    const rpcClient = await RpcClient(persistenceChainInfo.rpc);
    const bankQueryService = new BankQuery(rpcClient);
    const supplyResponse = await bankQueryService.TotalSupply({});
    if (supplyResponse.supply.length) {
      const token = supplyResponse.supply.find(
        (item) => item.denom === STK_ATOM_MINIMAL_DENOM
      );
      console.log({ token });
      if (token !== undefined) {
        return token?.amount;
      } else {
        return 0;
      }
    }
    return 0;
  } catch (e) {
    return 0;
  }
};

export const getCommission = async () => {
  try {
    const weight = 1;
    let commission = 0;
    const rpcClient = await RpcClient(persistenceChainInfo.rpc);
    const pstakeQueryService = new QueryClientImpl(rpcClient);
    const allowListedValidators =
      await pstakeQueryService.AllowListedValidators({});
    const cosmosRpcClient = await RpcClient(cosmosChainInfo.rpc);
    const cosmosQueryService = new StakingQueryClient(cosmosRpcClient);
    const validators =
      allowListedValidators?.allowListedValidators?.allowListedValidators;
    const commissionRates = [];

    if (validators && validators?.length !== 0) {
      // keep the commission rates of validators in an array
      for (const addr of validators) {
        const validator = await cosmosQueryService.Validator({
          validatorAddr: addr.validatorAddress
        });
        let commissionRate =
          parseFloat(
            decimalize(
              validator.validator.commission
                ? validator.validator.commission.commissionRates.rate
                : 0,
              18
            )
          ) * 100;
        commissionRates.push(commissionRate);
      }
      /* Calculating the average commission rate of all the validators in the network. */
      commission =
        (weight * commissionRates.reduce((a, b) => a + b, 0)) /
        validators.length;
    } else {
      commission = 0;
    }
    return commission;
  } catch (e) {
    return 0;
  }
};

/**
 * It fetches the incentives for the delegator
 * @returns the incentives for the delegator.
 */
export const getIncentives = async () => {
  try {
    let incentives = 0;
    const rpcClient = await RpcClient(persistenceChainInfo.rpc);
    const pstakeQueryService = new QueryClientImpl(rpcClient);
    const delegationState = await pstakeQueryService.DelegationState({});
    const hostAccountDelegations =
      delegationState?.delegationState?.hostAccountDelegations;

    let stakedAmount = 0;
    if (hostAccountDelegations) {
      for (const amount of hostAccountDelegations) {
        stakedAmount += parseInt(amount?.amount?.amount, 10);
      }
    }

    const balance = (await pstakeQueryService.RewardsBoosterAccount({})).balance
      ?.amount;

    if (balance) {
      incentives = (parseInt(balance, 10) * 365) / stakedAmount;
    }
    return incentives;
  } catch (e) {
    return 0;
  }
};

export const getAPR = async () => {
  try {
    const baseRate = APR_BASE_RATE;
    const commission = await getCommission();
    const incentives = await getIncentives();
    const apr = baseRate - (commission / 100) * baseRate + incentives;
    return isNaN(apr) ? APR_DEFAULT : apr.toFixed(2);
  } catch (e) {
    return -1;
  }
};
