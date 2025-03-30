// Import Hardhat runtime environment
const hre = require("hardhat");

async function main() {
    // 1. Get the ContractFactory for the contract
    const SimpleEtherWallet = await hre.ethers.getContractFactory("votingsystem");

    // 2. Deploy the contract (you can pass constructor arguments here if needed)
    const etherWallet = await SimpleEtherWallet.deploy(["ravi","shastri"]);

    // 3. Wait for the deployment to be mined
    await etherWallet.deployed();

    console.log("SimpleEtherWallet deployed to:", etherWallet.address);
}

// Execute the main function
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});