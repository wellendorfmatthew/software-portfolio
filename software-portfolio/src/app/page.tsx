import Image from "next/image";
import Header from "./components/header/page";
import Home from "./components/home/page";

export default function Root() {
  return (
    <div className="flex flex-col items-center h-screen w-screen bg-primary gap-40">
      <Header />
      <Home />
    </div>
  );
}
