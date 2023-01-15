import { expect } from "chai";
import { ethers } from "hardhat";

describe("YOURNAME", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("YOURNAME");

    const instance = await ContractFactory.deploy();
    await instance.deployed();

    expect(await instance.name()).to.equal("YOURNAME");
  });
});
