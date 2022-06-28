// test/1.Box.test.ts
const { expect } = require("chai");
const { ethers } = require("hardhat");
const {Contract,BigNumber } = require("ethers");

describe("Box", function () {

  beforeEach(async function () {
    const Box = await ethers.getContractFactory("Box")
    box = await Box.deploy()
    await box.deployed()
  })

  it("should retrieve value previously stored", async function () {
    await box.store(42)
    expect(await box.retrieve()).to.equal(BigNumber.from('42'))

    await box.store(100)
    expect(await box.retrieve()).to.equal(BigNumber.from('100'))
  })
})

// NOTE: should also add test for event: event ValueChanged(uint256 newValue)