import Sidebar from "@/components/Sidebar";
import HeroTile from "@/components/HeroTile";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main>
        <HeroTile />
      </main>
    </div>
  );
}