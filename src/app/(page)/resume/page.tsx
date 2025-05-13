import EducationComponent from "@/components/client/resume/EducationComponent";
import ExperienceComponent from "@/components/client/resume/ExperienceComponent";
import SkillComponent from "@/components/SkillComponent";
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
