import Sidebar from "./components/Sidebar";
import HeroTile from "./components/HeroTile";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-6">
        <HeroTile />
      </main>
    </div>
  );
}