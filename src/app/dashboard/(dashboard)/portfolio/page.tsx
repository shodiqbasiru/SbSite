"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
import {
  AutoComplete,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { Nullable } from "primereact/ts-helpers";
import { Button } from "primereact/button";
import { Portfolio } from "@/types/portfolio";
import PortfolioService from "@/service/PortfolioService";

interface Technology {
  id: number;
  name: string;
}

export default function DashboardPortfolioPage() {
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<Nullable<Date>>(null);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [linkWeb, setLinkWeb] = useState<string>("");
  const [linkGithub, setLinkGithub] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  const [selectedTech, setSelectedTech] = useState<Technology[]>([]);
  const [filteredTech, setFilteredTech] = useState<Technology[] | undefined>(
    undefined,
  );

  const service = PortfolioService();

  const listTech: Technology[] = [
    { id: 1, name: "Java" },
    { id: 2, name: "C#" },
    { id: 3, name: "Javascript" },
    { id: 4, name: "Typescript" },
    { id: 5, name: "Golang" },
    { id: 6, name: "PHP" },
    { id: 7, name: "dart" },
    { id: 8, name: "Spring Boot" },
    { id: 9, name: "Asp .Net" },
    { id: 10, name: "React" },
    { id: 11, name: "Vue" },
    { id: 12, name: "Angular" },
    { id: 20, name: "React Native" },
    { id: 13, name: "Laravel" },
    { id: 14, name: "Express" },
    { id: 15, name: "NestJS" },
    { id: 16, name: "NextJS" },
    { id: 17, name: "NuxtJS" },
    { id: 18, name: "Firebase" },
    { id: 19, name: "Flutter" },
    { id: 21, name: "HTML" },
    { id: 22, name: "CSS" },
    { id: 23, name: "Tailwind" },
    { id: 24, name: "Bootstrap" },
    { id: 25, name: "MySQL" },
    { id: 26, name: "PostgreSQL" },
    { id: 27, name: "Kotlin" },
    { id: 28, name: "SQL Server" },
    { id: 29, name: "JQuery" },
  ];

  const search = (event: AutoCompleteCompleteEvent) => {
    let _filteredTech;
    if (!event.query.trim().length) {
      _filteredTech = [...technologies];
    } else {
      _filteredTech = technologies.filter((tech) => {
        return tech.name.toLowerCase().startsWith(event.query.toLowerCase());
      });
    }

    setFilteredTech(_filteredTech);
  };

  useEffect(() => {
    setTechnologies(listTech);
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const date = new Date(formData.get("date") as string);
    const formattedDate = date.toLocaleDateString("eid-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const data: Portfolio = {
      title: formData.get("title") as string,
      technologies: selectedTech.map((tech) => tech.name),
      imgUrl: formData.get("imgUrl") as string,
      description: formData.get("description") as string,
      linkGithub: formData.get("linkGithub") as string,
      linkWeb: formData.get("linkWeb") as string,
      date: formattedDate as unknown as Date,
      category: formData.get("category") as string,
    };

    const res = await service.createPortfolio(data);

    if (res.status === 201 || res.status === 200) {
      clearForm();
    }
  }

  const clearForm = () => {
    setTitle("");
    setDate(null);
    setImgUrl("");
    setLinkWeb("");
    setLinkGithub("");
    setDescription("");
    setSelectedTech([]);
    setCategory("");
  };

  return (
    <section>
      <h1 className="mb-4 text-4xl font-bold text-white">Portfolio</h1>

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
              <label htmlFor="date" className="capitalize">
                Date
              </label>
              <Calendar
                inputId="date"
                value={date}
                name="date"
                className="w-full"
                onChange={(e) => setDate(e.value)}
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
                value={imgUrl}
                name="imgUrl"
                className="w-full"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setImgUrl(e.target.value)
                }
              />
            </div>
          </div>

          <div className="flex-grow basis-60">
            <div>
              <label htmlFor="ac" className="capitalize">
                Select Technologies
              </label>
              <AutoComplete
                field="name"
                multiple
                value={selectedTech}
                className="w-full"
                suggestions={filteredTech}
                name="technologies"
                completeMethod={search}
                onChange={(e) => setSelectedTech(e.value)}
              />
            </div>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap gap-4">
          <div className="flex-grow basis-60">
            <div>
              <label htmlFor="linkweb" className="capitalize">
                Website Link
              </label>
              <InputText
                id="linkweb"
                value={linkWeb}
                className="w-full"
                name="linkWeb"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setLinkWeb(e.target.value)
                }
              />
            </div>
          </div>

          <div className="flex-grow basis-60">
            <div>
              <label htmlFor="linkgithub" className="capitalize">
                GitHub Link
              </label>
              <InputText
                id="linkgithub"
                value={linkGithub}
                className="w-full"
                name="linkGithub"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setLinkGithub(e.target.value)
                }
              />
            </div>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap gap-4">
          <div className="flex-grow basis-60">
            <div>
              <label htmlFor="category" className="capitalize">
                Category
              </label>
              <InputText
                id="category"
                value={category}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCategory(e.target.value)
                }
                className="w-full"
                name="category"
              />
            </div>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap gap-4">
          <div className="flex-grow basis-60">
            <div>
              <label htmlFor="description" className="capitalize">
                description
              </label>
              <InputTextarea
                id="description"
                value={description}
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                className="w-full"
                rows={5}
                cols={30}
              />
            </div>
          </div>
        </div>

        <Button label="Submit" type="submit" />
      </form>
    </section>
  );
}
