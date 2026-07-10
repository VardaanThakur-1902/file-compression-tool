import { HuffmanTree } from "./algorithms/HuffmanTree";

const tree = new HuffmanTree();

tree.buildTree("hello world");

console.log("Generated Huffman Codes:\n");

for (const [char, code] of tree.getCodes()) {
    console.log(`${char} -> ${code}`);
}