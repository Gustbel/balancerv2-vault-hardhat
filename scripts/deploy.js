const fs = require('fs');

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log (`Account Deployer: ${deployer.address}`);

    const balance = await deployer.getBalance();
    console.log (`Balance Deployer: ${balance}`);

    const Vault = await ethers.getContractFactory("Vault");
    const vault = await Vault.deploy(
        "0xcacac0c929de862EE2251d92eac1106633D7a261",   // authorizer {Address}
        "0xc778417E063141139Fce010982780140Aa0cD5Ab",   // weth address {Address}
        0,             // pauseWindowDuration {uint256}
        0              // bufferPeriodDuration {uint256}
        );

    console.log (`Token Address: ${vault.address}`);

    const data = {
        address: vault.address,
        abi: JSON.parse(vault.interface.format('json'))
    };
    fs.writeFileSync('frontend/src/Vault.json', JSON.stringify(data));
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
