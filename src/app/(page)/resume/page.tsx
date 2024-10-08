import EducationComponent from "@/components/resume/EducationComponent";
import ExperienceComponent from "@/components/resume/ExperienceComponent";
import SkillComponent from "@/components/resume/SkillComponent";
import React from "react";

export default function ResumePage() {
  return (
    <>
      <ExperienceComponent />
      <EducationComponent />
      <SkillComponent />
    </>
  );
}
