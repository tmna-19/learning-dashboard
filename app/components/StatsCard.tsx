export default function StatsCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition">
      <h3 className="text-slate-400 text-sm">
        {title}
      </h3>

      <p className="text-3xl font-bold mt-2">
        {value}
      </p>
    </div>
  );
}