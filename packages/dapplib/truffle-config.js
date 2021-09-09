require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remind concert gesture local fortune seed'; 
let testAccounts = [
"0x231a39b5af28080437537d48a37d4cb80f644dd29aede6a56038d846c665a7b5",
"0xf0f85d00f47be4dab1b0ef3190756da82b2964acd621a09980d109121e006444",
"0x6c1ad963cbcc715e9b43a5eb7cab90f5d0a163faede9d1653f83d2dec10187fe",
"0xbd0e39ec32661e9a8a9203c28b4f768e48c722d063543ba969f7b91880fd04a5",
"0x5bb57538d5df79cda3326deb9fc7eac4d32af6e25652c7d87a2674d60ed4105d",
"0x1ea6710ea8c570b2212ffb0976c69d38ebbc7febc3669325d9e4e73c1dddd8c5",
"0x9c82234012dcb551679a2c02d4f78d380cc8ca6d59565f8e3a6df878d89fe3bf",
"0xbd8a893ffc521ac5f6d214851ad5d8246ca64bd71c5c5093a3e5408dc6dedc58",
"0x8b29cf30ba328ae0fefee11f57c005e8406acbbf235efb17b0159a0de0ca2318",
"0x1acf23d479872e31992e34008c4489f52a49a5cfee50585b74a72f51e765642f"
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


