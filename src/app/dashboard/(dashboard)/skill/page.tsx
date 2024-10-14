"use client";
import { FormEvent, useEffect, useState } from "react";
import { Skill } from "@/types/skill";
import SkillService from "@/service/SkillService";
import ClientSkillTable from "@/components/client/skill/ClientSkillTable";
import { useSkill } from "@/hook/useSkill";
import { PaginatorPageChangeEvent } from "primereact/paginator";
import { useRouter, useSearchParams } from "next/navigation";
import ClientSkillForm from "@/components/client/skill/ClientSkillForm";
import { Toast } from "primereact/toast";
import { ConfirmDialog } from "primereact/confirmdialog";

export default function DashboardSkillPage() {
  const [visible, setVisible] = useState<boolean>(false);
  const [buttonLabel, setButtonLabel] = useState<string>("Create");
  const [title, setTitle] = useState("");
  const [iconUrl, setIconUrl] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState(10);
  const [paginatedSkills, setPaginatedSkills] = useState<Skill[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const {
    data: { skills, toast },
    methods: { getSkills, handleDelete },
  } = useSkill();

  const router = useRouter();
  const service = SkillService();
  const searchParams = useSearchParams();

  const listLevel: string[] = ["Beginner", "Intermediate", "Advanced"];

  const onPageChange = (e: PaginatorPageChangeEvent) => {
    setFirst(e.first);
    setRows(e.rows);
    paginateSkills(e.first, e.rows);

    const query = {
      page: e.page + 1,
      rows: e.rows,
    };

    router.replace(
      `/dashboard/portfolio?page=${query.page}&rows=${query.rows}`,
    );
  };

  const paginateSkills = (first: number, rows: number) => {
    const start = first;
    const end = first + rows;
    setPaginatedSkills(skills.slice(start, end));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data: Skill = {
      title: formData.get("title") as string,
      iconUrl: formData.get("iconUrl") as string,
      level: selectedLevel as string,
    };

    let res;
    if (selectedSkill && selectedSkill.id) {
      data.id = selectedSkill.id;
      res = await service.updateSkill(data);
    } else {
      res = await service.createSkill(data);
    }

    if (res.status === 201 || res.status === 200) {
      router.replace("/dashboard/skill");
      toast.current?.show({
        severity: "success",
        summary: "Success",
        detail: `Skill ${data.title} has been created`,
        life: 3000,
      });
    } else {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: `Failed to create skill ${data.title}`,
        life: 3000,
      });
    }
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    await handleSubmit(event);

    setVisible(false);
    clearForm();

    await getSkills();
    router.replace("/dashboard/skill");
  };

  const handleCreate = (): void => {
    clearForm();
    setVisible(true);
    setButtonLabel("Create");
  };

  const handleEdit = (skill: Skill): void => {
    setSelectedSkill(skill);
    setTitle(skill.title);
    setIconUrl(skill.iconUrl);
    setSelectedLevel(skill.level);
    setVisible(true);
    setButtonLabel("Update");
  };

  const clearForm = () => {
    setTitle("");
    setIconUrl("");
    setSelectedLevel("");
  };

  useEffect(() => {
    getSkills();

    const page = searchParams.get("page");
    const rows = searchParams.get("rows");

    if (page && rows) {
      setFirst((parseInt(page) - 1) * parseInt(rows));
      setRows(parseInt(rows));
    }
  }, []);

  useEffect(() => {
    paginateSkills(first, rows);
    router.replace(`/dashboard/skill?page=${first / rows + 1}&rows=${rows}`);
  }, [skills, first, rows]);

  return (
    <section>
      <h1 className="mb-4 text-4xl font-bold text-white">Manage Skills</h1>
      <Toast ref={toast} />
      <ConfirmDialog />

      <ClientSkillTable
        showDialog={handleCreate}
        onEdit={handleEdit}
        onDelete={handleDelete}
        skills={paginatedSkills}
        first={first}
        rows={rows}
        totalRecords={skills.length}
        onPageChange={onPageChange}
      />

      <ClientSkillForm
        buttonLabel={buttonLabel}
        visible={visible}
        setVisible={setVisible}
        onSubmit={onSubmit}
        title={title}
        setTitle={setTitle}
        iconUrl={iconUrl}
        setIconUrl={setIconUrl}
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
        listLevel={listLevel}
      />
    </section>
  );
}
