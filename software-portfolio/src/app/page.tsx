import Image from "next/image";
import Header from "./components/header/page";
import Home from "./components/home/page";
import AboutMe from "./components/about-me/page";

export default function Root() {
  return (
    <div className="flex flex-col items-center gap-40">
      <Header />
      <Home />
      <AboutMe />
    </div>
  );
}
