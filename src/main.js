const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('15a87be4aab059aef442e5411dbeec46c79aca37ba332c9fefa7de1cd1a4ce2d');
const myWalletAddress = myKey.getPublic('hex');

let BlockchainBois = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
BlockchainBois.addTransaction(tx1);

console.log('\nStarting the miner...');
BlockchainBois.minePendingTransactions(myWalletAddress);

console.log('Balance of xavier is', BlockchainBois.getBalanceOfAddress(myWalletAddress));
console.log('Is chain valid?', BlockchainBois.isChainValid());