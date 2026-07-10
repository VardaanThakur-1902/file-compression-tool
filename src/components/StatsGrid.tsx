import StatsCard from "./StatsCard";
import type { CompressionResult } from "../types/CompressionResult";

interface Props {
  result: CompressionResult;
}

export default function StatsGrid({
  result,
}: Props) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

      <StatsCard
        title="Original Size"
        value={`${result.originalBits} bits`}
      />

      <StatsCard
        title="Compressed Size"
        value={`${result.compressedBits} bits`}
      />

      <StatsCard
        title="Saved"
        value={`${result.savedBits} bits`}
      />

      <StatsCard
        title="Compression Ratio"
        value={`${result.compressionRatio.toFixed(2)}%`}
      />

    </div>
  );
}