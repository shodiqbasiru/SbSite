import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";

import {
  BIRTHDATE,
  EMAIL,
  FULL_NAME,
  JOB_TITLE,
  LOCATION,
  WHATSAPP,
} from "@/constant";

import HeroImage from "@/assets/shodiq.jpg";
import IconGithub from "@/assets/icons/github.svg";
import IconInstagram from "@/assets/icons/instagram.svg";
import IconLinkedIn from "@/assets/icons/linkedin.svg";

export default function SideHero() {
  return (
    <aside className="hidden lg:block">
      <div className="hide-scroll rounded-none bg-slate-900 p-8 shadow-lg lg:h-[100dvh] lg:overflow-y-scroll lg:rounded-2xl">
        <Image
          src={HeroImage}
          alt="Hero Image"
          width={300}
          height={300}
          className="mx-auto h-auto w-auto rounded-xl"
          priority
        />

        <div className="my-4 text-center">
          <Link href="/" className="font-subHeading text-2xl font-bold">
            {FULL_NAME}
          </Link>
          <h3 className="font-body text-lg text-slate-400">{JOB_TITLE}</h3>
        </div>

        <div className="mx-auto my-8 h-1 w-10/12 rounded-full bg-slate-500"></div>

        <div className="mx-8 font-body">
          <div className="mb-4 flex items-center gap-4">
            <span className="rounded-xl border border-amber-500 bg-transparent p-4">
              <MdEmail className="inline-block text-amber-500" size={24} />
            </span>
            <div>
              <h3 className="font-button font-semibold uppercase">Email</h3>
              <p className="text-slate-300">{EMAIL}</p>
            </div>
          </div>

          <div className="mb-4 flex items-center gap-4">
            <span className="rounded-xl border border-amber-500 bg-transparent p-4">
              <MdPhone className="inline-block text-amber-500" size={24} />
            </span>
            <div>
              <h3 className="font-button font-semibold uppercase">Whatsapp</h3>
              <p className="text-slate-300">{WHATSAPP}</p>
            </div>
          </div>

          <div className="mb-4 flex items-center gap-4">
            <span className="rounded-xl border border-amber-500 bg-transparent p-4">
              <IoMdCalendar className="inline-block text-amber-500" size={24} />
            </span>
            <div>
              <h3 className="font-button font-semibold uppercase">Birthdate</h3>
              <p className="text-slate-300">{BIRTHDATE}</p>
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
              <h3 className="font-button font-semibold uppercase">Location</h3>
              <p className="text-slate-300">{LOCATION}</p>
            </div>
          </div>
        </div>

        <div className="mx-8 my-8">
          <h3 className="text-center font-subHeading font-semibold uppercase">
            Social Media
          </h3>
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
