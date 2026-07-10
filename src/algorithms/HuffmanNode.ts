export class HuffmanNode {
  character: string | null;
  frequency: number;
  left: HuffmanNode | null;
  right: HuffmanNode | null;

  constructor(
    character: string | null,
    frequency: number,
    left: HuffmanNode | null = null,
    right: HuffmanNode | null = null
  ) {
    this.character = character;
    this.frequency = frequency;
    this.left = left;
    this.right = right;
  }

  isLeaf(): boolean {
    return this.left === null && this.right === null;
  }
}