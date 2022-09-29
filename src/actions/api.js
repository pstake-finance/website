import Axios from "axios";
const ALPACA_API = "https://alpaca-static-api.alpacafinance.org/bsc/v1/landing/summary.json"
const BEEFY_APY_API = "https://api.beefy.finance/apy"
const BEEFY_APY_TVL = "https://api.beefy.finance/tvl"
export const OPEN_LEVERAGE_API = 'https://bnb.openleverage.finance/api/info/pool/0x9630cefdccbc7eb8689ed1de14a1899468b0839d'
export const PANCAKE_API = 'https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2'
export const WOMBAT_API = 'https://api.thegraph.com/subgraphs/name/wombat-exchange/wombat-exchange'

export const fetchAlpaca = async () => {
    try {
        const res = await Axios.get(ALPACA_API)
        if(res && res.data && res.data.data && res.data.data.farmingPools) {
            const farmingPools = res.data.data.farmingPools;
            const data =  farmingPools.filter((val) => {
                return val.key.toLowerCase() === "pcs-stkbnb-bnb"
            });
            return {tvl:Number(data[0].tvl).toFixed(2), apy: Number(data[0].totalApy).toFixed(2)}
        }
    } catch (e) {
        return {tvl:0, apy:0}
    }
}
export const fetchBeefyInfo = async () => {
    try {
        const responses = await Axios.all([
            Axios.get(BEEFY_APY_API),
            Axios.get(BEEFY_APY_TVL)
        ])
        const responseOne = responses[0];
        const responseTwo = responses[1];
        let apy;
        let tvl;
        if(responseOne && responseOne.data){
            apy = responseOne.data["cakev2-wbnb-stkbnb"]*100;
        }else{
            apy = 0
        }
        if(responseOne && responseOne.data){
            tvl = responseTwo.data[56]["cakev2-wbnb-stkbnb"];
        }else{
            tvl = 0
        }
        return {tvl:Number(tvl).toFixed(2), apy:Number(apy).toFixed(2)}

    } catch (e) {
        return {tvl: 0, apy: 0}
    }
}

export const fetchOpenLeverage = async () => {
    try {
        const res = await Axios.get(OPEN_LEVERAGE_API)
        if(res && res.data && res.data.data && res.data.data.currentTVLUsd) {
            const tvlUSD = res.data.data.currentTVLUsd;
            return {tvl:Number(tvlUSD).toFixed(2), apy:30}
        }else{
            return {tvl: 0, apy: 0}
        }
    } catch (e) {
        return {tvl: 0, apy: 0}
    }
}

export const fetchWombat = async () => {
    try {
        const res = await fetch(WOMBAT_API, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: `{
              asset(id: "0xc496f42ea6fc72af434f48469b847a469fe0d17f") {
                    liabilityUSD
              }
             }`
            })
        })
        const responseJson = await res.json();
        if(responseJson && responseJson.data && responseJson.data.asset) {
            return {tvl:Number(responseJson.data.asset.liabilityUSD).toFixed(2), apy:0}
        }
    }catch (e) {
        return {tvl: 0, apy: 0}
    }
}

export const fetchPancakeInfo = async () => {
    try {
        const res = await fetch(PANCAKE_API, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: `{
               pair(id: "0xaa2527ff1893e0d40d4a454623d362b79e8bb7f1") {
                 reserveUSD
               }
             }`
            })
        })
        const responseJson = await res.json();
        if(responseJson && responseJson.data) {
            return {tvl:Number(responseJson.data.pair.reserveUSD).toFixed(2), apy:0}
        }
    }catch (e) {
        return {tvl: 0, apy: 0}
    }
}