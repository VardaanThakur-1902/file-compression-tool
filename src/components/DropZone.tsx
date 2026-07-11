import { useRef, useState } from "react";
import { UploadCloud } from "lucide-react";
import type { HuffmanFile } from "../types/HuffmanFile";

interface Props {
  onTextUpload: (text: string) => void;
  onHuffmanUpload: (file: HuffmanFile) => void;
}

export default function DropZone({
  onTextUpload,
  onHuffmanUpload,
}: Props) {
  const [dragging, setDragging] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const processFile = (file: File) => {
    const reader = new FileReader();

    // TXT
    if (file.name.endsWith(".txt")) {
      reader.onload = () => {
        onTextUpload(reader.result as string);
      };

      reader.readAsText(file);

      return;
    }

    // HUFF
    if (file.name.endsWith(".huff")) {
      reader.onload = () => {
        try {
          const parsed = JSON.parse(
            reader.result as string
          ) as HuffmanFile;

          if (parsed.magic !== "HUFF") {
            alert("Invalid Huffman file.");
            return;
          }

          if (parsed.version !== 1) {
            alert("Unsupported Huffman file version.");
            return;
          }

          onHuffmanUpload(parsed);

        } catch {
          alert("Invalid Huffman file.");
        }
      };

      reader.readAsText(file);

      return;
    }

    alert("Unsupported file type.");
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault();

    setDragging(false);

    const file = event.dataTransfer.files[0];

    if (!file) return;

    processFile(file);
  };

  const handleBrowse = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    processFile(file);
  };

  return (
    <>
      <input
        ref={inputRef}
        hidden
        type="file"
        accept=".txt,.huff"
        onChange={handleBrowse}
      />

      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => {
          setDragging(false);
        }}
        onDrop={handleDrop}
        className={`
          mb-8
          flex
          cursor-pointer
          flex-col
          items-center
          justify-center
          rounded-2xl
          border-2
          border-dashed
          p-10
          text-center
          transition-all
          duration-200

          ${
            dragging
              ? "border-blue-500 bg-blue-50"
              : "border-slate-300 bg-white"
          }

          hover:border-blue-400
          hover:bg-slate-50
        `}
      >
        <UploadCloud
          size={48}
          className="mb-4 text-blue-600"
        />

        <h2 className="text-xl font-semibold">
          Drag & Drop Files
        </h2>

        <p className="mt-2 text-slate-500">
          Drop a <strong>.txt</strong> or{" "}
          <strong>.huff</strong> file here,
          or click to browse.
        </p>
      </div>
    </>
  );
}