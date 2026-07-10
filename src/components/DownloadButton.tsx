interface Props {
  encoded: string;
}

export default function DownloadButton({
  encoded,
}: Props) {
  const download = () => {
    const blob = new Blob([encoded], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "compressed.huff";

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

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
        font-semibold
        text-white
        transition
        hover:bg-purple-700
      "
    >
      Download .huff
    </button>
  );
}