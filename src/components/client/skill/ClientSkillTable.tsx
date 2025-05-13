"use client";;
import { SeverityType } from "@/components/shared/XButton";
import XTable, { XTableAction } from "@/components/shared/XTable";
import { Skill } from "@/types/skill";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PaginatorPageChangeEvent } from "primereact/paginator";

interface SkillTableProps {
  showDialog: (visible: boolean) => void;
  onEdit: (skill: Skill) => void;
  onDelete: (skill: Skill) => void;
  skills: Skill[];
  first: number;
  rows: number;
  totalRecords: number;
  onPageChange: (e: PaginatorPageChangeEvent) => void;
}
export default function ClientSkillTable({
  showDialog,
  onEdit,
  onDelete,
  skills,
  first,
  rows,
  totalRecords,
  onPageChange,
}: SkillTableProps) {
  const router = useRouter();

  const handleEdit = (skill: Skill) => {
    router.push(`/dashboard/skill?edit=true&id=${skill.id}`);
    onEdit(skill);
  };


  const imageBodyTemplate = (skill: Skill) => {
    return (
      <Image
        src={skill.iconUrl}
        alt={skill.title}
        width={0}
        height={0}
        className="shadow-2 aspect-w-1 aspect-h-1 h-12 w-12 rounded-lg"
      />
    );
  };

  const columns = [
    { field: "title" as keyof Skill, header: "Title" },
    { header: "Image", body: imageBodyTemplate },
    { field: "level" as keyof Skill, header: "Level" },
  ];

  const actions: XTableAction<Skill>[] = [
    {
      icon: "pi pi-pencil",
      severity: "warning-outline" as SeverityType,
      onClick: handleEdit,
    },
    {
      icon: "pi pi-trash",
      severity: "error-outline" as SeverityType,
      onClick: onDelete,
    },
  ];

  return (
    <section>
      <XTable
        data={skills}
        columns={columns}
        actions={actions}
        title="List of skill"
        label="Add Skill"
        first={first}
        rows={rows}
        totalRecords={totalRecords}
        showDialog={showDialog}
        onPageChange={onPageChange}
      />
    </section>
  );
}
