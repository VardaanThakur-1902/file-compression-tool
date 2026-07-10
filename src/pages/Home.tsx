import { useState } from "react";

import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";
import Controls from "../components/Controls";
import { compressText } from "../utils/compress";
import type { CompressionResult } from "../types/CompressionResult";
import OutputPanel from "../components/OutputPanel";
import StatsGrid from "../components/StatsGrid";

export default function Home() {
  const [text, setText] = useState("");
  const [result, setResult] =
  useState<CompressionResult | null>(null);

  const handleCompress = () => {
    if (!text.trim()) return;

    const compressed = compressText(text);

    setResult(compressed);
  };

  const handleUpload = (
    uploadedText: string
  ) => {

      setText(uploadedText);

  };

  const handleClear = () => {

      setText("");

      setResult(null);

  };

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl p-8">

        <div className="rounded-xl bg-white p-6 shadow-lg">

          <h2 className="mb-4 text-xl font-bold">
            Input Text
          </h2>

          <TextInput
            value={text}
            onChange={setText}
          />

          <div className="mt-6">
            <Controls
                onCompress={handleCompress}
                onUpload={handleUpload}
                onClear={handleClear}
            />

            {
              result && (
                <div className="mt-8">

                  {
                    result && (
                      <div className="mt-8">

                        <StatsGrid result={result} />

                      </div>
                    )
                  }

                  <OutputPanel
                    encoded={result.encoded}
                  />

                </div>
              )
            }
          </div>

        </div>

      </main>
    </>
  );
}