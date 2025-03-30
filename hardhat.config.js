/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");


module.exports = {
  solidity: "0.8.20", // Use the correct Solidity version
  networks: {
    sepolia: {
      url: '',//API Key
      accounts: [''], // Private key must be a string
      chainId: 11155111,
    },
    localhost: {
      url: "http://127.0.0.1:8545", // Fixed missing quotation mark
    },
  },
};