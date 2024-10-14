import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroImage from "@/assets/shodiq.jpg";
import ClientLink from "../client/ClientLink";

export default function DashboardSidebarComponent() {
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
          <Link
            href="/"
            className="text-2xl font-bold text-white transition-colors duration-300 hover:text-amber-500"
          >
            M. Shadiq Firmansyah Basiru
          </Link>
          <h3 className="text-lg text-slate-400">
            Fullstack Developer Enthusiast
          </h3>
        </div>
      </div>

      <div className="mx-auto my-8 h-1 w-10/12 rounded-full bg-slate-500"></div>

      <nav>
        <div className="flex flex-col space-y-4">
          <ClientLink
            href="/dashboard"
            classNames="bg-slate-800 hover:bg-amber-600 p-5 rounded-xl text-slate-100 text-lg uppercase font-semibold hover:text-white transition-colors duration-300"
          >
            Dashboard
          </ClientLink>

          <ClientLink
            href="/dashboard/portfolio"
            classNames="bg-slate-800 hover:bg-amber-600 p-5 rounded-xl text-slate-100 text-lg uppercase font-semibold hover:text-white transition-colors duration-300"
          >
            Portfolio
          </ClientLink>

          <ClientLink
            href="/dashboard/skill"
            classNames="bg-slate-800 hover:bg-amber-600 p-5 rounded-xl text-slate-100 text-lg uppercase font-semibold hover:text-white transition-colors duration-300"
          >
            Skills
          </ClientLink>
        </div>
      </nav>
    </aside>
  );
}
