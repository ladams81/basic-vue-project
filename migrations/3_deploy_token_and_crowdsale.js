var MyCrowdsale = artifacts.require("MyCrowdsale");
var MyToken = artifacts.require("MyToken");
var SimpleStorage = artifacts.require("SimpleStorage");

module.exports = async function (deployer, network, accounts) {

  // import {web3} from "@openzeppelin/test-environment";

  const startTime = Date.now();
  const endTime = startTime + (3600 * 100000);
  //const ethRate = web3.utils.BN(100);
  console.log("Start time: " + startTime);
  console.log("End time: " + endTime);
  const ethRate = 122300000;
  const wallet = accounts[0];

  await deployer.deploy(MyToken, 100000);
  const myToken = await MyToken.deployed();
  console.log("token: " + myToken.address);

  await deployer.deploy(
    MyCrowdsale,
    ethRate,
    wallet,
    MyToken.address,
    10000000000,
    startTime,
    endTime);
   const crowdsale = await MyCrowdsale.deployed();
   console.log("address: " + crowdsale.address);


  // console.log("SimpleStorage contract pre deploy: " + SimpleStorage.address)
  await deployer.deploy(SimpleStorage);
  const simpleStorage = await SimpleStorage.deployed();
  console.log("Simple contract post deployed: " + simpleStorage.address);
};
