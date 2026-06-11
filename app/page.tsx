"use client";
import { useState } from "react";
import StatsCard from "./components/StatsCard";
import Sidebar from "./components/Sidebar";
import HeroTile from "./components/HeroTile";
import CourseCard from "./components/CourseCard";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
      <div
        className={`flex min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-black"
        }`}>
        <Sidebar />

        <main>
        <div className="flex justify-end mb-4">
        <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded-lg bg-blue-500 text-white">
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
        </div>
        <HeroTile />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <StatsCard title="Courses" value="12" />
          <StatsCard title="Hours Learned" value="48" />
          <StatsCard title="Certificates" value="3" />
          <StatsCard title="Learning Streak" value="15 Days" />
        </div>
        <div className="bg-white rounded-xl shadow p-4 mt-6 text-black">
        <h3 className="text-xl font-bold mb-3">
        Profile
        </h3>

        <p>👩 Tamanna</p>
        <p>🎓 Frontend Developer</p>
        <p>🚀 Learning React & Next.js</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            
        <CourseCard
        title="React Fundamentals"
        progress={65}
        />

        <CourseCard
        title="JavaScript Mastery"
        progress={80}
        />

        <CourseCard
        title="Next.js Basics"
        progress={40}
        />

        <CourseCard
        title="TypeScript Essentials"
        progress={55}
        />
        {/*Footer*/}
        <footer className="text-center text-gray-500 mt-10">
        Built with Next.js & Tailwind CSS by Tamanna
        </footer>
        </div>
        </div>
      </main>
    </div>
  );
}