"use client";

import { useEffect } from "react";
import { Timeline } from "primereact/timeline";
import { classNames } from "primereact/utils";

import { useEducation } from "@/hook/useEducation";
import { Education } from "@/types/education";
import { convertDate, sanitizeContent } from "@/utils/helper";

export default function EducationComponent() {
  const {
    data: { educations },
    methods: { getEducations },
  } = useEducation();

  useEffect(() => {
    getEducations();
  }, []);

  const content = (education: Education) => {
    return (
      <div className="mb-8 overflow-hidden rounded-2xl bg-slate-800 text-left font-body">
        <div className="mb-2 flex justify-between">
          <div className="hidden lg:block"></div>
          <p className="w-full rounded-none bg-slate-700 px-4 py-2 font-medium lg:w-auto lg:rounded-b-xl font-button">
            {convertDate(education.startDate, education.endDate)}
          </p>
        </div>
        <div className="px-4 pb-4">
          <h3 className="text-xl font-bold text-amber-500 font-subHeading">
            {education.institution},{" "}
            <span className="text-sm font-light text-slate-50">
              {education.location}
            </span>
          </h3>
          <div className="text-slate-400">
            {education.degree && (
              <h4 className="mb-1 font-semibold">{education.degree}</h4>
            )}
            {education.program && (
              <h4 className="mb-1 font-semibold">{education.program}</h4>
            )}
          </div>
          <div
            className="desc"
            dangerouslySetInnerHTML={sanitizeContent(education.description)}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="mb-16">
      <h2 className="mb-4 text-2xl font-bold font-subHeading">Education</h2>

      <Timeline
        value={educations}
        content={content}
        pt={{
          root: { className: classNames("w-full lg:w-[calc(100%-4rem)]") },
          opposite: { className: classNames("hidden") },
          marker: { className: classNames("bg-slate-100 border-4") },
        }}
      />
    </div>
  );
}
