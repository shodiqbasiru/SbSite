"use client";

import React, { useEffect, useState } from "react";
import { Timeline } from "primereact/timeline";
import { classNames } from "primereact/utils";

import { useExperience } from "@/hook/useExperience";
import { Experience } from "@/types/experience";
import { convertDate, sanitizeContent } from "@/utils/helper";

export default function ExperienceComponent() {
  const [isMobile, setIsMobile] = useState(false);

  const {
    data: { experiences },
    methods: { getExperiences },
  } = useExperience();

  useEffect(() => {
    // Check if the device is mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  useEffect(() => {
    getExperiences();
  }, []);

  const content = (experience: Experience) => {
    return (
      <div className="mb-8 overflow-hidden rounded-2xl bg-slate-800 text-left font-body lg:mb-0">
        <div className="mb-2 flex justify-between">
          <div className="hidden lg:block"></div>
          <p className="font-button w-full rounded-none bg-slate-700 px-4 py-2 font-medium lg:w-auto lg:rounded-b-xl">
            {convertDate(experience.startDate, experience.endDate)}
          </p>
        </div>
        <div className="px-4 pb-4">
          <h3 className="font-subHeading text-xl font-bold text-amber-500">
            {experience.companyName},{" "}
            <span className="text-sm font-light text-slate-50">
              {experience.location}
            </span>
          </h3>
          <div className="flex justify-between text-slate-400">
            <h4 className="mb-1 font-semibold">{experience.position}</h4>
            <p className="mb-1">{experience.employmentType}</p>
          </div>
          <div
            className="desc"
            dangerouslySetInnerHTML={sanitizeContent(experience.description!)}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="mb-16">
      <h2 className="mb-4 font-subHeading text-2xl font-bold">Experiences</h2>

      <Timeline
        value={experiences}
        align={isMobile ? "left" : "alternate"}
        content={content}
        pt={{
          root: { className: classNames("w-full lg:w-[calc(100%-4rem)]") },
          marker: { className: classNames("bg-slate-100 border-4") },
          opposite: { className: classNames(isMobile ? "hidden" : "block") },
        }}
      />
    </div>
  );
}
