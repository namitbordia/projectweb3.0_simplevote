const hre = require("hardhat");

async function main() {
  const deployedAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const ss = await hre.ethers.getContractAt("votingsystem", deployedAddress);

  console.log("Interacting with deployed simple vote contract at:", deployedAddress);
  async function vote(candidateindex){
    try{
        await ss.vote(candidateindex);
        console.log("you vote is registered",voting);

    }
    catch (error) {
        console.error("Error fetching winner:", error);
    }
  }
  async function winner(){
    ss.candidates[0]=votingsystem[0];
    ss.condidates[1]=votingsystem[1];
    const win = await ss.getwinner();
    console.log(win);
  }
  vote(0);
  vote(1);
  vote(0);
  winner();
 
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });