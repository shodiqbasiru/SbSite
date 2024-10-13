"use client";
import { useEffect, useState, FormEvent } from "react";
import ClientPortfolioTable from "@/components/client/portfolio/ClientPortfolioTable";
import ClientPortfolioForm from "@/components/client/portfolio/ClientPortfolioForm";
import { Portfolio } from "@/types/portfolio";
import { usePortfolio } from "@/hook/usePortfolio";
import { useRouter } from "next/navigation";
import PortfolioService from "@/service/PortfolioService";
import { Nullable } from "primereact/ts-helpers";
import { AutoCompleteCompleteEvent } from "primereact/autocomplete";
import { Toast } from "primereact/toast";
import ClientPortfolioDetail from "@/components/client/portfolio/ClientPortfolioDetail";
import { PaginatorPageChangeEvent } from "primereact/paginator";

interface Technology {
  id: number;
  name: string;
}

export default function DashboardPortfolioPage() {
  const {
    data: { portfolios, toast },
    methods: { getPortfolios, handleDelete },
  } = usePortfolio();

  const [visible, setVisible] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState<Portfolio | null>(
    null,
  );
  const [buttonLabel, setButtonLabel] = useState<string>("Create");

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

  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState(10);
  const [paginatedPortfolios, setPaginatedPortfolios] = useState<Portfolio[]>([]);


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

  const onPageChange = (e: PaginatorPageChangeEvent) => {
    setFirst(e.first);
    setRows(e.rows);
    paginatePortfolios(e.first, e.rows);
  };

  const paginatePortfolios = (first: number, rows: number) => {
    const start = first;
    const end = first + rows;
    setPaginatedPortfolios(portfolios.slice(start, end));
  };

  
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
    if (selectedPortfolio && selectedPortfolio.id) {
      data.id = selectedPortfolio.id;
      res = await service.updatePortfolio(data);
    } else {
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

  const handleCreate = (): void => {
    clearForm();
    setVisible(true);
    setButtonLabel("Create");
  };

  const handleEdit = (portfolio: Portfolio): void => {
    setSelectedPortfolio(portfolio);
    setTitle(portfolio.title);
    setDate(new Date(portfolio.date));
    setImgUrl(portfolio.imgUrl);
    setLinkWeb(portfolio.linkWeb);
    setLinkGithub(portfolio.linkGithub);
    setDescription(portfolio.description);
    setCategory(portfolio.category);
    setSelectedTech(
      portfolio.technologies.map((tech) => ({
        id: listTech.find((t) => t.name === tech)?.id || 0,
        name: tech,
      })),
    );
    setButtonLabel("Update");
    setVisible(true);
  };

  const handleShowDetail = (portfolio: Portfolio): void => {
    setSelectedPortfolio(portfolio);
    setShowDetail(true);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    await handleSubmit(e);

    setVisible(false);
    clearForm();

    await getPortfolios();
    router.replace("/dashboard/portfolio");
  };

  useEffect(() => {
    getPortfolios();
    setTechnologies(listTech);
  }, []);

  return (
    <section>
      <h1 className="mb-4 text-4xl font-bold text-white">Manage Portfolio</h1>
      <Toast ref={toast} />

      <ClientPortfolioTable
        portfolios={paginatedPortfolios}
        showDialog={handleCreate}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onShowDetail={handleShowDetail}
        first={first}
        rows={rows}
        totalRecords={portfolios.length}
        onPageChange={onPageChange}
      />

      <ClientPortfolioForm
        buttonLabel={buttonLabel}
        visible={visible}
        setVisible={setVisible}
        onSubmit={onSubmit}
        title={title}
        setTitle={setTitle}
        date={date}
        setDate={setDate}
        imgUrl={imgUrl}
        setImgUrl={setImgUrl}
        linkWeb={linkWeb}
        setLinkWeb={setLinkWeb}
        linkGithub={linkGithub}
        setLinkGithub={setLinkGithub}
        description={description}
        setDescription={setDescription}
        category={category}
        setCategory={setCategory}
        selectedTech={selectedTech}
        setSelectedTech={setSelectedTech}
        filteredTech={filteredTech}
        handleAutoCompleteSearch={handleAutoCompleteSearch}
        setSelectedPortfolio={setSelectedPortfolio}
      />

      <ClientPortfolioDetail
        visible={showDetail}
        setVisible={setShowDetail}
        selectedPortfolio={selectedPortfolio}
        setSelectedPortfolio={setSelectedPortfolio}
      />
    </section>
  );
}
