import { FaFire } from "react-icons/fa";

export default function StreakCard() {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
      <FaFire className="text-orange-500 text-3xl" />

      <h3 className="mt-3 text-slate-400">
        Learning Streak
      </h3>

      <p className="text-4xl font-bold">
        15 Days
      </p>
    </div>
  );
}