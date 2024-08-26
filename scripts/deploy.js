const hre = require("hardhat");

async function main() {
  // Compile the contracts
  await hre.run('compile');

  // Get the contract factory for the NftMarketPlace contract
  const NftMarketPlace = await hre.ethers.getContractFactory("NftMarketPlace");
  
  // Deploy the contract
  const nftmarketplace = await NftMarketPlace.deploy();

  // Wait for the contract to be deployed
  await nftmarketplace.deployed(); // Use wait() instead of deployed()

  console.log(`Deployed contract to: ${nftmarketplace.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
