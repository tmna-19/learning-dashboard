export default function Sidebar() {
  return (
    <div className="bg-gray-900 text-white p-4 min-h-screen w-64">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      <ul className="space-y-4">
        <li>Home</li>
        <li>Courses</li>
        <li>Progress</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}