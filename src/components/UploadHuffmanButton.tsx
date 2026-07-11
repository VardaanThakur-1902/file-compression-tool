import type { HuffmanFile } from "../types/HuffmanFile";

interface Props {
  onLoad: (file: HuffmanFile) => void;
}

export default function UploadHuffmanButton({
  onLoad,
}: Props) {

  const handleFile = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {

      const parsed = JSON.parse(
        reader.result as string
      ) as HuffmanFile;

      onLoad(parsed);

    };

    reader.readAsText(file);

  };

  return (

    <label
      className="
      cursor-pointer
      rounded-lg
      bg-orange-600
      px-6
      py-3
      text-white
      font-semibold
      hover:bg-orange-700
      transition
      "
    >

      Upload .huff

      <input
        hidden
        type="file"
        accept=".huff"
        onChange={handleFile}
      />

    </label>

  );

}