interface Props {
  onUpload: (text: string) => void;
}

export default function UploadButton({
  onUpload,
}: Props) {

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      onUpload(reader.result as string);
    };

    reader.readAsText(file);
  };

  return (
    <label
      className="
      cursor-pointer
      rounded-lg
      bg-green-600
      px-6
      py-3
      text-white
      font-semibold
      hover:bg-green-700
      transition
      "
    >
      Upload TXT

      <input
        hidden
        type="file"
        accept=".txt"
        onChange={handleFileChange}
      />

    </label>
  );
}