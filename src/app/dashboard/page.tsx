"use client"

import { useEducation } from "@/hook/useEducation";
import { useExperience } from "@/hook/useExperience";
import { usePortfolio } from "@/hook/usePortfolio";
import { useSkill } from "@/hook/useSkill";
import { Card } from "primereact/card";
import { useEffect } from "react";

export default function DashboardHomePage() {

  const {data:{portfolios}, methods:{getPortfolios}} = usePortfolio();
  const {data: {skills}, methods:{getSkills}} = useSkill();
  const {data:{experiences},methods:{getExperiences}} = useExperience();
  const {data:{educations},methods:{getEducations}} = useEducation();

  const totalPortfolio = portfolios.length;
  const totalSkills = skills.length;
  const totalExperience = experiences.length;
  const totalEducation = educations.length;

  useEffect(() => {
    getPortfolios();
    getSkills();
    getExperiences();
    getEducations();
  }, []);

  const items = [
    {
      title: "Total Portfolio",
      value: totalPortfolio,
      icon: "pi pi-briefcase",
      color: "bg-blue-500",
    },
    {
      title: "Total Skills",
      value: totalSkills,
      icon: "pi pi-star",
      color: "bg-yellow-500",
    },
    {
      title: "Total Experience",
      value: totalExperience,
      icon: "pi pi-building",
      color: "bg-green-500",
    },
    {
      title: "Total Education",
      value: totalEducation,
      icon: "pi pi-graduation-cap",
      color: "bg-red-500",
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-6 gap-4 bg-slate-800 border-slate-700 rounded-2xl p-4">
        {items.map((item) => (
          <Card className="col-span-2 bg-slate-700 border border-slate-600 shadow-lg p-4 rounded-xl hover:bg-slate-800 transition-colors duration-300 ease-in-out cursor-pointer">
            <div className="flex items-center">
              <i
                className={`${item.icon} text-4xl ${item.color} rounded-full p-4`}
              ></i>
              <div className="ml-4">
                <h1 className="text-2xl font-semibold">{item.title}</h1>
                <p className="text-2xl font-semibold">{item.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
