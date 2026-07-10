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

    private heapifyDown(): void {
    let index = 0;

    while (true) {
        const left = this.getLeftChildIndex(index);
        const right = this.getRightChildIndex(index);

        let smallest = index;

        if (
        left < this.heap.length &&
        this.heap[left].frequency < this.heap[smallest].frequency
        ) {
        smallest = left;
        }

        if (
        right < this.heap.length &&
        this.heap[right].frequency < this.heap[smallest].frequency
        ) {
        smallest = right;
        }

        if (smallest === index) {
        break;
        }

        this.swap(index, smallest);

        index = smallest;
    }
    }

    extractMin(): HuffmanNode | null {
    if (this.isEmpty()) {
        return null;
    }

    if (this.heap.length === 1) {
        return this.heap.pop()!;
    }

    const min = this.heap[0];

    this.heap[0] = this.heap.pop()!;

    this.heapifyDown();

    return min;
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