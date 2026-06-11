"use client";
import { motion } from "framer-motion";
export default function HeroTile() {
  return (
    <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="rounded-3xl p-8 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 shadow-lg"
>
  <h1 className="text-4xl font-bold">
    Welcome Back Tamanna 👋
  </h1>

  <p className="mt-3 text-blue-100">
    Continue your learning journey and track your progress
  </p>
</motion.div>
  );
}