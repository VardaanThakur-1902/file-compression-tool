interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function TextInput({
  value,
  onChange,
}: Props) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Type or paste text here..."
      className="h-80 w-full resize-none rounded-xl border border-slate-300 p-4 text-lg outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
    />
  );
}