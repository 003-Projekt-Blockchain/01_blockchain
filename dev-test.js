const Block = require ("./block");
const Blockchain = require("./blockchain");
//const block = new Block("time","hash1","hash2","mydata");


//console.log(block.genesis().toString());
// const testBlock = Block.mineBlock(Block.genesis(),"test");
// console.log(testBlock.toString());

// 1.Block

const chain = new Blockchain();
console.log(chain);

// 2.Block
chain.addBlock("100€ an boo, 50$ von foo");
console.log(chain);

// +3.Block

chain.addBlock("50€ von boo");
console.log(chain);

// +4.Block

chain.addBlock("Bank an Kasse");
console.log(chain);