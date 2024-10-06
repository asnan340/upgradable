const { ethers, upgrades } = require("hardhat");

// Constants for each contract deployment
const CONTRACT_NAME = "UpgradableContract" // Change this line if you changed the contract name on contracts/UpgradeableNFT.sol

async function main() {
    // console.log("upgrate",upgrades);
    // get contract factory and deploy proxy
    const UpgradeableNFT = await ethers.getContractFactory(CONTRACT_NAME);
    console.log('deploying ', CONTRACT_NAME)
    const proxy = await upgrades.deployProxy(UpgradeableNFT, {kind : 'uups'}); // deploy the proxy
    await proxy.waitForDeployment();

    console.log("logical contract proxy address",proxy.target);
    // print data
    let implementationAddress = await upgrades.erc1967.getImplementationAddress(proxy.target)
    console.log(CONTRACT_NAME,"(PROXY)  deployed to:", proxy.target);
    console.log("getImplementationAddress:",implementationAddress)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });