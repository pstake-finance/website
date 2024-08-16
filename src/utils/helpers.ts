import { Dec, Int } from "@keplr-wallet/unit";
import _ from "lodash";
import { Decimal } from "@cosmjs/math";
import stakepool from "../utils/ABIs/StakePool.json";
import { ethers, utils } from "ethers";
import { StkBNBWebSDK } from "@persistenceone/stkbnb-web-sdk";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";

import {
  createProtobufRpcClient,
  QueryClient,
  setupIbcExtension,
} from "@cosmjs/stargate";

export async function RpcClient(rpc: string) {
  const tendermintClient = await Tendermint34Client.connect(rpc);
  const queryClient = new QueryClient(tendermintClient);
  return createProtobufRpcClient(queryClient);
}

export function satsToBtc(
  value: number | string,
  precision: number = 8
): string {
  const result = new Dec(Number(value)).mul(new Dec(10).pow(new Int(-8)));

  return result.toString(precision);
}

export const stakePoolContractAddress =
  process.env.NEXT_PUBLIC_STAKE_POOL_CONTRACT_ADDRESS;

export const stakePoolContractABI = stakepool.abi;
export const SPEEDY_NODE_URL = process.env.NEXT_PUBLIC_BNB_CHAIN_RPC_URL;

export const shieldContractsAddress =
  process.env.NEXT_PUBLIC_SHIELD_CONTRACT_ADDRESS;

export const APP_ETHERS_PROVIDER = new ethers.providers.JsonRpcProvider(
  SPEEDY_NODE_URL
);

export const SDK_ENV =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "Mainnet" ? 0 : 1;

export const sdkInstance = StkBNBWebSDK.getInstance({
  signerOrProvider: APP_ETHERS_PROVIDER,
  env: SDK_ENV,
});

export const bigNumberToEther = (bigNumber: any) => {
  return utils.formatEther(bigNumber);
};

export const removeCommas = (str: any) =>
  _.replace(str, new RegExp(",", "g"), "");

export const reverseString = (str: any) =>
  removeCommas(_.toString(_.reverse(_.toArray(str))));

export const recursiveReverse = (input: any): string => {
  if (_.isArray(input))
    return _.toString(_.reverse(_.map(input, (v: any) => recursiveReverse(v))));
  if (_.isString()) return reverseString(input);
  return reverseString(`${input}`);
};

export const sixDigitsNumber = (value: string, length = 6): string => {
  let inputValue = value.toString();
  if (inputValue.length >= length) {
    return inputValue.substring(0, length);
  } else {
    const stringLength = length - inputValue.length;
    let newString = inputValue;
    for (let i = 0; i < stringLength; i++) {
      newString += "0";
    }
    return newString;
  }
};

export const formatNumber = (v = 0, size = 3, decimalLength = 6): string => {
  let str = `${v}`;
  if (!str) return "NaN";
  let substr = str.split(".");
  if (substr[1] === undefined) {
    let newString = "0";
    for (let i = 1; i < decimalLength; i++) {
      newString += "0";
    }
    substr.push(newString);
  } else {
    substr[1] = sixDigitsNumber(substr[1], decimalLength);
  }
  str = reverseString(substr[0]);
  const regex = `.{1,${size}}`;
  const arr = str.match(new RegExp(regex, "g"));
  return `${recursiveReverse(arr)}${substr[1] ? `.${substr[1]}` : ""}`;
};

export const decimalize = (valueString: any, decimals = 6) => {
  let truncate;
  if (typeof valueString === "string") {
    truncate = Number(valueString);
  } else {
    truncate = valueString;
  }
  return Decimal.fromAtomics(
    Math.trunc(truncate).toString(),
    decimals
  ).toString();
};

export const decimalizeRaw = (valueString: any, decimals = 6) => {
  return Decimal.fromAtomics(valueString, decimals).toString();
};

export const emptyFunc = () => ({});

export const numberFormat = (number: any, decPlaces: number) => {
  // 2 decimal places => 100, 3 => 1000, etc
  decPlaces = Math.pow(10, decPlaces);

  const abbrev = ["K", "M", "M", "T"];

  // Go through the array backwards, so we do the largest first
  for (let i = abbrev.length - 1; i >= 0; i--) {
    // Convert array index to "1000", "1000000", etc
    const size = Math.pow(10, (i + 1) * 3);

    // If the number is bigger or equal do the abbreviation
    if (size <= number) {
      // Here, we multiply by decPlaces, round, and then divide by decPlaces.
      // This gives us nice rounding to a particular decimal place.
      number = Math.round((number * decPlaces) / size) / decPlaces;

      // Handle special case where we round up to the next abbreviation
      if (number == 1000 && i < abbrev.length - 1) {
        number = 1;
        i++;
      }

      // Add the letter for the abbreviation
      number += abbrev[i];

      break;
    }
  }

  return number;
};
