"use client";
import React, { useEffect } from "react";
import { Timeline } from "primereact/timeline";
import { classNames } from "primereact/utils";
import { useExperience } from "@/hook/useExperience";
import { Experience } from "@/types/experience";
import DOMPurify from "dompurify";
import { convertDate, sanitizeContent } from "@/utils/helper";

export default function ExperienceComponent() {


  const {
    data: { experiences },
    methods: { getExperiences },
  } = useExperience();

  useEffect(() => {
    getExperiences();
  }, []);

  const content = (experience: Experience) => {

    return (
      <div className="overflow-hidden rounded-2xl bg-slate-800 text-left">
        <div className="mb-2 flex justify-between">
          <div></div>
          <p className="rounded-b-xl bg-slate-700 px-4 py-2 font-medium">
            {convertDate(experience.startDate, experience.endDate)}
          </p>
        </div>
        <div className="px-4 pb-4">
          <h3 className="text-xl font-bold text-amber-500">
            {experience.companyName},{" "}
            <span className="text-sm font-light text-slate-50">
              {experience.location}
            </span>
          </h3>
          <div className="flex justify-between text-slate-400">
            <h4 className="mb-1 text-lg font-semibold">
              {experience.position}
            </h4>
            <p className="mb-1">{experience.employmentType}</p>
          </div>
          <div className="desc" dangerouslySetInnerHTML={sanitizeContent(experience.description!)} />
        </div>
      </div>
    );
  };

  return (
    <div className="mb-16">
      <h2 className="mb-4 text-3xl font-bold">Experience</h2>

      <Timeline
        value={experiences}
        align="alternate"
        content={content}
        pt={{
          root: { className: classNames("w-[calc(100%-4rem)]") },
          marker: { className: classNames("bg-slate-100 border-4") },
        }}
      />
    </div>
  );
}
