export default function Header() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">
        Learning Dashboard
      </h1>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        New Course
      </button>
    </div>
  );
}