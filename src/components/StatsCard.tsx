interface Props {
  title: string;
  value: string;
}

export default function StatsCard({
  title,
  value,
}: Props) {
  return (
    <div className="
      rounded-2xl
      border
      border-slate-200
      bg-linear-to-br
      from-white
      to-slate-50
      p-6
      shadow-md
      hover:shadow-xl
      transition
    ">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-slate-900">
        {value}
      </h2>

    </div>
  );
}