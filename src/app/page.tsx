import React from "react";
import SideHero from "@/components/SideHero";
import { IoDesktop, IoPhonePortrait, IoServer } from "react-icons/io5";
import Certificate1 from "@/app/assets/images/enigma.jpg";
import Certificate2 from "@/app/assets/images/udemy-golang.jpg";
import Certificate3 from "@/app/assets/images/bnsp.jpg";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex gap-x-8">
      <SideHero />
      <div className="flex-1">
        <main className="flex-1 rounded-2xl bg-slate-900 pb-8 overflow-y-scroll hide-scroll h-screen">
          <header className="flex justify-between">
            <div className="mt-14 ms-8">
              <h1 className="text-4xl font-bold mb-4">About</h1>
              <div className="w-16 h-1 bg-amber-500 mb-8 rounded-full"></div>
            </div>
            <div>
              <nav className="bg-slate-800 p-6 rounded-b-2xl">
                <ul className="flex gap-x-8">
                  <li>
                    <a href="#about" className="text-lg uppercase">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#experience" className="text-lg uppercase">
                      Resume
                    </a>
                  </li>
                  <li>
                    <a href="#education" className="text-lg uppercase">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-lg uppercase">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <section className="px-8 text-lg">
            <div className="mb-8">
              <p className="text-slate-300 mb-4">
                I am M. Shadiq Firmansyah Basiru, a Fullstack Developer with
                experience in building web applications and APIs. Having a
                background in Information Systems education, I have a strong
                understanding of software development, database management, and
                system analysis.
              </p>
              <p className="text-slate-300 mb-4">
                My main expertise includes backend development using Java,
                Spring Boot, and .NET Core, as well as frontend with React,
                Vue.js, and Laravel. I also have experience in mobile
                application development using React Native.
              </p>
              <p className="text-slate-300 mb-4">
                I have experience in working on projects such as cashier
                application development, band website, and API for livestock
                trading platform. I have the ability to work in a team, solve
                problems, and keep learning new technologies. I am ready to
                contribute to exciting projects and grow my career as a
                Fullstack Developer.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">What can I do?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-slate-800 p-4 rounded-xl">
                  <div className="text-center mb-4">
                    <IoServer
                      className="text-amber-500 mx-auto mb-2"
                      size={65}
                    />
                    <h3 className="text-2xl font-bold">Backend Development</h3>
                  </div>
                  <p className="text-slate-300">
                    I can build RESTful APIs using Java, Spring Boot, and .NET
                    Core. I can also manage databases using MySQL, PostgreSQL,
                    and MongoDB.
                  </p>
                </div>
                <div className="bg-slate-800 p-4 rounded-xl">
                  <div className="text-center mb-4">
                    <IoDesktop
                      className="text-amber-500 mx-auto mb-2"
                      size={65}
                    />
                    <h3 className="text-2xl font-bold">Frontend Development</h3>
                  </div>
                  <p className="text-slate-300">
                    I can create user interfaces using React, Vue.js, and
                    Laravel Blade. I can also use Tailwind CSS and Bootstrap for
                    styling.
                  </p>
                </div>
                <div className="bg-slate-800 p-4 rounded-xl">
                  <div className="text-center mb-4">
                    <IoPhonePortrait
                      className="text-amber-500 mx-auto mb-2"
                      size={65}
                    />
                    <h3 className="text-2xl font-bold">Mobile Development</h3>
                  </div>
                  <p className="text-slate-300">
                    I can build mobile applications using React Native. I can
                    also use Redux and Context API for state management.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Certificates</h2>

              <table className="w-full bg-slate-800 rounded-xl overflow-hidden">
                <thead className="bg-slate-700 uppercase">
                  <tr>
                    <th className="text-left p-4 text-lg font-semibold text-amber-500">
                      Image
                    </th>
                    <th className="text-left p-4 text-lg font-semibold text-amber-500">
                      Certificate Name
                    </th>
                    <th className="text-left p-4 text-lg font-semibold text-amber-500">
                      Issuer
                    </th>
                    <th className="text-left p-4 text-lg font-semibold text-amber-500">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="even:bg-slate-700">
                    <td className="p-4 text-slate-300">
                      <Image
                        src={Certificate1}
                        alt="Certificate 1"
                        className="w-44 "
                      />
                    </td>
                    <td className="p-4 text-slate-300">Java Spring Boot - React JS - React Native</td>
                    <td className="p-4 text-slate-300">EnigmaCamp</td>
                    <td className="p-4 text-slate-300">June 2024</td>
                  </tr>
                  <tr className="even:bg-slate-700">
                    <td className="p-4 text-slate-300">
                      <Image
                        src={Certificate2}
                        alt="Certificate 2"
                        className="w-44 "
                      />
                    </td>
                    <td className="p-4 text-slate-300">Pemrograman Go-Lang: Pemula sampai Mahir</td>
                    <td className="p-4 text-slate-300">Udemy - Programmer Zaman Now</td>
                    <td className="p-4 text-slate-300">July 2024</td>
                  </tr>

                  <tr className="even:bg-slate-700">
                    <td className="p-4 text-slate-300">
                      <Image
                        src={Certificate3}
                        alt="Certificate 3"
                        className="w-44 "
                      />
                    </td>
                    <td className="p-4 text-slate-300">Junior Web Developer</td>
                    <td className="p-4 text-slate-300">BNSP</td>
                    <td className="p-4 text-slate-300">June 2023 - June 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
