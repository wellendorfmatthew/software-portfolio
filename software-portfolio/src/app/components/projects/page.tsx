'use client'
import { useState } from "react";
import Image from "next/image";
import { ProjectList } from "../../../../lib/project";
import { Project } from "../../../../lib/project";

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>(ProjectList);

  return (
    <div className="w-1/2 flex flex-col items-center justify-center gap-8">
        <h1 className="text-extraLarge font-semibold ">Projects</h1>
        <div className="w-full flex flex-col gap-32">
        {
            projects.map((project, index) => (
                <div className="flex flex-col gap-8" key={index}>
                    <h1 className="text-medium font-bold text-center">{project.name}</h1>
                    <div className="bg-tertiary w-full h-[400px] rounded-3xl flex justify-center items-center">
                        <div className="bg-quaternary w-10/12 h-10/12 rounded-2xl">
                            <Image src={project.image} alt="Project Image" className="w-full h-full" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        {
                            project.descriptions.map((bullet, id) => (
                                <div className="flex justify-start items-center gap-4 w-full text-wrap" key={id}>
                                    <div className="circle text-transparent text-[2px]">1</div>
                                    <p className="text-small">{bullet.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ))
        }
        </div>

    </div>
  );
}
