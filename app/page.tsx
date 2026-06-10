import StatsCard from "./components/StatsCard";
import Sidebar from "./components/Sidebar";
import HeroTile from "./components/HeroTile";
import CourseCard from "./components/CourseCard";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-6">
        <HeroTile />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <StatsCard title="Courses" value="12" />
          <StatsCard title="Hours Learned" value="48" />
          <StatsCard title="Certificates" value="3" />
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
</div>
        </div>
      </main>
    </div>
  );
}