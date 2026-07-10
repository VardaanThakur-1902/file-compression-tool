interface Props {
  encoded: string;
}

export default function OutputPanel({
  encoded,
}: Props) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">

      <div className="mb-4 flex items-center justify-between">

        <h2 className="text-xl font-bold">
          Compressed Output
        </h2>

        <span className="rounded bg-blue-100 px-3 py-1 text-sm text-blue-700">
          Binary
        </span>

      </div>

      <textarea
        readOnly
        value={encoded}
        className="h-56 w-full resize-none rounded-lg border border-slate-300 bg-slate-50 p-4 font-mono text-sm"
      />

    </div>
  );
}