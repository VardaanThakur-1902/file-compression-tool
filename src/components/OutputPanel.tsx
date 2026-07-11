import DownloadButton from "./DownloadButton";

import type { HuffmanFile } from "../types/HuffmanFile";

interface Props {
  encoded: string;
  huffmanFile: HuffmanFile;
}

export default function OutputPanel({
  encoded,
  huffmanFile,
}: Props) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">

      <div className="mb-4 flex items-center justify-between">

        <h2 className="text-xl font-bold">
          Compressed Output
        </h2>

        <DownloadButton huffmanFile={huffmanFile} />

      </div>

      <textarea
        readOnly
        value={encoded}
        className="
          h-56
          w-full
          resize-none
          rounded-lg
          border
          border-slate-300
          bg-slate-50
          p-4
          font-mono
          text-sm
        "
      />

    </div>
  );
}