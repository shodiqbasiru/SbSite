"use client";
import { useRouter } from "next/navigation";
import { PaginatorPageChangeEvent } from "primereact/paginator";
import { SeverityType } from "@/components/shared/XButton";
import { Education } from "@/types/education";
import XTable, { XTableAction } from "@/components/shared/XTable";

interface EducationTableProps {
  showDialog: (visible: boolean) => void;
  onEdit: (education: Education) => void;
  onDelete: (education: Education) => void;
  onShowDetail: (education: Education) => void;
  educations: Education[];
  first: number;
  rows: number;
  totalRecords: number;
  onPageChange: (e: PaginatorPageChangeEvent) => void;
}

export default function ClientEducationTable({
  showDialog,
  onEdit,
  educations,
  onDelete,
  onShowDetail,
  first,
  rows,
  totalRecords,
  onPageChange,
}: EducationTableProps) {
  const router = useRouter();

  const handleEdit = (education: Education) => {
    router.push(`/dashboard/education?edit=true&id=${education.id}`);
    onEdit(education);
  };

  const handleShowDetail = (education: Education) => {
    router.push(`/dashboard/education?showDetail=true&id=${education.id}`);
    onShowDetail(education);
  };

  const degreeProgamTemplate = (education: Education) => {
    return (
      <div>
        {education.degree ? (
          <p className="text-sm font-semibold">{education.degree}</p>
        ) : (
          <p className="text-sm font-semibold">{education.program}</p>
        )}
      </div>
    );
  };

  const columns = [
    { field: "institution" as keyof Education, header: "Institution" },
    { field: "position" as keyof Education, header: "Position" },
    { header: "Degree / Program", body: degreeProgamTemplate },
  ];

  const actions: XTableAction<Education>[] = [
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
        data={educations}
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
