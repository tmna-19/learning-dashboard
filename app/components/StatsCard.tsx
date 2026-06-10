export default function StatsCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}