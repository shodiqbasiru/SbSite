import Link from "next/link";
import React from "react";
import HeroImage from "@/assets/shodiq.jpg";
import Image from "next/image";

export default function Page() {
  return (
    <section className="relative grid min-h-[100dvh] w-full place-items-center">
      <h1 className="bg-text bg-text-1">MSFB</h1>
      <h1 className="bg-text bg-text-2">MSFB</h1>
      <div className="mx-auto flex flex-col rounded-2xl bg-slate-900/90 p-8 pb-8 shadow-lg shadow-amber-500/20">
        <div className="flex items-center gap-x-8">
          <Image
            src={HeroImage}
            alt="Hero Image"
            width={200}
            height={200}
            className="mx-auto mb-4 h-[250px] w-[250px] rounded-full object-cover object-center"
            priority
          />
          <div className="">
            <span className="text-xl text-amber-500">Hello, I'm</span>
            <h1 className="text-[3rem] font-bold">Shodiq Basiru</h1>
            <p className="text-xl text-slate-400">
              I'm a Fullstack Developer, I build web applications and mobile
              apps
            </p>

            <div className="mt-4 flex gap-x-4">
              <Link
                href="/about"
                className="transform rounded bg-amber-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-amber-600"
              >
                Get In Touch
              </Link>
              <button className="transform rounded bg-slate-50 px-4 py-2 text-slate-950 transition duration-300 ease-in-out hover:scale-105 hover:bg-slate-200">
                Download My CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
