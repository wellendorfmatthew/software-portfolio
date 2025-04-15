import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="w-1/2 flex flex-col items-center justify-center gap-8">
        <h3 className="text-medium font-bold font-main">Hi, I'm Matthew</h3>
        <h1 className="text-extraLarge font-semibold font-secondary">Software Engineer</h1>
        <p className="text-small-medium font-secondary w-9/12 text-wrap text-center mt-12">
        I am a software developer looking to establish myself in the tech industry
        and improve my skill set
        </p>
        <div className="flex items-center justify-center gap-8">
            <Github size={32} color="white" />
            <Linkedin size={32} color="white" />
        </div>
        <div className="flex gap-4 items-center justify-center mt-4">
            <button 
                className="bg-secondary p-button text-medium font-semibold rounded-2xl border-2 border-secondary cursor-pointer font-main"
            >
            About Me
            </button>
            <button 
                className="bg-primary p-button text-medium font-semibold rounded-2xl cursor-pointer border-2 border-secondary font-main"
            >
            Contact Me
            </button>
        </div>
    </div>
  );
}
