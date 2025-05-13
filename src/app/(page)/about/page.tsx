import Image from "next/image";
import React from "react";
import {
  IoDesktop,
  IoPeople,
  IoPhonePortrait,
  IoServer,
} from "react-icons/io5";

import Certificate1 from "@/assets/images/enigma.jpg";
import Certificate2 from "@/assets/images/udemy-golang.jpg";
import Certificate3 from "@/assets/images/bnsp.jpg";

import { ABOUT_ME, WHAT_I_CAN_DO } from "@/constant";

export default function AboutPage() {
  const coreSkills = WHAT_I_CAN_DO;

  const iconFilter = (icon: string) => {
    switch (icon) {
      case "io-server":
        return <IoServer className="mx-auto mb-2 text-amber-500" size={65} />;
      case "io-desktop":
        return <IoDesktop className="mx-auto mb-2 text-amber-500" size={65} />;
      case "io-phone":
        return (
          <IoPhonePortrait className="mx-auto mb-2 text-amber-500" size={65} />
        );
      case "io-people":
        return <IoPeople className="mx-auto mb-2 text-amber-500" size={65} />;
      default:
        return <IoServer className="mx-auto mb-2 text-amber-500" size={65} />;
    }
  };

  const renderCoreSkill = () => {
    return coreSkills.map((item, index) => (
      <div key={index} className="rounded-xl bg-slate-800 p-4">
        <div className="mb-4 text-center">
          {iconFilter(item.icon)}
          <h3 className="font-subHeading text-2xl text-[24px] font-bold">
            {item.title}
          </h3>
        </div>
        <p className="text-justify font-body text-[16px] text-slate-300">
          {item.description}
        </p>
      </div>
    ));
  };

  return (
    <section className="w-[100%] md:w-[calc(100%-4rem)]">
      <div className="mb-8 text-justify font-body text-[16px]">
        {ABOUT_ME.map((item, index) => (
          <div key={index}>
            <p
              className="mb-4 text-slate-300"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="mb-4 font-subHeading text-[24px] font-bold">
          What can I do?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {renderCoreSkill()}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 font-subHeading text-[24px] font-bold">
          Certificates
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full overflow-hidden rounded-xl bg-slate-800">
            <thead className="bg-slate-700 uppercase">
              <tr className="font-button">
                <th className="p-4 text-left text-lg font-semibold text-amber-500">
                  Image
                </th>
                <th className="p-4 text-left text-lg font-semibold text-amber-500">
                  Certificate Name
                </th>
                <th className="p-4 text-left text-lg font-semibold text-amber-500">
                  Issuer
                </th>
                <th className="p-4 text-left text-lg font-semibold text-amber-500">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="font-body text-[16px] even:bg-slate-700">
                <td className="p-4 text-slate-300">
                  <Image
                    src={Certificate1}
                    alt="Certificate 1"
                    width={200}
                    height={200}
                    className="h-auto w-auto rounded-xl"
                  />
                </td>
                <td className="p-4 text-slate-300">
                  Java Spring Boot - React JS - React Native
                </td>
                <td className="p-4 text-slate-300">EnigmaCamp</td>
                <td className="p-4 text-slate-300">June 2024</td>
              </tr>
              <tr className="font-body text-[16px] even:bg-slate-700">
                <td className="p-4 text-slate-300">
                  <Image
                    src={Certificate2}
                    alt="Certificate 2"
                    width={200}
                    height={200}
                    className="h-auto w-auto rounded-xl"
                  />
                </td>
                <td className="p-4 text-slate-300">
                  Pemrograman Go-Lang: Pemula sampai Mahir
                </td>
                <td className="p-4 text-slate-300">
                  Udemy - Programmer Zaman Now
                </td>
                <td className="p-4 text-slate-300">July 2024</td>
              </tr>

              <tr className="font-body text-[16px] even:bg-slate-700">
                <td className="p-4 text-slate-300">
                  <Image
                    src={Certificate3}
                    alt="Certificate 3"
                    width={200}
                    height={200}
                    className="h-auto w-auto rounded-xl"
                  />
                </td>
                <td className="p-4 text-slate-300">Junior Web Developer</td>
                <td className="p-4 text-slate-300">BNSP</td>
                <td className="p-4 text-slate-300">June 2023 - June 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
