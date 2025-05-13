"use client";
import { useRouter } from "next/navigation";
import { PaginatorPageChangeEvent } from "primereact/paginator";
import { SeverityType } from "@/components/shared/XButton";
import { Experience } from "@/types/experience";
import XTable, { XTableAction } from "@/components/shared/XTable";

interface ExperienceTableProps {
  showDialog: (visible: boolean) => void;
  onEdit: (experience: Experience) => void;
  onDelete: (experience: Experience) => void;
  onShowDetail: (experience: Experience) => void;
  experiences: Experience[];
  first: number;
  rows: number;
  totalRecords: number;
  onPageChange: (e: PaginatorPageChangeEvent) => void;
}

export default function ClientExperienceTable({
  showDialog,
  onEdit,
  experiences,
  onDelete,
  onShowDetail,
  first,
  rows,
  totalRecords,
  onPageChange,
}: ExperienceTableProps) {
  const router = useRouter();

  const handleEdit = (experience: Experience) => {
    router.push(`/dashboard/experience?edit=true&id=${experience.id}`);
    onEdit(experience);
  };

  const handleShowDetail = (experience: Experience) => {
    router.push(`/dashboard/experience?showDetail=true&id=${experience.id}`);
    onShowDetail(experience);
  };

  const columns = [
    { field: "companyName" as keyof Experience, header: "Company Name" },
    { field: "position" as keyof Experience, header: "Position" },
    { field: "employmentType" as keyof Experience, header: "Employment Type" },
    { field: "location" as keyof Experience, header: "Location" },
  ];

  const actions: XTableAction<Experience>[] = [
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
    {
      icon: "pi pi-eye",
      severity: "info-outline" as SeverityType,
      onClick: handleShowDetail,
    },
  ];

  return (
    <section>
      <XTable
        data={experiences}
        columns={columns}
        actions={actions}
        title="List of experience"
        label="Add Experience"
        first={first}
        rows={rows}
        totalRecords={totalRecords}
        showDialog={showDialog}
        onPageChange={onPageChange}
      />
    </section>
  );
}
