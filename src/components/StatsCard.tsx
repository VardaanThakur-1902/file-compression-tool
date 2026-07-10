interface Props {
  title: string;
  value: string;
}

export default function StatsCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-lg border border-slate-200">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-slate-900">
        {value}
      </h2>

    </div>
  );
}