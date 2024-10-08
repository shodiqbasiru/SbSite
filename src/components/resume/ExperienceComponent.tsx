"use client";
import React from "react";
import { Timeline } from "primereact/timeline";
import { classNames } from "primereact/utils";

interface EexperienceTimeLine {
  company?: string;
  role?: string;
  status?: string;
  date?: string;
  location?: string;
  descriptions?: string[];
}

export default function ExperienceComponent() {
  const experiences: EexperienceTimeLine[] = [
    {
      company: "Pt. Jagad Creative Nusantara",
      role: "Frontend Developer",
      status: "Intern",
      date: "March 2023 - August 2023",
      location: "Bandung, Indonesia",
      descriptions: [
        "Responsible for frontend development of the band website using Laravel 9, Livewire, PHP, JavaScript, HTML, CSS, and Bootstrap technologies.",
        "Slicing the design from Figma into HTML, CSS, and JavaScript to produce a display that matches the design.",
        "Apply responsive design principles to ensure the website can be accessed properly on various devices.",
        "Collaborate with backend teams and UI/UX designers to ensure projects are on track.",
      ],
    },
    {
      company: "Dinas Komunikasi Informatika Dan Statistika Bandung Barat",
      role: "Fullstack Web Developer",
      status: "Intern",
      date: "August 2022 - September 2022",
      location: "Bandung Barat, Indonesia",
      descriptions: [
        "Responsible for developing web-based Public Service Mall (MPP) applications using Laravel.",
        "Designing database using MySQL to support login, registration, and user management features.",
        "Implement the necessary features for the application, such as product management, transaction recording, and reporting.",
        "Build a responsive and user-friendly frontend using HTML, CSS, and Bootstrap.",
      ],
    },
  ];

  const content = (experience: EexperienceTimeLine) => {
    return (
      <div className="overflow-hidden rounded-2xl bg-slate-800 text-left">
        <div className="mb-2 flex justify-between">
          <div></div>
          <p className="rounded-b-xl bg-slate-700 px-4 py-2 font-medium">
            {experience.date}
          </p>
        </div>
        <div className="px-4 pb-4">
          <h3 className="text-xl font-bold text-amber-500">
            {experience.company},{" "}
            <span className="text-sm font-light text-slate-50">
              {experience.location}
            </span>
          </h3>
          <div className="flex justify-between text-slate-400">
            <h4 className="mb-1 text-lg font-semibold">{experience.role}</h4>
            <p className="mb-1">{experience.status}</p>
          </div>
          <ul className="list-inside list-disc">
            {experience.descriptions?.map((description, index) => (
              <li key={index} className="text-slate-300">
                {description}
              </li>
            ))}
          </ul>
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
