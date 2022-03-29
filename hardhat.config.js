/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-waffle');

const INFURA_URL = 'https://rinkeby.infura.io/v3/025d7ebf96134012b954d0491f384c53';
const PRIVATE_KEY = '2a1b6f934ccd67a5e90a3a52e1f29d8b9e0900413434489e426c365b75403f2c';

module.exports = {
  solidity: {
    version: "0.7.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 866,    // Empirically found for this project
      },
    },
  },
  networks: {
    // hardhat: {
    //   allowUnlimitedContractSize: true
    // },
    rinkeby: {
      url: INFURA_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      allowUnlimitedContractSize: true
    }
  },
};