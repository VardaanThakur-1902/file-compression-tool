import { HuffmanTree } from "./algorithms/HuffmanTree";

const tree = new HuffmanTree();

tree.buildTree("hello world");

console.log("Preorder Traversal:");

tree.printPreorder();