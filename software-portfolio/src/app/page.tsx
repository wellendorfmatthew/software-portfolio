import Image from "next/image";
import Header from "./components/header/page";
import Home from "./components/home/page";
import AboutMe from "./components/about-me/page";
import Skills from "./components/skills/page";
import Projects from "./components/projects/page";
import Contact from "./components/contact/page";

export default function Root() {
  return (
    <div className="flex flex-col items-center gap-40">
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
