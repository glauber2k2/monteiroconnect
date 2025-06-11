import TopBar from "./components/TopBar";
import Ai from "./sessions/Ai";
import Faq from "./sessions/Faq";
import Footer from "./sessions/Footer";
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
      <Ai />
      <Faq />
      <Footer />
    </div>
  );
}
