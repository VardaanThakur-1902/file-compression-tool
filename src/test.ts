import { HuffmanTree } from "./algorithms/HuffmanTree";
import { HuffmanEncoder } from "./algorithms/HuffmanEncoder";
import { calculateCompressionStats } from "./utils/CompressionStats";

const text = "";

console.log("Original Text:");
console.log(text);

console.log("\n----------------------------\n");

const tree = new HuffmanTree();

tree.buildTree(text);

console.log("Generated Huffman Codes:");

for (const [char, code] of tree.getCodes()) {
    console.log(`'${char}' -> ${code}`);
}

console.log("\n----------------------------\n");

const encoder = new HuffmanEncoder();

const encoded = encoder.encode(text, tree.getCodes());

console.log("Encoded Binary:");

console.log(encoded);

console.log("\n----------------------------\n");

const stats = calculateCompressionStats(text, encoded);

console.log("Compression Statistics:");

console.log(stats);

console.log("\n----------------------------\n");

console.log("Verification:");

console.log("Original Characters:", text.length);

console.log("Original Bits:", text.length * 8);

console.log("Compressed Bits:", encoded.length);

console.log(
    "Compression Successful:",
    encoded.length < text.length * 8
);