import stakepool from '../utils/ABIs/StakePool.json'
import {ethers, utils} from "ethers";
export const stakePoolContractAddress = process.env.REACT_APP_STAKE_POOL_CONTRACT_ADDRESS;

export const stakePoolContractABI = stakepool.abi;
export const SPEEDY_NODE_URL = process.env.REACT_APP_BNB_CHAIN_RPC_URL

export const APP_ETHERS_PROVIDER = new ethers.providers.JsonRpcProvider(SPEEDY_NODE_URL);
export const STAKE_POOL_CONTRACT = new ethers.Contract(stakePoolContractAddress, stakePoolContractABI, APP_ETHERS_PROVIDER);

export const getTVL = async () => {
    try{
        const exchangeRate = await STAKE_POOL_CONTRACT.exchangeRate()
        const totalWei = bigNumberToEther(exchangeRate['totalWei'])
        return Number(totalWei).toFixed(2)
    } catch (e) {
        console.log(e);
        return 0
    }
}

export const bigNumberToEther = (bigNumber) => {
    return utils.formatEther(bigNumber)
}