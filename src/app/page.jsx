import TopBar from "./components/TopBar";
import Presentation from "./sessions/Presentation/page";

export default function Home() {
  return (
    <main className="flex flex-col bg-gradient-to-tl from-[#060c11] to-[#0e1c27] min-h-screen text-white">
      <TopBar />
      <Presentation />
    </main>
  );
}
