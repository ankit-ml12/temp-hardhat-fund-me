// const { hardhat } = require("hardhat");

require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy")
require("@nomiclabs/hardhat-ethers")
require("dotenv").config();

module.exports = {
  solidity: {
    compilers :[{version:"0.8.8"},{version:"0.6.6"}],
  },
  defaultNetwork: "hardhat", 
  networks: {
    goerli: {
      url: process.env.GOERLI_URL,
      accounts:[process.env.GOERLI_ACCOUNT],
        chainId: 5,
        blockConfirmations: 6,
    },
  },
  namedAccounts: {
    deployer:{
      default:0,
    },
    user :{
      default: 1,
    }
  }
};
