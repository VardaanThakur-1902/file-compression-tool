import { HuffmanTree } from "./algorithms/HuffmanTree";
import { huffmanTreeToFlow } from "./utils/huffmanTreeToFlow";

const tree = new HuffmanTree();

tree.buildTree("hello world");

const flow = huffmanTreeToFlow(tree.getRoot());

console.log("Nodes:");
console.log(flow.nodes);

console.log("\nEdges:");
console.log(flow.edges);