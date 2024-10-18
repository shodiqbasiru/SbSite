"use client";

import Image from "next/image";
import React from "react";
import HeroImage from "@/assets/shodiq.jpg";
import ClientLink from "../client/ClientLink";
import { usePathname } from "next/navigation";

function getBasePath(pathname: string): string {
  const segments = pathname.split("/");
  return segments.length > 2
    ? `/${segments[1]}/${segments[2]}`
    : `/${segments[1]}`;
}

export default function DashboardSidebarComponent() {
  const pathname = usePathname();
  const basePath = getBasePath(pathname);

  const navItems = [
    {
      label: "Dashboard",
      url: "/dashboard",
      icon: "pi pi-home",
    },
    {
      label: "Portfolio",
      url: "/dashboard/portfolio",
      icon: "pi pi-briefcase",
    },
    {
      label: "Skill",
      url: "/dashboard/skill",
      icon: "pi pi-star",
    },
    {
      label: "Experience",
      url: "/dashboard/experience",
      icon: "pi pi-building",
    },
    {
      label: "Education",
      url: "/dashboard/education",
      icon: "pi pi-book",
    },
  ];

  return (
    <aside className="hide-scroll h-[100dvh] overflow-y-scroll rounded-2xl bg-slate-900 p-8 shadow-lg">
      <div className="text-center">
        <Image
          src={HeroImage}
          alt="Hero Image"
          width={0}
          height={0}
          className="mx-auto h-[250px] w-[250px] rounded-full object-cover"
          priority
        />
        <div className="my-4">
          <ClientLink
            href="/"
            classNames="text-2xl font-bold text-white transition-colors duration-300 hover:text-amber-500"
          >
            M. Shadiq Firmansyah Basiru
          </ClientLink>
          <h3 className="text-lg text-slate-400">
            Fullstack Developer Enthusiast
          </h3>
        </div>
      </div>

      <div className="mx-auto my-8 h-1 w-10/12 rounded-full bg-slate-500"></div>

      <nav>
        <div className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <ClientLink
              key={item.url}
              href={item.url}
              classNames={`bg-slate-800 p-5 flex items-center gap-4 rounded-xl text-lg uppercase font-semibold transition-colors duration-300 ${
                basePath === item.url
                  ? "border border-amber-600 text-amber-600"
                  : "bg-slate-800 hover:bg-amber-600 hover:text-white text-slate-100"
              }`}
            >
              <div>
                <span
                  className={
                    basePath === item.url
                      ? "bg-amber-600 text-slate-100 rounded p-2"
                      : "rounded-full p-2 hover:bg-amber-600 hover:text-white"
                  }
                >
                  <i className={item.icon}></i>
                </span>
              </div>
              {item.label}
            </ClientLink>
          ))}
        </div>
      </nav>
    </aside>
  );
}
