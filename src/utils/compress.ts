import { HuffmanTree } from "../algorithms/HuffmanTree";
import { HuffmanEncoder } from "../algorithms/HuffmanEncoder";
import { calculateCompressionStats } from "./CompressionStats";
import type { CompressionResult } from "../types/CompressionResult";

export function compressText(text: string): CompressionResult {
  const tree = new HuffmanTree();

  tree.buildTree(text);

  const encoder = new HuffmanEncoder();

  const encoded = encoder.encode(text, tree.getCodes());

  const stats = calculateCompressionStats(text, encoded);

  return {
    encoded,

    originalBits: stats.originalBits,
    compressedBits: stats.compressedBits,
    savedBits: stats.savedBits,
    compressionRatio: stats.compressionRatio,

    codes: tree.getCodes(),
    frequencies: tree.getFrequencyMap(),

    root: tree.getRoot(),
  };
}