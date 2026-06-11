import { FaHome } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="bg-gray-950 text-white p-6 min-h-screen w-64">
      <h2 className="text-2xl font-bold mb-8">
        LearnHub
      </h2>

      <ul className="space-y-4">
        <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
          <FaHome />
          Home
        </li>

        <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
          <FaHome />
          Courses
        </li>

        <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
          <FaHome />
          Progress
        </li>

        <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
          <FaHome />
          Settings
        </li>
      </ul>
    </aside>
  );
}