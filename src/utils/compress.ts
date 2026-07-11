import { HuffmanTree } from "../algorithms/HuffmanTree";
import { HuffmanEncoder } from "../algorithms/HuffmanEncoder";
import { BitPacker } from "../algorithms/BitPacker";

import { calculateCompressionStats } from "./CompressionStats";
import { createHuffmanFile } from "./createHuffmanFile";

import type { CompressionResult } from "../types/CompressionResult";

export function compressText(
  text: string
): CompressionResult {

  const tree = new HuffmanTree();

  tree.buildTree(text);

  const encoder = new HuffmanEncoder();

  const encoded = encoder.encode(
    text,
    tree.getCodes()
  );

  const stats = calculateCompressionStats(
    text,
    encoded
  );

  // Pack bits into bytes
  const packer = new BitPacker();

  const packed = packer.pack(encoded);

  // Create .huff file object
  const huffmanFile = createHuffmanFile(
    packed.padding,
    tree.getFrequencyMap(),
    packed.bytes
  );

  return {
    encoded,

    huffmanFile,

    originalBits: stats.originalBits,

    compressedBits: stats.compressedBits,

    savedBits: stats.savedBits,

    compressionRatio: stats.compressionRatio,

    codes: tree.getCodes(),

    frequencies: tree.getFrequencyMap(),

    root: tree.getRoot(),
  };
}