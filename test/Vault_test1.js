const { expect } = require('chai');

const authorizer = "0xcacac0c929de862EE2251d92eac1106633D7a261";
const wethAddress = "0xc778417E063141139Fce010982780140Aa0cD5Ab";
const bufferPeriodDuration = 0;
const pauseWindowDuration = 0;

describe('Vault contract', () => {
    let Vault, vault, owner, addr1, addr2;

    describe('Deploying Contract', () => {
        it('Should deploy the Vault Contract', async () => {
            beforeEach(async () => {
                Vault = await ethers.getContractFactory('Vault');
                vault = await Vault.deploy(
                    authorizer,              // authorizer {Address}
                    wethAddress,            // weth address {Address}
                    bufferPeriodDuration,   // pauseWindowDuration {uint256}
                    pauseWindowDuration     // bufferPeriodDuration {uint256}
                    );
                [owner, addr1, addr2, _] = await ethers.getSigners();
            });
        });
    });

    describe('Deployment', () => {
        it('Check the right authorizer address', async () => {
            expect(await vault.getAuthorizer()).to.equal(authorizer);
        });

        it('Check the right WETH address', async () => {
            expect(await vault.WETH()).to.equal(wethAddress);
        });

    });
});