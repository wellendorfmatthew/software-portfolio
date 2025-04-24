'use client'
import { useState } from "react";

export default function Skills() {
    const [skillList, setSkillList] = useState(
        ["Typescript", "Javascript", "React", "HTML", "CSS", "Tailwind CSS", "Next.js", "MongoDB", "SQL", "Git"]
    )

  return (
    <div className="w-1/2 flex flex-col items-center justify-center gap-8">
        <h1 className="text-extraLarge font-semibold">Skills</h1>
        <div className="grid grid-cols-2 gap-16 w-full">
            {
                skillList.map((skill, index) => (
                    <div className="flex justify-between items-center" key={index}>
                        <p className="text-small font-bold">{skill}</p>
                        <div className="bg-secondary rounded-2xl w-2/3 text-transparent h-[15px]">1</div>
                    </div>
                ))
            }
        </div>
    </div>
  );
}
