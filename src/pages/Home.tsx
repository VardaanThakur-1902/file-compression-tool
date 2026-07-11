import { useState } from "react";

import AppHeader from "../components/AppHeader";
import TextInput from "../components/TextInput";
import Controls from "../components/Controls";
import { compressText } from "../utils/compress";
import type { CompressionResult } from "../types/CompressionResult";
import OutputPanel from "../components/OutputPanel";
import StatsGrid from "../components/StatsGrid";
import CodeTable from "../components/CodeTable";
import HuffmanTreeView from "../components/HuffmanTreeView";
import DropZone from "../components/DropZone";
import { decompressFile } from "../utils/decompress";
import type { HuffmanFile } from "../types/HuffmanFile";

export default function Home() {
  const [text, setText] = useState("");
  const [result, setResult] =
  useState<CompressionResult | null>(null);

  const handleCompress = () => {
    if (!text.trim()) return;

    const compressed = compressText(text);

    setResult(compressed);
  };

  const handleUpload = (uploadedText: string) => {
    setText(uploadedText);
    setResult(null);
  };

  const handleClear = () => {

      setText("");

      setResult(null);

  };

  const handleHuffmanUpload = (
    file: HuffmanFile
  ) => {
    const restored = decompressFile(file);

    setText(restored);

    setResult(
      compressText(restored)
    );
  };

  return (
    <>
      <AppHeader />

      

      <main className="mx-auto max-w-7xl p-8">

        <div className="rounded-xl bg-white p-6 shadow-lg">

          <h2 className="mb-4 text-xl font-bold">
            Input Text
          </h2>

          <TextInput
            value={text}
            onChange={setText}
          />

          <DropZone
            onTextUpload={handleUpload}
            onHuffmanUpload={handleHuffmanUpload}
          />

          <div className="mt-6">
            <Controls
                onCompress={handleCompress}
                onUpload={handleUpload}
                onClear={handleClear}
            />

            {result && (
              <div className="mt-8">

                <div className="mt-8">
                  <StatsGrid result={result} />
                </div>

                <OutputPanel
                  encoded={result.encoded}
                  huffmanFile={result.huffmanFile}
                />

                <div className="mt-8">
                  <CodeTable result={result} />
                </div>

                <div className="mt-8">
                  <HuffmanTreeView root={result.root} />
                </div>

              </div>
            )}
          </div>

        </div>

      </main>
    </>
  );
}