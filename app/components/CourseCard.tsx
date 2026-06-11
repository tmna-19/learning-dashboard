"use client";

import { motion } from "framer-motion";

export default function CourseCard({
  title,
  progress,
}: {
  title: string;
  progress: number;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
      }}
      className="bg-slate-800 rounded-2xl p-5 border border-slate-700"
    >
      <h3 className="font-bold text-lg text-white">
        {title}
      </h3>

      <p className="text-slate-400 mt-2">
        Progress: {progress}%
      </p>

      <div className="w-full bg-slate-700 h-2 rounded mt-4">
        <div
          className="bg-blue-500 h-2 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </motion.div>
  );
}