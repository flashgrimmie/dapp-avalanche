require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remind essay imitate private forget section'; 
let testAccounts = [
"0x1e3769bec913a723022ae9dedddae327fca6ae713a4fe9d5d6805d7b75ae16c4",
"0x930793829fa57935894613d860da56a21a64b10cb5ce474c300cc24a9a72b899",
"0x97d161b5ed4bc2cfa7584275ef63572a2e931ac539e875eb2d0dadd4d5346029",
"0x951ceef6826819ae839bf5a999b530834873cef6c68738a1388e3649edd25732",
"0x338c24ce834809945e17912d6a98613d76fdabd221ae014ac35767048670b2e6",
"0x9d5df959898fdc02bd450648c22101374b7236f6243c84c7c198d974b84636f7",
"0x4277e734d807610d866fa7f01d2ec8754bb7ff9ac13afaad7e165b46b4464647",
"0xa1dfef76cd504c802ec2d5733558c23e51c56b96eaf182ae97ff07568be6694b",
"0x29649a2199b2df0a2ca9d7d1310465c0048ab08476fce50b39fc0daa5538e018",
"0x3ab0b2841eeca06393830a6b070b70275bfaff2f2ebed5beea2c9a90e2b7e148"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


