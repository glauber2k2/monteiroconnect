import { AttributeAutomaticSlider } from "./components/AttributesAutomaticSlider";
import TopBar from "./components/TopBar";
import About from "./sessions/About";
import Ai from "./sessions/Ai";
import Faq from "./sessions/Faq";
import Footer from "./sessions/Footer";
import Pillars from "./sessions/Pillars";
import Presentation from "./sessions/Presentation";
import Projects from "./sessions/Projects";

export default function Home() {
  return (
    <div className="">
      <TopBar />
      <Presentation />
      <AttributeAutomaticSlider />
      <Projects />
      <About />
      <Pillars />
      <Ai />
      <Faq />
      <Footer />
    </div>
  );
}
