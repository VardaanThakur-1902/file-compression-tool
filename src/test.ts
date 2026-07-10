import { PriorityQueue } from "./algorithms/PriorityQueue";
import { HuffmanNode } from "./algorithms/HuffmanNode";

const pq = new PriorityQueue();

pq.insert(new HuffmanNode("A", 5));
pq.insert(new HuffmanNode("B", 1));
pq.insert(new HuffmanNode("C", 9));
pq.insert(new HuffmanNode("D", 3));
pq.insert(new HuffmanNode("E", 2));

console.log("Removing nodes in sorted order:");

while (!pq.isEmpty()) {
  const node = pq.extractMin();
  console.log(`${node?.character} -> ${node?.frequency}`);
}