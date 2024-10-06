// scripts/upgrade-box.js
const { ethers, upgrades } = require("hardhat");
// const {saveProgress} = require('../utils/saveProgress')

const CURRENT_PROXY_ADDRESS = "0xCF7affe81d907a3ECae46DF4013Fc511a0A09B59"
const CONTRACT_NAME = 'UpgradableContract'

async function main() {
    // get the contract factory and apply the upgrade
  const UpgradedContract = await ethers.getContractFactory(CONTRACT_NAME);
  console.log('upgrading ', CONTRACT_NAME)
  // create the new implementation contract and change the proxy pointer
  const upgradedContract = await upgrades.upgradeProxy(CURRENT_PROXY_ADDRESS, UpgradedContract);

  // log deployment info
  console.log("Implementation upgraded: ", upgradedContract.target);
  let implementationAddress = await upgrades.erc1967.getImplementationAddress( upgradedContract.target)
  console.log("new implementation address: ", implementationAddress)

}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});