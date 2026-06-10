export default function CourseCard({
  title,
  progress,
}: {
  title: string;
  progress: number;
}) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-bold text-lg">{title}</h3>

      <p className="text-gray-600 mt-2">
        Progress: {progress}%
      </p>

      <div className="w-full bg-gray-200 h-2 rounded mt-2">
        <div
          className="bg-blue-500 h-2 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}