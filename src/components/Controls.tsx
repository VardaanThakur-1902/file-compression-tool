interface Props {
  onCompress: () => void;
}

export default function Controls({
  onCompress,
}: Props) {
  return (
    <button
      onClick={onCompress}
      className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
    >
      Compress
    </button>
  );
}