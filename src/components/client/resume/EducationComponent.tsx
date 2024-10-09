"use client";

import { Timeline } from "primereact/timeline";
import { classNames } from "primereact/utils";
import React from "react";

interface EducationTimeLine {
  school?: string;
  degree?: string;
  date?: string;
  location?: string;
  program?: string;
  descriptions?: string[];
}

export default function EducationComponent() {
  const educations: EducationTimeLine[] = [
    {
      school: "Enigma Camp",
      date: "January 2024 - May 2024",
      location: "Malang, Indonesia",
      program: "Software Development",
      descriptions: [
        "<strong>Backend Development</strong>: Expert in building efficient and secure RESTful APIs using Java and Spring Boot. Proficient in database management with PostgreSQL.",
        "<strong>Frontend Development</strong>: Proficient in creating dynamic user interfaces using JavaScript and React.",
        "<strong>Mobile Development</strong>:  Experienced in developing cross-platform mobile applications with React Native and Expo.",
      ],
    },
    {
      school: "Eduwork",
      date: "April 2023 - September 2023",
      location: "Online",
      program: "Fullstack Web Development",
      descriptions: [
        "Mastered full-stack development focusing on PHP, Vue.js, and Laravel for building dynamic web applications.",
        "Developed a responsive web-based Point of Sale (POS) application as the final project using Vue.js and Laravel.",
      ],
    },
    {
      school: "Bangkit Academy",
      date: "February 2022 - July 2022",
      location: "Online",
      program: "Mobile Development",
      descriptions: [
        "Participate in Bangkit Academy's independent study program focusing on Android app development using Kotlin.",
        "Mastered the fundamentals of Kotlin programming language, SOLID principles, and good UI/UX development.",
      ],
    },
    {
      school: "Universitas Komputer Indonesia",
      degree: "Bachelor of Information System",
      date: "September 2019 - September 2023",
      location: "Bandung, Indonesia",
    },
  ];

  const content = (education: EducationTimeLine) => {
    return (
      <div className="mb-8 overflow-hidden rounded-2xl bg-slate-800 text-left">
        <div className="mb-2 flex justify-between">
          <div></div>
          <p className="rounded-b-xl bg-slate-700 px-4 py-2 font-medium">
            {education.date}
          </p>
        </div>
        <div className="px-4 pb-4">
          <h3 className="text-xl font-bold text-amber-500">
            {education.school},{" "}
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
          <ul className="list-inside list-disc ps-4">
            {education.descriptions?.map((description, index) => (
              <li
                key={index}
                dangerouslySetInnerHTML={{ __html: description }}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="mb-16">
      <h2 className="mb-4 text-3xl font-bold">Education</h2>

      <Timeline
        value={educations}
        content={content}
        pt={{
          root: { className: classNames("w-[calc(100%-4rem)]") },
          opposite: { className: classNames("hidden") },
          marker: { className: classNames("bg-slate-100 border-4") },
        }}
      />
    </div>
  );
}
