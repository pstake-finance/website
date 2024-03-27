import { QueryClientImpl as LiquidStakeQueryClient } from "persistenceonejs/pstake/liquidstakeibc/v1beta1/query";
import { decimalize, decimalizeRaw, RpcClient } from "../../utils/helpers";
import { QueryClientImpl as StakeQuery } from "cosmjs-types/cosmos/staking/v1beta1/query";
import { ValidatorInfo } from "../../store/slices/initial-data-slice";
import { ExternalChains } from "../../utils/config";
import { QueryClientImpl as NativeLiquidStakeQueryClient } from "persistenceonejs/pstake/liquidstake/v1beta1/query";
import { getAvatar } from "./api";

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
    case "elgafar-1":
      return "stargaze";
    case "agoric-3":
      return "agoric";
    case "chihuahua-1":
      return "chihuahua";
    default:
      return "cosmos";
  }
};

const noAvatarValidators = [
  "dydxvaloper1tl75dqhdgm0akll92aaq8cufez0hn4kqrn4zpl",
  "dydxvaloper1y29mkku4zqz8phrxc8zgu7jfnw504leqdwvzzg",
  "dydxvaloper1ywm48fet6n4jgrenl6dsuzprrgxv3pd89n97zt",
  "dydxvaloper14hz2lp7t8nrzl8esfg3hnj4efj0a53cdz0lzc9",
  "dydxvaloper1a4mcl5d6h2ak4hn6nj8vg8vtew6t3mnwzd4sqn",
  "dydxvaloper1m7cz0m5mmrc9j5crxjjk5p39nv4kyednjz8c7e",
  "dydxvaloper1ql40pjftdwl6qtmgk0fn0r02spvss96enayy3q",
  "dydxvaloper1jxv0u20scum4trha72c7ltfgfqef6nsc7dvalf",
  "dydxvaloper1hv2jdxyfdkfk4vja52dj0p80mk85nmuaklx55e",
  "dydxvaloper1dnm7e7jw9r48vsw4h6q5x0s0z0ugu0wqeqxyzt",
  "dydxvaloper1u0exa7dqlsgvfje9sg0emxrmtdmvakp7d0f697",
  "dydxvaloper19sk0mm69k5lgzwywzr9335pqj5mqcadnprclam",
  "dydxvaloper1mklf4k26dff0vueyqy2rvqhgjjkvdzam6p4na0",
  "dydxvaloper1zts523wqvtrhd2a9mznfc83msgs6mgwczvj7kw",
  "dydxvaloper1sstrskpg70tumvwsaldwym2dgs0flj67vsfx4r",
  "dydxvaloper1nwtp8t5vl86zdm5ag85st5czv7d0kscq2zzvgl",
  "dydxvaloper1zhyan2t9w5z7yw20l9e97zc030d2ddq4awdyys",
];
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
    if (chainParamsResponse && chainParamsResponse.hostChain?.validators) {
      if (chainParamsResponse.hostChain?.validators.length > 0) {
        const validatorInfo = await getValidatorInfo(hostChainId, env);
        const hostChainValidators = chainParamsResponse.hostChain?.validators;
        for (const item of hostChainValidators) {
          const res = validatorInfo?.find(
            (valItem) => valItem.operatorAddress === item.operatorAddress
          );
          const chainInfo = ExternalChains[env].find(
            (item) => item.chainId === hostChainId
          );
          if (
            res &&
            (Number(item.delegatedAmount) > 0 || Number(item.weight) > 0)
          ) {
            const chainIdentity = getIdentityChain(hostChainId);
            const avatarCheck = noAvatarValidators.find(
              (item) => item === res.operatorAddress
            );

            validators.push({
              name: res.description!.moniker!,
              identity: !avatarCheck
                ? `https://raw.githubusercontent.com/cosmostation/chainlist/master/chain/${chainIdentity}/moniker/${res.operatorAddress}.png`
                : "",
              weight: (Number(decimalizeRaw(item.weight, 18)) * 100).toFixed(2),
              delegationAmount: Number(
                decimalizeRaw(
                  item.delegatedAmount,
                  chainInfo!.stakeCurrency.coinDecimals
                )
              ).toFixed(),
              targetDelegation: Number(decimalizeRaw(item.weight, 18)).toFixed(
                6
              ),
            });
          }
        }
      }
    }
    return validators;
  } catch (e) {
    console.log(e, "error-getValidators");
    return [];
  }
};

export const getXprtValidators = async (chainID: string, env: string) => {
  try {
    const chainInfo = ExternalChains[env].find(
      (item) => item.chainId === chainID
    );
    let validators: ValidatorInfo[] = [];
    console.log(chainID, "chainIdchainId");
    const rpcClient = await RpcClient(chainInfo!.rpc);
    const pstakeQueryService = new NativeLiquidStakeQueryClient(rpcClient);
    const liquidValidatorsResponse =
      await pstakeQueryService.LiquidValidators();
    const validatorInfo = await getValidatorInfo(chainID, env);
    console.log(
      liquidValidatorsResponse,
      "-persistence cvalue in getExchangeRateFromRpc"
    );
    if (liquidValidatorsResponse && liquidValidatorsResponse.liquidValidators) {
      liquidValidatorsResponse.liquidValidators?.forEach((item) => {
        const res = validatorInfo?.find(
          (valItem) => valItem.operatorAddress === item.operatorAddress
        );
        if (res && (Number(item.liquidTokens) > 0 || Number(item.weight) > 0)) {
          const chainIdentity = getIdentityChain(chainID);
          const avatarCheck = noAvatarValidators.find(
            (item) => item === res.operatorAddress
          );

          validators.push({
            name: res.description!.moniker!,
            identity: !avatarCheck
              ? `https://raw.githubusercontent.com/cosmostation/chainlist/master/chain/${chainIdentity}/moniker/${res.operatorAddress}.png`
              : "",
            weight: (Number(decimalizeRaw(item.weight, 18)) * 100).toFixed(2),
            delegationAmount: Number(
              decimalizeRaw(
                item.liquidTokens,
                chainInfo!.stakeCurrency.coinDecimals
              )
            ).toFixed(),
            targetDelegation: Number(decimalizeRaw(item.weight, 18)).toFixed(6),
          });
        }
      });
    }
    return validators;
  } catch (e) {
    console.log(e, "error-");
    return [];
  }
};
