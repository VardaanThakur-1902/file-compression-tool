import { HuffmanNode } from "./HuffmanNode";
import { PriorityQueue } from "./PriorityQueue";

export class HuffmanTree {
  private root: HuffmanNode | null = null;

  getRoot(): HuffmanNode | null {
    return this.root;
  }

  private buildFrequencyMap(text: string): Map<string, number> {
    const frequencyMap = new Map<string, number>();

    for (const char of text) {
        frequencyMap.set(char, (frequencyMap.get(char) ?? 0) + 1);
    }

    return frequencyMap;
    }

  private buildPriorityQueue(
    frequencyMap: Map<string, number>
    ): PriorityQueue {
    const queue = new PriorityQueue();

    for (const [character, frequency] of frequencyMap) {
        queue.insert(new HuffmanNode(character, frequency));
    }

    return queue;
    }

  buildTree(text: string): HuffmanNode | null {
    const frequencyMap = this.buildFrequencyMap(text);

    const queue = this.buildPriorityQueue(frequencyMap);

    // Handle empty input
    if (queue.isEmpty()) {
        this.root = null;
        return null;
    }

    while (queue.size() > 1) {
        const left = queue.extractMin()!;
        const right = queue.extractMin()!;

        const parent = new HuffmanNode(
        null,
        left.frequency + right.frequency,
        left,
        right
        );

        queue.insert(parent);
    }

    this.root = queue.extractMin();

    return this.root;
    }

    public printPreorder(
    node: HuffmanNode | null = this.root
    ): void {
    if (!node) return;

    console.log(
        `Character: ${node.character ?? "*"} | Frequency: ${node.frequency}`
    );

    this.printPreorder(node.left);
    this.printPreorder(node.right);
    }
    
}