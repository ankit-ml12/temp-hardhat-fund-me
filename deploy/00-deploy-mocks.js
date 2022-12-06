const { network } = require("hardhat");
const {networkConfig, developmentChains, DECIMALS, INITIAL_ANSWER} = require("../helper-hardhat-config")

module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy, log} = deployments;
    const {deployer} = await getNamedAccounts();
    const chainId = network.config.chainId;


    // if(developmentChains.includes(chainId)){
    if(developmentChains.includes(network.name)){
        log("Local network detected! deploying mocks....")
        await deploy('MockV3Aggregator', {
            contract :"MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_ANSWER], // we pass the price feed
          });
          log("Mock deployed!")
          log("---------------------------------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]