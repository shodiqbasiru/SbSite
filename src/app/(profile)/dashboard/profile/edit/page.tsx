"use client";

import React, { useState } from "react";
import Image from "next/image";
import HeroImage from "@/assets/shodiq.jpg";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import XButton from "@/components/shared/XButton";

export default function DashboardEditProfile() {
  const [formData, setFormData] = useState({
    name: "M. Shadiq Firmansyah Basiru",
    email: "shodiqbasiru@gmail.com",
    phone: "+6281394600805",
    birthdate: "2000-05-20",
    location: "Bandung, West Java, Indonesia",
    about: `I am M. Shadiq Firmansyah Basiru, a Fullstack Developer with
                        experience in building web applications and APIs. Having a
                        background in Information Systems education, I have a strong
                        understanding of software development, database management, and
                        system analysis.`,
  });

  const iconsItems = [
    {
      label: "Github",
      icon: "pi pi-github",
      value: "github",
    },
    {
      label: "Linkedin",
      icon: "pi pi-linkedin",
      value: "linkedin",
    },
    {
      label: "Instagram",
      icon: "pi pi-instagram",
      value: "instagram",
    },
    {
      label: "Facebook",
      icon: "pi pi-facebook",
      value: "facebook",
    },
    {
      label: "Twitter",
      icon: "pi pi-twitter",
      value: "twitter",
    },
    {
      label: "Youtube",
      icon: "pi pi-youtube",
      value: "youtube",
    },
    {
      label: "Tiktok",
      icon: "pi pi-tiktok",
      value: "tiktok",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="space-y-4">
      <XButton
        label="save"
        icon="pi pi-check"
        className="absolute right-8 top-8 capitalize"
        severity="primary-outline"
        rounded="lg"
        type="submit"
      />
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src={HeroImage}
            alt="Profile"
            className="mb-6 h-56 w-56 rounded-full object-cover"
          />
          <FloatLabel>
            <InputText value={formData.name} onChange={handleChange} />
            <label className="font-semibold uppercase tracking-widest text-slate-200">
              Fullname
            </label>
          </FloatLabel>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="mx-auto w-1/2 rounded-lg border border-slate-700 bg-slate-800 p-4">
            <FloatLabel className="my-8">
              <InputText
                value={formData.email}
                onChange={handleChange}
                className="w-full"
              />
              <label className="font-semibold uppercase tracking-widest text-slate-200">
                Email
              </label>
            </FloatLabel>

            <FloatLabel className="my-8">
              <InputText
                value={formData.phone}
                onChange={handleChange}
                className="w-full"
              />
              <label className="font-semibold uppercase tracking-widest text-slate-200">
                Whatsapp
              </label>
            </FloatLabel>

            <FloatLabel className="my-8">
              <InputText
                value={formData.birthdate}
                onChange={handleChange}
                className="w-full"
              />
              <label className="font-semibold uppercase tracking-widest text-slate-200">
                Birthdate
              </label>
            </FloatLabel>

            <FloatLabel className="my-8">
              <InputText
                value={formData.location}
                onChange={handleChange}
                className="w-full"
              />
              <label className="font-semibold uppercase tracking-widest text-slate-200">
                Location
              </label>
            </FloatLabel>
          </div>

          <div className="mx-auto w-full rounded-lg border border-slate-700 bg-slate-800 p-4">
            <FloatLabel className="my-8">
              <InputTextarea
                value={formData.about}
                onChange={handleChange}
                className="w-full"
                rows={5}
              />
              <label className="font-semibold uppercase tracking-widest text-slate-200">
                About
              </label>
            </FloatLabel>
          </div>
          {/* <div className="mx-auto w-1/2 rounded-lg border border-slate-700 bg-slate-800 p-4">
            <div className="flex items-center gap-2">
              <Dropdown
                value={formData.github}
                options={iconsItems}
                onChange={(e) => setFormData({ ...formData, github: e.value })}
                optionLabel="label"
                placeholder="Select Github"
              />    
              <FloatLabel className="my-8">
                <InputText
                  value={"formData.email"}
                  onChange={handleChange}
                  className="w-full"
                />
                <label className="font-semibold uppercase tracking-widest text-slate-200">
                  Url
                </label>
              </FloatLabel>
            </div>
          </div> */}
        </div>
      </form>
    </section>
  );
}
