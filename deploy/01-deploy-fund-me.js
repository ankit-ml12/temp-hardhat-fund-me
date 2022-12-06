
const { network } = require("hardhat")
const { networkConfig, developmentChains } = require("../helper-hardhat-config")
// const { verify } = require("../utils/verify")

module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy, log} = deployments;
    const {deployer} = await getNamedAccounts();
    const chainId = network.config.chainId;

    const  ethUsdPriceFeedAddress = networkConfig[childId]["ethUsePriceFeed"];
//      let ethUsdPriceFeedAddress;
//      if(developmentChains.includes(network.name)){
//         const ethUsaAggregator = await deployments.get("MockV3Aggregator")
//         // ethUsdPriceFeedAddress = ethUsaAggregator.;
//         ethUsdPriceFeedAddress = ethUsaAggregator.address

//      }else{
//       ethUsdPriceFeedAddress =  networkConfig[chainId]["ethUsdPriceFeed"];
         }
//     const args =[ethUsdPriceFeedAddress];
    const fundMe = await deploy('FundMe', {
      from: deployer,
      args: args, // we pass the price feed
      log: true,
      waitConfirmations : network.config.blockConfirmations || 1,
    });

         
//     if(!developmentChains.includes(network.name) && "FHYZMYZ7552U5SJAVCGHWWK25W95K6M4J3" ){
//             await verify(fundMe.address, [ethUsdPriceFeedAddress]);
//     }
      
//     log("=========================================================")
//   };

//   module.exports.tags = ["all", "fundme"]
// //   module.exports.tags = ['MyContract'];