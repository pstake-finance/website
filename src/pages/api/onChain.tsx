import { QueryClientImpl as LiquidStakeQueryClient } from "persistenceonejs/pstake/liquidstakeibc/v1beta1/query";
import { decimalize, RpcClient } from "../../utils/helpers";
import { QueryClientImpl as StakeQuery } from "cosmjs-types/cosmos/staking/v1beta1/query";
import { ValidatorInfo } from "../../store/slices/initial-data-slice";
import { ExternalChains } from "../../utils/config";

export const getValidatorInfo = async (chainId: string, env: string) => {
  try {
    const chainInfo = ExternalChains[env].find(
      (item) => item.chainId === chainId
    );
    const rpcClient = await RpcClient(chainInfo!.rpc);
    const stakingQueryService = new StakeQuery(rpcClient);
    let key = new Uint8Array();
    let validators = [];
    do {
      const response = await stakingQueryService.Validators({
        status: "",
        pagination: {
          key: key,
          offset: BigInt(0),
          limit: BigInt(0),
          countTotal: true,
          reverse: false,
        },
      });
      key = response!.pagination!.nextKey;
      validators.push(...response.validators);
    } while (key.length !== 0);
    return validators;
  } catch (e) {
    return null;
  }
};

export const getIdentityChain = (chainID: string) => {
  switch (chainID) {
    case "osmosis-1":
      return "osmosis";
    case "dydx-testnet-4":
      return "dydx-testnet";
    case "dydx-mainnet-1":
      return "dydx";
    default:
      return "cosmos";
  }
};

export const getValidators = async (
  rpc: string,
  hostChainId: string,
  env: string
): Promise<ValidatorInfo[]> => {
  try {
    let validators: ValidatorInfo[] = [];
    const rpcClient = await RpcClient(rpc);
    const pstakeQueryService = new LiquidStakeQueryClient(rpcClient);
    const chainParamsResponse = await pstakeQueryService.HostChain({
      chainId: hostChainId,
    });
    console.log(
      chainParamsResponse,
      "chainParamsResponse",
      rpc,
      hostChainId,
      env
    );
    if (chainParamsResponse && chainParamsResponse.hostChain?.validators) {
      if (chainParamsResponse.hostChain?.validators.length > 0) {
        const validatorInfo = await getValidatorInfo(hostChainId, env);
        const hostChainValidators = chainParamsResponse.hostChain?.validators;
        hostChainValidators?.forEach((item) => {
          const res = validatorInfo?.find(
            (valItem) => valItem.operatorAddress === item.operatorAddress
          );
          const chainInfo = ExternalChains[env].find(
            (item) => item.chainId === hostChainId
          );
          console.log(Number(decimalize(item.weight, 18)), "info111");
          if (
            res &&
            (Number(item.delegatedAmount) > 0 || Number(item.weight) > 0)
          ) {
            const chainIdentity = getIdentityChain(hostChainId);
            console.log(chainIdentity, "chainIdentity");
            validators.push({
              name: res.description!.moniker!,
              identity: `https://raw.githubusercontent.com/cosmostation/chainlist/master/chain/${chainIdentity}/moniker/${res.operatorAddress}.png`,
              weight: (Number(decimalize(item.weight, 18)) * 100).toFixed(2),
              delegationAmount: Number(
                decimalize(
                  item.delegatedAmount,
                  chainInfo!.stakeCurrency.coinDecimals
                )
              ).toFixed(),
              targetDelegation: Number(decimalize(item.weight, 18)).toFixed(6),
            });
          }
        });
      }
    }
    return validators;
  } catch (e) {
    console.log(e, "error-");
    return [];
  }
};
