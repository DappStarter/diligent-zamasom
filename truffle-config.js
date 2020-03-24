require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remove equip hope argue swift sustain'; 
let testAccounts = [
"0xdcd2fb9d5e80b7435f257b0b91e044ff8cdb68bf5ed805b8ffea0947a5a3769f",
"0xf39e6a0ba20851f5f48895b03be14b20c7cef4bff35a81edafd6c8e0e7cb28c7",
"0xa5457348db50d1fc93704913325c210fe59cb370b39ea6d1fced2d44f3d339de",
"0x75c0ed7b53d763ccb9f47f8d23a7fbbc29c9f1990aa309843260842a8f37ad62",
"0x4b62f8b02f52a5f4b5c0a1c59ecd2243ef882b52bf123b5c9ce7285dfa44dd39",
"0xa4cba784788de1f3d77f52a6d88b7f502a4ec29f374c38b2f93d8e6e87fbf365",
"0x95178b353dceb92d4001d4a955e41c58d39a43921f258b97a720e64e5c721df8",
"0xa354d30d96c8cfcf25faff6ee966b8c35b81937bf1fb04c8dcfcef65d53f62e4",
"0xf2278998db142281a76dd2ccf573261d97bdb1ebf185139250a72cfb762b8d5a",
"0x3ccd6ecf0e45aab42cb77b264afcfd64d17b977f4bc84dac132bb6d444bb95ae"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
