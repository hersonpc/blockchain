const SHA256 = require("crypto-js/sha256");

class Block {

    constructor(transaction, previousHash = '') {
        this.timestamp = Date.now();
        this.transaction = transaction;
        this.previousHash = previousHash;

        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256( this.timestamp + this.previousHash + JSON.stringify(this.transaction) ).toString();
    }

}

class Blockchain {

    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block({ "block": "genesis" }, '0');
    }

    getLastBlock() {
        return this.chain[this.chain.length -1];
    }

    addManualBlock(newBlock) {
        newBlock.previousHash = this.getLastBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

}


// Testando a blockchain
bc = new Blockchain();
bc.addManualBlock(new Block({ valor: 2 }));
bc.addManualBlock(new Block({ valor: 1 }));

console.log(JSON.stringify(bc, null,  4));