import TopBar from "./components/TopBar";
import Faq from "./sessions/Faq";
import Pillars from "./sessions/Pillars";
import Presentation from "./sessions/Presentation";
import Projects from "./sessions/Projects";

export default function Home() {
  return (
    <div class="">
      <TopBar />
      <Presentation />
      <Projects />
      <Pillars />
      <Faq />
    </div>
  );
}
