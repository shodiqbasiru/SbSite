import SkillSerivce from "@/service/SkillService";
import { Skill } from "@/types/skill";
import Image from "next/image";
import React from "react";

export default async function SkillComponent() {
  const service = SkillSerivce();
  const { data } = await service.getSkills();

  return (
    <div className="mb-16 w-[calc(100%-4rem)]">
      <h2 className="mb-4 text-3xl font-bold">Skills</h2>

      <div className="grid grid-cols-4 gap-4">
        {data.map((skill: Skill, index: number) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-xl bg-slate-800 p-4"
          >
            <Image
              src={skill.iconUrl}
              alt={skill.title}
              width={48}
              height={48}
            />
            <div>
              <h3 className="text-xl font-bold">{skill.title}</h3>
              <p className="text-slate-400">{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
