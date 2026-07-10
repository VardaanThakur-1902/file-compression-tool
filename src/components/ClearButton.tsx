interface Props {
  onClear: () => void;
}

export default function ClearButton({
  onClear,
}: Props) {

  return (
    <button
      onClick={onClear}
      className="
      rounded-lg
      bg-red-500
      px-6
      py-3
      text-white
      font-semibold
      hover:bg-red-600
      transition
      "
    >
      Clear
    </button>
  );

}