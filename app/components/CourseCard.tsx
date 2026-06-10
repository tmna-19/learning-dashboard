export default function CourseCard() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-bold text-lg">
        React Fundamentals
      </h3>

      <p className="text-gray-600 mt-2">
        Progress: 65%
      </p>

      <div className="w-full bg-gray-200 h-2 rounded mt-2">
        <div className="bg-blue-500 h-2 rounded w-2/3"></div>
      </div>
    </div>
  );
}