export interface CompressionResult {
  encoded: string;

  originalBits: number;

  compressedBits: number;

  savedBits: number;

  compressionRatio: number;

  codes: Map<string, string>;
}