import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import PortfolioService from "@/service/PortfolioService";
import { Portfolio } from "@/types/portfolio";
import { Nullable } from "primereact/ts-helpers";
import { AutoCompleteCompleteEvent } from "primereact/autocomplete";

interface Technology {
  id: number;
  name: string;
}

export function usePortfolioForm(portfolio: Portfolio | null) {
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<Nullable<Date>>(null);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [linkWeb, setLinkWeb] = useState<string | undefined>(undefined);
  const [linkGithub, setLinkGithub] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTech, setSelectedTech] = useState<Technology[]>([]);
  const [filteredTech, setFilteredTech] = useState<Technology[] | undefined>(
    undefined,
  );

  const router = useRouter();
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

  const handleAutoCompleteSearch = (event: AutoCompleteCompleteEvent) => {
    let filterTech;
    if (!event.query.trim().length) {
      filterTech = [...technologies];
    } else {
      filterTech = technologies.filter((tech) => {
        return tech.name.toLowerCase().startsWith(event.query.toLowerCase());
      });
    }

    setFilteredTech(filterTech);
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const date = new Date(formData.get("date") as string);

    const tech = formData.get("technologies");
    console.log("tech =>", tech);
    console.log("selectedTech =>", selectedTech); 

    const data: Portfolio = {
      title: formData.get("title") as string,
      technologies: selectedTech.map((tech) => tech.name),
      imgUrl: formData.get("imgUrl") as string,
      description: formData.get("description") as string,
      linkGithub: formData.get("linkGithub") as string,
      linkWeb: formData.get("linkWeb") as string,
      date: date.toISOString() as unknown as Date,
      category: formData.get("category") as string,
    };

    let res;  
    if (portfolio && portfolio.id) {
      data.id = portfolio.id;
      console.log("edit", data.technologies);

      res = await service.updatePortfolio(data);
    } else {
      console.log("create", data.technologies);
      res = await service.createPortfolio(data);
    }

    if (res.status === 201 || res.status === 200) {
      router.replace("/dashboard/portfolio");
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

  const data = {
    title,
    setTitle,
    date,
    setDate,
    imgUrl,
    setImgUrl,
    linkWeb,
    setLinkWeb,
    linkGithub,
    setLinkGithub,
    description,
    setDescription,
    category,
    setCategory,
    technologies,
    setTechnologies,
    selectedTech,
    setSelectedTech,
    filteredTech,
    setFilteredTech,
    listTech
  };

  const methods = {
    handleAutoCompleteSearch,
    handleSubmit,
    clearForm,
  };

  return { data, methods };
}