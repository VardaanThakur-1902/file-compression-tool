import { PriorityQueue } from "./algorithms/PriorityQueue";
import { HuffmanNode } from "./algorithms/HuffmanNode";

const pq = new PriorityQueue();

pq.insert(new HuffmanNode("A", 5));
pq.insert(new HuffmanNode("B", 1));
pq.insert(new HuffmanNode("C", 9));
pq.insert(new HuffmanNode("D", 3));

console.log(pq.peek());