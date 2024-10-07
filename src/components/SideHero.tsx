import React from "react";
import Image from "next/image";
import HeroImage from "@/app/assets/shodiq.jpg";
import IconGithub from "@/app/assets/icons/github.svg";
import IconInstagram from "@/app/assets/icons/instagram.svg";
import IconLinkedIn from "@/app/assets/icons/linkedin.svg";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";

export default function SideHero() {
  return (
    <aside>
      <div className="p-8 rounded-2xl bg-slate-900 shadow-lg overflow-y-scroll h-screen hide-scroll">
        <Image
          src={HeroImage}
          width={400}
          height={400}
          alt="Hero Image"
          className="aspect-auto rounded-xl"
        />

        <div className="my-4 text-center">
          <h2 className="text-2xl font-bold">M. Shadiq Firmansyah Basiru</h2>
          <h3 className="text-lg text-slate-400">
            Fullstack Developer Enthusiast
          </h3>
        </div>

        <div className="w-10/12 h-1 bg-slate-500 my-8 rounded-full mx-auto"></div>

        <div className="mx-8">
          <div className="flex gap-4 items-center mb-4">
            <span className="p-4 bg-transparent border rounded-xl border-amber-500">
              <MdEmail className="inline-block text-amber-500" size={24} />
            </span>
            <div>
              <h3 className="uppercase font-semibold">Email</h3>
              <p className="text-slate-300">shodiqbasiru@gmail.com</p>
            </div>
          </div>

          <div className="flex gap-4 items-center mb-4">
            <span className="p-4 bg-transparent border rounded-xl border-amber-500">
              <MdPhone className="inline-block text-amber-500" size={24} />
            </span>
            <div>
              <h3 className="uppercase font-semibold">Whatsapp</h3>
              <p className="text-slate-300">+6281394600805</p>
            </div>
          </div>

          <div className="flex gap-4 items-center mb-4">
            <span className="p-4 bg-transparent border rounded-xl border-amber-500">
              <IoMdCalendar className="inline-block text-amber-500" size={24} />
            </span>
            <div>
              <h3 className="uppercase font-semibold">Birthdate</h3>
              <p className="text-slate-300">May 20, 2000</p>
            </div>
          </div>

          <div className="flex gap-4 items-center mb-4">
            <span className="p-4 bg-transparent border rounded-xl border-amber-500">
              <MdLocationPin
                className="inline-block text-amber-500"
                size={24}
              />
            </span>
            <div>
              <h3 className="uppercase font-semibold">Location</h3>
              <p className="text-slate-300">Bandung, West Java, Indonesia</p>
            </div>
          </div>
        </div>

        <div className="mx-8 my-8">
          <h3 className="uppercase font-semibold text-center">Social Media</h3>
          <div className="flex gap-4 items-center my-4 justify-center">
            <a
              href="https://www.linkedin.com/in/shodiqbasiru"
              target="_blank"
              rel="noreferrer"
              className="bg-transparent w-[45px] h-[45px]"
            >
              <Image src={IconLinkedIn} alt="LinkedIn" />
            </a>
            <a
              href="https://www.github.com/shodiqbasiru"
              target="_blank"
              rel="noreferrer"
              className="bg-transparent w-[45px] h-[45px]"
            >
              <Image src={IconGithub} alt="GitHub" />
            </a>
            <a
              href="https://www.instagram.com/shodiqbasiru"
              target="_blank"
              rel="noreferrer"
              className="bg-transparent w-[45px] h-[45px]"
            >
              <Image src={IconInstagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
