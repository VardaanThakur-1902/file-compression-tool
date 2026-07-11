import type { HuffmanFile } from "./HuffmanFile";
import { HuffmanNode } from "../algorithms/HuffmanNode";

export interface CompressionResult {
  encoded: string;

  huffmanFile: HuffmanFile;

  originalBits: number;
  compressedBits: number;
  savedBits: number;
  compressionRatio: number;

  codes: Map<string, string>;
  frequencies: Map<string, number>;

  root: HuffmanNode | null;
}