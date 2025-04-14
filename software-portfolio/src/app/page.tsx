import Image from "next/image";
import Header from "./components/header/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen w-screen bg-primary">
      <Header />
    </div>
  );
}
