"use client";
import React from "react";
import HeroImage from "@/assets/shodiq.jpg";
import Image from "next/image";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import IconGithub from "@/assets/icons/github.svg";
import IconInstagram from "@/assets/icons/instagram.svg";
import IconLinkedIn from "@/assets/icons/linkedin.svg";
import { Divider } from "primereact/divider";
import XButton from "@/components/shared/XButton";
import { useRouter } from "next/navigation";

export default function DashboardProfile() {
  const router = useRouter();
  return (
    <section>
      <XButton
        label="edit"
        icon="pi pi-pencil"
        className="absolute right-8 top-8 capitalize"
        severity="primary-outline"
        rounded="lg"
        onClick={() => router.push("/dashboard/profile/edit")}
      />
      <div className="my-8 flex flex-col items-center justify-center gap-2">
        <Image
          src={HeroImage}
          alt="Profile"
          className="h-56 w-56 rounded-full object-cover"
        />
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-slate-100">
            M. Shadiq Firmansyah Basiru
          </h1>
          <p className="text-lg text-slate-400">
            Fullstack Developer Enthusiast
          </p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4">
        <div className="mx-auto w-1/2 rounded-lg border border-slate-700 bg-slate-800 p-4">
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

          <Divider />
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

        <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
          <h2 className="mb-4 text-lg font-semibold text-amber-500">
            About Me
          </h2>
          <p className="mb-2 text-slate-300">
            I am M. Shadiq Firmansyah Basiru, a Fullstack Developer with
            experience in building web applications and APIs. Having a
            background in Information Systems education, I have a strong
            understanding of software development, database management, and
            system analysis.
          </p>
          <p className="mb-2 text-slate-300">
            My main expertise includes backend development using Java, Spring
            Boot, and .NET Core, as well as frontend with React, Vue.js, and
            Laravel. I also have experience in mobile application development
            using React Native.
          </p>
          <p className="mb-2 text-slate-300">
            I have experience in working on projects such as cashier application
            development, band website, and API for livestock trading platform. I
            have the ability to work in a team, solve problems, and keep
            learning new technologies. I am ready to contribute to exciting
            projects and grow my career as a Fullstack Developer.
          </p>
        </div>

        <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
          <h2 className="mb-4 text-lg font-semibold text-amber-500">
            What Can I Do
          </h2>
          <div className="flex flex-col gap-2">
            <div>
              <h3 className="text-xl font-bold">Backend Development</h3>
              <p className="text-slate-300">
                I can build RESTful APIs using Java, Spring Boot, and .NET Core.
                I can also manage databases using MySQL, PostgreSQL, and
                MongoDB.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Frontend Development</h3>
              <p className="text-slate-300">
                I can create user interfaces using React, Vue.js, and Laravel
                Blade. I can also use Tailwind CSS and Bootstrap for styling.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Mobile Development</h3>
              <p className="text-slate-300">
                I can build mobile applications using React Native. I can also
                create responsive designs using CSS and JavaScript.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
