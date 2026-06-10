import { FaHome } from "react-icons/fa";
export default function Sidebar() {
  return (
    <div className="bg-gray-900 text-white p-4 min-h-screen w-64">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
    <div className="bg-gray-900 text-white p-6 min-h-screen w-64">  
      <h2 className="text-2xl font-bold mb-8">LearnHub</h2>

      <ul className="space-y-4">
        <li className="flex items-center gap-2">
  <FaHome />
  Home
</li>
        <li className="flex items-center gap-2">
  <FaHome />
  Courses
</li>
        <li className="flex items-center gap-2">
  <FaHome />
  Progress
</li>
        <li className="flex items-center gap-2">
  <FaHome />
  Settings
</li>
      </ul>
      </div>
    </div>
  );
}