"use client";

import { useState } from "react";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-slate-800 p-3 rounded-lg text-white"
        title="Open sidebar menu"
      >
        <FaBars />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 z-50
          w-64 min-h-screen
          bg-slate-950 text-white p-6
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="md:hidden mb-6"
          title="Close sidebar menu"
        >
          <FaTimes />
        </button>

        <h2 className="text-2xl font-bold mb-8">
          LearnHub
        </h2>

        <ul className="space-y-5">
          <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
            <FaHome />
            Home
          </li>

          <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
            <FaHome />
            Courses
          </li>

          <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
            <FaHome />
            Progress
          </li>

          <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
            <FaHome />
            Settings
          </li>
        </ul>
      </aside>
    </>
  );
}