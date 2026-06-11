export default function ActivityCard() {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
      <h3 className="font-bold mb-4">
        Weekly Activity
      </h3>

      <div className="flex items-end gap-2 h-24">
        <div className="bg-blue-500 w-5 h-10 rounded"></div>
        <div className="bg-blue-500 w-5 h-16 rounded"></div>
        <div className="bg-blue-500 w-5 h-8 rounded"></div>
        <div className="bg-blue-500 w-5 h-20 rounded"></div>
        <div className="bg-blue-500 w-5 h-12 rounded"></div>
      </div>
    </div>
  );
}