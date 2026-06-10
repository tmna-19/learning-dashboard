"use client";

import { motion } from "framer-motion";
import StatsCard from "./StatsCard";

export default function HeroTile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-blue-500 text-white p-6 rounded-xl"
    >
      <h1 className="text-3xl font-bold">
        Welcome Back Tamanna 👋
      </h1>

      <p className="mt-2">
        Continue your learning journey
      </p>
    </motion.div>
    
  );
}
