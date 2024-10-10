"use client";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { FormEvent, useState } from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { Skill } from "@/types/skill";
import SkillService from "@/service/SkillService";

export default function DashboardSkillPage() {
  const [title, setTitle] = useState("");
  const [iconUrl, setIconUrl] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const service = SkillService();

  const listLevel: string[] = ["Beginner", "Intermediate", "Advanced"];

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data: Skill = {
      title: formData.get("title") as string,
      iconUrl: formData.get("iconUrl") as string,
      level: selectedLevel as string,
    };

    const res = await service.createSkill(data);
    if (res.status === 201 || res.status === 200) {
      clearForm();
    }
  };

  const clearForm = () => {
    setTitle("");
    setIconUrl("");
    setSelectedLevel(null);
  };

  return (
    <section>
      <h1 className="mb-4 text-4xl font-bold text-white">Manage Skills</h1>

      <form
        onSubmit={onSubmit}
        className="w-[80%] rounded-2xl bg-slate-800 px-4 py-6"
      >
        <div className="mb-4 flex flex-wrap gap-4">
          <div className="flex-grow basis-60">
            <div>
              <label htmlFor="title" className="capitalize">
                Title
              </label>
              <InputText
                id="title"
                value={title}
                className="w-full"
                name="title"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTitle(e.target.value)
                }
              />
            </div>
          </div>

          <div className="flex-grow basis-60">
            <div>
              <label htmlFor="level" className="capitalize">
                Choose Level
              </label>
              <Dropdown
                value={selectedLevel}
                onChange={(e: DropdownChangeEvent) => setSelectedLevel(e.value)}
                options={listLevel}
                optionLabel="Choose your level"
                placeholder="Choose your level"
                className="md:w-14rem w-full"
              />
            </div>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap gap-4">
          <div className="flex-grow basis-60">
            <div>
              <label htmlFor="img" className="capitalize">
                Image URL
              </label>
              <InputText
                id="img"
                value={iconUrl}
                name="iconUrl"
                className="w-full"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setIconUrl(e.target.value)
                }
              />
            </div>
          </div>
        </div>

        <Button label="Submit" type="submit" />
      </form>
    </section>
  );
}
