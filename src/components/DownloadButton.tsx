import type { HuffmanFile } from "../types/HuffmanFile";

interface Props {
  huffmanFile: HuffmanFile;
}

export default function DownloadButton({
  huffmanFile,
}: Props) {

  const download = () => {

    const json = JSON.stringify(
      huffmanFile,
      null,
      2
    );

    const blob = new Blob(
      [json],
      {
        type: "application/octet-stream",
      }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "compressed.huff";

    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={download}
      className="
      rounded-lg
      bg-purple-600
      px-6
      py-3
      text-white
      font-semibold
      hover:bg-purple-700
      transition
      "
    >
      Download .huff
    </button>
  );
}