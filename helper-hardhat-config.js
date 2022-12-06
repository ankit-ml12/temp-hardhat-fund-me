const networkConfig = {
    5: {
        name: "goerli",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    },
}
//for local network
const developmentChains = ["hardhat", "localhost"];
const  DECIMALS = 8;
const INITIAL_ANSWER= 200000000000;


module.exports = {networkConfig, developmentChains, DECIMALS, INITIAL_ANSWER}