import React from "react";
import Image from "next/image";
import HeroImage from "@/assets/shodiq.jpg";
import IconGithub from "@/assets/icons/github.svg";
import IconInstagram from "@/assets/icons/instagram.svg";
import IconLinkedIn from "@/assets/icons/linkedin.svg";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import Link from "next/link";

export default function SideHero() {
  return (
    <aside>
      <div className="hide-scroll h-[100dvh] overflow-y-scroll rounded-2xl bg-slate-900 p-8 shadow-lg">
        <Image
          src={HeroImage}
          alt="Hero Image"
          width={300}
          height={300}
          className="mx-auto h-auto w-auto rounded-xl"
          priority
        />

        <div className="my-4 text-center">
          <Link href="/" className="text-2xl font-bold">M. Shadiq Firmansyah Basiru</Link>
          <h3 className="text-lg text-slate-400">
            Fullstack Developer Enthusiast
          </h3>
        </div>

        <div className="mx-auto my-8 h-1 w-10/12 rounded-full bg-slate-500"></div>

        <div className="mx-8">
          <div className="mb-4 flex items-center gap-4">
            <span className="rounded-xl border border-amber-500 bg-transparent p-4">
              <MdEmail className="inline-block text-amber-500" size={24} />
            </span>
            <div>
              <h3 className="font-semibold uppercase">Email</h3>
              <p className="text-slate-300">shodiqbasiru@gmail.com</p>
            </div>
          </div>

          <div className="mb-4 flex items-center gap-4">
            <span className="rounded-xl border border-amber-500 bg-transparent p-4">
              <MdPhone className="inline-block text-amber-500" size={24} />
            </span>
            <div>
              <h3 className="font-semibold uppercase">Whatsapp</h3>
              <p className="text-slate-300">+6281394600805</p>
            </div>
          </div>

          <div className="mb-4 flex items-center gap-4">
            <span className="rounded-xl border border-amber-500 bg-transparent p-4">
              <IoMdCalendar className="inline-block text-amber-500" size={24} />
            </span>
            <div>
              <h3 className="font-semibold uppercase">Birthdate</h3>
              <p className="text-slate-300">May 20, 2000</p>
            </div>
          </div>

          <div className="mb-4 flex items-center gap-4">
            <span className="rounded-xl border border-amber-500 bg-transparent p-4">
              <MdLocationPin
                className="inline-block text-amber-500"
                size={24}
              />
            </span>
            <div>
              <h3 className="font-semibold uppercase">Location</h3>
              <p className="text-slate-300">Bandung, West Java, Indonesia</p>
            </div>
          </div>
        </div>

        <div className="mx-8 my-8">
          <h3 className="text-center font-semibold uppercase">Social Media</h3>
          <div className="my-4 flex items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/shodiq-basiru/"
              target="_blank"
              rel="noreferrer"
              className="h-[45px] w-[45px] bg-transparent"
            >
              <Image src={IconLinkedIn} alt="LinkedIn" />
            </a>
            <a
              href="https://www.github.com/shodiqbasiru"
              target="_blank"
              rel="noreferrer"
              className="h-[45px] w-[45px] bg-transparent"
            >
              <Image src={IconGithub} alt="GitHub" />
            </a>
            <a
              href="https://www.instagram.com/shodiqbasiru_"
              target="_blank"
              rel="noreferrer"
              className="h-[45px] w-[45px] bg-transparent"
            >
              <Image src={IconInstagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
