import { compressText } from "./utils/compress";
import { decompressFile } from "./utils/decompress";

const text = "hello world";

const compressed = compressText(text);

const restored = decompressFile(
  compressed.huffmanFile
);

console.log("Original:");
console.log(text);

console.log("\nRestored:");
console.log(restored);

console.log("\nVerification:");
console.log(text === restored);