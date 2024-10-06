require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require("@nomicfoundation/hardhat-verify");
const INFURA_API_KEY = process.env.INFURA_API_KEY;
const ethereum_api_key = process.env.ethereum
const arbitrum_api_key = process.env.arbitrum
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.9',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1200
          }
        }
      },
    ]
  },
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: ['']
    },
    polygon: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/",
      accounts: [''],
    },
    Amoy:{
      url: "https://polygon-amoy.g.alchemy.com/v2/",
      accounts: ['']
    },
    //86a81f39dac4d02b9c6b8c037cfcf29758e0625c54bf42281caa44f49bf7782d
    ethereum:{
      url: `https://eth-mainnet.g.alchemy.com/v2/${ethereum_api_key}`,
      accounts: [''],
    },
    arbitrum:{
      url: `https://arb-mainnet.g.alchemy.com/v2/`,
      accounts: [''],
    },
    binance:{
      url: "https://bsc-dataseed1.binance.org/",
      accounts: [''],
    }
  },
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true
  },
  etherscan: {
    apiKey: {
      arbitrumOne: '',
      polygon: "",
      bsc: "",
      mainnet: "",
      polygonAmoy:""
    }
  },
};
