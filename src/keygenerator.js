const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const key = ec.genKeyPair();

console.log();
console.log(key);

const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');

console.log();
console.log('Private key:', privateKey);

console.log();
console.log('Public key:', publicKey);