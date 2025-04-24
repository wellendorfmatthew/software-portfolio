import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="w-1/2 flex flex-col items-center justify-center gap-8">
        <h1 className="text-extraLarge font-semibold">About Me</h1>
        <h3 className="text-medium font-bold">I’m Maddie, I work as a Software Engineer at Geaux Network</h3>
        <p className="text-small text-wrap text-left w-[70%] mt-16">
            I have professional experience working on the frontend and backend of web applications. I 
            have expertise in Javascript, Typescript, Next.js, React, HTML, CSS, and Github. My goal is to 
            improve my skills so that I can take my knowledge and experience to the next level. I’d love 
            to work somewhere that will allow me to do this.
        </p>
        <div className="flex justify-between items-center gap-12 rounded-xl bg-tertiary py-2 px-4 mt-2">
            <div className="flex justify-center items-center">
                <h1 className="text-extraLarge font-bold">1</h1>
                <h1 className="text-extraLarge font-bold">+</h1>
            </div>
            <p 
                className="font-bold text-small text-wrap w-24"
            >
                Years of experience
            </p>
        </div>
    </div>
  );
}
