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
  
  private codes = new Map<string, string>();

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

    this.generateCodes();

    return this.root;
    }

  public getCodes(): Map<string, string> {
    return this.codes;
  }

  public generateCodes(): void {
    this.codes.clear();

    if (!this.root) return;

    this.buildCodes(this.root, "");
  }
  
  private buildCodes(
    node: HuffmanNode,
    currentCode: string
  ): void

  private buildCodes(
        node: HuffmanNode,
        currentCode: string
    ): void {

        if (node.isLeaf()) {
            this.codes.set(node.character!, currentCode || "0");
            return;
        }

        if (node.left) {
            this.buildCodes(
                node.left,
                currentCode + "0"
            );
        }

        if (node.right) {
            this.buildCodes(
                node.right,
                currentCode + "1"
            );
        }
    }
    
    
}