import { HuffmanNode } from "./HuffmanNode";

export class PriorityQueue {
  private heap: HuffmanNode[] = [];

  private heapifyUp(): void {
    let index = this.heap.length - 1;

    while (index > 0) {
        const parentIndex = this.getParentIndex(index);

        if (
        this.heap[parentIndex].frequency <=
        this.heap[index].frequency
        ) {
        break;
        }

        this.swap(parentIndex, index);

        index = parentIndex;
    }
    }

    peek(): HuffmanNode | null {
    if (this.isEmpty()) return null;

    return this.heap[0];
    }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
    }

    private getLeftChildIndex(index: number): number {
    return 2 * index + 1;
    }

    private getRightChildIndex(index: number): number {
    return 2 * index + 2;
    }

    private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

  constructor() {}

  size(): number {
    return this.heap.length;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  insert(node: HuffmanNode): void {
    this.heap.push(node);
    this.heapifyUp();
    }
}