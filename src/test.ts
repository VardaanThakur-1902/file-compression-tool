import { HuffmanTree } from "./algorithms/HuffmanTree";
import { HuffmanEncoder } from "./algorithms/HuffmanEncoder";
import { HuffmanDecoder } from "./algorithms/HuffmanDecoder";

const text = "aaaaaa";

console.log("Original:");

console.log(text);

const tree = new HuffmanTree();

tree.buildTree(text);

const encoder = new HuffmanEncoder();

const encoded = encoder.encode(
    text,
    tree.getCodes()
);

console.log("\nEncoded:");

console.log(encoded);

const decoder = new HuffmanDecoder();

const decoded = decoder.decode(
    encoded,
    tree.getRoot()
);

console.log("\nDecoded:");

console.log(decoded);

console.log("\nVerification:");

console.log(decoded === text);