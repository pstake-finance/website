const BigNumber = require("bignumber.js");
const Web3 = require('web3');
const config = require('./config.json');
const LiquidStaking = require('../abi/LiquidStaking.json');

let contractAddress = LiquidStaking.networks[config.NETWORK_ID].address

const newProvider = () => new Web3.providers.WebsocketProvider(config.web3WS);
let web3 = new Web3(newProvider());

async function readEvents(){
    const contract = new web3.eth.Contract(LiquidStaking.abi, contractAddress);
    let stakeEvents = [];
    let ustakeEvents = [];

   await  contract.getPastEvents("StakeTokens",
        {
            fromBlock: 0,
            toBlock: 'latest' // You can also specify 'latest'
        })
        .then(events => {
          //  console.log("Stake events : ", events)
            console.log("Stake events.length: ", events.length)
            stakeEvents = events;
        } )
        .catch((err) => console.error(err));

    await contract.getPastEvents("UnstakeTokens",
        {
            fromBlock: 0,
            toBlock: 'latest' // You can also specify 'latest'
        })
        .then(events => {
           // console.log("Unstake events : ", events)
            console.log("Unstake events.length: ", events.length)
            ustakeEvents = events;
        } )
        .catch((err) => console.error(err));

    let events = [
        ...stakeEvents,
        ...ustakeEvents
    ]

    console.log("events full length: ", events.length)
    let calc = await calculate(events);
}

async function calculate(events){
    let lastTimeShareCalculated = [];
    let totalStakedBalance = [];
    let existingTimeShare = [];
    let globalTimeShare = 0;
    let previousEventTs = 0;
    let currentEventTs = 0;
    let xprtPrizePool = config.XPRT_PRIZE_POOL;

    let stakerObj = [];

    let data =
        (events.length &&
            events.sort(function (a, b) {
                return a.returnValues.timestamp - b.returnValues.timestamp;
            })) ||
        [];

    console.log("----------------------*************************----------------------------")
    data.forEach(function (item, index) {
        console.log("index no.: ", index)
        let ethAddress = item.returnValues.accountAddress;
        let amount = parseInt(item.returnValues.tokens);
        currentEventTs = parseInt(item.returnValues.timestamp);
        // if(index === 0)
        //     previousEventTs = 0;
        // else
        //     previousEventTs = data[index-1].returnValues.timestamp;

         console.log("ethAddress: ", ethAddress)
         console.log("amount: ",amount)
         console.log("item.event: ",item.event)

        if(lastTimeShareCalculated[ethAddress] == undefined)
            lastTimeShareCalculated[ethAddress] = 0;

        if(totalStakedBalance[ethAddress] == undefined)
            totalStakedBalance[ethAddress] = 0;

        if(existingTimeShare[ethAddress] == undefined)
            existingTimeShare[ethAddress] = 0;

        if(globalTimeShare[ethAddress] == undefined)
            globalTimeShare[ethAddress] = 0;

        if(stakerObj[ethAddress] == undefined)
            stakerObj[ethAddress] = 0;

        let timePeriod = currentEventTs - lastTimeShareCalculated[ethAddress];

        let newTimeShare = timePeriod * totalStakedBalance[ethAddress]

        console.log("timePeriod: ", timePeriod)
        console.log("newTimeShare: ", newTimeShare)
        console.log("currentEventTs: ", currentEventTs)
        console.log("lastTimeShareCalculated[ethAddress]: ", lastTimeShareCalculated[ethAddress])
        console.log("totalStakedBalance[ethAddress] before: ", totalStakedBalance[ethAddress])

        if(item.event === "StakeTokens"){
            existingTimeShare[ethAddress] = existingTimeShare[ethAddress] + newTimeShare;
            globalTimeShare = globalTimeShare + newTimeShare;
            totalStakedBalance[ethAddress] = (totalStakedBalance[ethAddress] + amount);
        }else if(item.event === "UnstakeTokens"){
            existingTimeShare[ethAddress] = existingTimeShare[ethAddress] + newTimeShare;
            globalTimeShare = globalTimeShare + newTimeShare;
            totalStakedBalance[ethAddress] = (totalStakedBalance[ethAddress] - amount);
        }
        lastTimeShareCalculated[ethAddress] = currentEventTs;
       // console.log(item, index);
        console.log("existingTimeShare[ethAddress]: ", existingTimeShare[ethAddress]);
        console.log("totalStakedBalance[ethAddress]: ", totalStakedBalance[ethAddress]);
        console.log("globalTimeShare: ", globalTimeShare);

        stakerObj[ethAddress] = existingTimeShare[ethAddress];

        console.log("----------------------*************************----------------------------")
    });
  //  console.log("stakerObj: ", stakerObj)
    let endDate = config.endDateTs
    console.log("\n\n")
    console.log("XPRT prize pool for each staker")
    console.log("\n\n")
    console.log("----------------------*************************----------------------------")
    for (let key in stakerObj) {


        let timePeriod = endDate - lastTimeShareCalculated[key];

        let newTimeShare = timePeriod * totalStakedBalance[key]
        console.log("key: ", key)
        console.log("timePeriod: ", timePeriod)
        console.log("newTimeShare: ", newTimeShare)
        console.log("currentEventTs: ", currentEventTs)
        console.log("lastTimeShareCalculated[ethAddress]: ", lastTimeShareCalculated[key])
        console.log("totalStakedBalance[ethAddress] before: ", totalStakedBalance[key])

        existingTimeShare[key] = existingTimeShare[key] + newTimeShare;
        globalTimeShare = globalTimeShare + newTimeShare;

        stakerObj[key] = existingTimeShare[key];

        console.log("existingTimeShare[ethAddress]: ", existingTimeShare[key]);
        console.log("globalTimeShare: ", globalTimeShare);
        console.log("----------------------*************************----------------------------")

    }
   let rewards = await calculateRewards(stakerObj, globalTimeShare);
    console.log("ALL DONE!")
}

function calculateRewards(stakerObj, globalTimeShare){
    console.log("stakerObj: ", stakerObj)
    console.log("----------------------*************************----------------------------")
    let xprtPrizePool = config.XPRT_PRIZE_POOL;
    for (let key in stakerObj) {
        let reward = xprtPrizePool * (stakerObj[key] / globalTimeShare);
        console.log("address: ", key, " and rewards: ", reward)
    }
    return true;
}

 function decimalize  ( valueString, decimals = config.DECIMAL_PLACES, precision = config.DECIMAL_PLACES) {
    let bnValueString = valueString
        ? new BigNumber(valueString.toString())
        : new BigNumber(0);
    let bnDecimalPlaces = new BigNumber(decimals);
    let bnBase = new BigNumber(10);
    let bnDenominator = bnBase.pow(bnDecimalPlaces);
    let bnFinalValueToBNString = bnValueString
        .div(bnDenominator)
        .toFixed(Number(precision) > 6 ? 6 : Number(precision))
        .toString();
    return bnFinalValueToBNString;
};

readEvents();