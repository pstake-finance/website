import _ from "lodash";
import { Decimal } from "@cosmjs/math";
import stakepool from "../utils/ABIs/StakePool.json";
import { ethers, utils } from "ethers";
import { StkBNBWebSDK } from "@persistenceone/stkbnb-web-sdk";

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

export const bigNumberToEther = (bigNumber) => {
  return utils.formatEther(bigNumber);
};

export const removeCommas = (str) => _.replace(str, new RegExp(",", "g"), "");

const reverseString = (str) =>
  removeCommas(_.toString(_.reverse(_.toArray(str))));

const recursiveReverse = (input) => {
  if (_.isArray(input))
    return _.toString(_.reverse(_.map(input, (v) => recursiveReverse(v))));
  if (_.isString()) return reverseString(input);
  return reverseString(`${input}`);
};

export const sixDigitsNumber = (value, length = 6) => {
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

export const formatNumber = (v = 0, size = 3, decimalLength = 6) => {
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

export const decimalize = (valueString, decimals = 6) => {
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

export const emptyFunc = () => ({});
