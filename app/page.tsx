import Sidebar from "./components/Sidebar";
import HeroTile from "./components/HeroTile";
import CourseCard from "./components/CourseCard";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-6">
        <HeroTile />

        <div className="flex min-h-screen bg-gray-100">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </main>
    </div>
  );
}