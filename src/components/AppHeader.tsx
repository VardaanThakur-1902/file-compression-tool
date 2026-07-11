import {
  FileArchive,
  Cpu,
} from "lucide-react";

export default function AppHeader() {
  return (
    <header className="mb-8 rounded-2xl bg-slate-900 p-8 text-white shadow-xl">

      <div className="flex items-center gap-4">

        <div className="rounded-xl bg-blue-600 p-4">

          <FileArchive size={36} />

        </div>

        <div>

          <h1 className="text-4xl font-bold">

            Huffman Compression Tool

          </h1>

          <p className="mt-2 text-slate-300">

            Compress • Decompress • Visualize

          </p>

        </div>

      </div>

    </header>
  );
}