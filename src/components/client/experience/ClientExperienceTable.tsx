"use client";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import { PaginatorPageChangeEvent } from "primereact/paginator";
import XPagination from "@/components/shared/XPagination";
import XButton from "@/components/shared/XButton";
import { Experience } from "@/types/experience";

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

  const handleShowDialog = () => {
    showDialog(true);
  };

  const handleEdit = (experience: Experience) => {
    router.push(`/dashboard/experience?edit=true&id=${experience.id}`);
    onEdit(experience);
  };

  const handleShowDetail = (experience: Experience) => {
    router.push(`/dashboard/experience?showDetail=true&id=${experience.id}`);
    onShowDetail(experience);
  };

  // const dateBodyTemplate = (experience: Experience) => {
  //   const date = experience.date ? new Date(experience.date) : new Date();
  //   return date.toLocaleDateString("id-ID", {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   });
  // };

  const actionBodyTemplate = (portfolio: Experience) => {
    return (
      <div className="flex gap-2">
        <XButton
          icon="pi pi-pencil"
          rounded="full"
          severity="warning-outline"
          onClick={() => handleEdit(portfolio)}
        />
        <XButton
          icon="pi pi-trash"
          rounded="full"
          severity="error-outline"
          onClick={() => onDelete(portfolio)}
        />
        <XButton
          icon="pi pi-eye"
          rounded="full"
          severity="info-outline"
          onClick={() => handleShowDetail(portfolio)}
        />
      </div>
    );
  };

  const header = (
    <div className="flex w-full flex-wrap items-center justify-between gap-2 rounded p-4">
      <div className="mb-2">
        <span className="mb-2 block text-2xl font-bold text-white">
          List of Experience
        </span>
        <XButton
          label="Add Experience"
          icon="pi pi-plus"
          onClick={handleShowDialog}
        />
      </div>
      <XButton icon="pi pi-refresh" rounded="full" />
    </div>
  );

  const footer = (
    <div className="flex items-center justify-between">
      <span className="text-white">
        Showing {first + 1} to {first + rows} of {totalRecords} entries
      </span>
      <XPagination
        first={first}
        rows={rows}
        totalRecords={totalRecords}
        onPageChange={onPageChange}
      />
    </div>
  );

  return (
    <section>
      <DataTable
        value={experiences}
        header={header}
        footer={footer}
        pt={{ table: { className: "w-full" } }}
      >
        <Column field="companyName" header="Company Name"></Column>
        <Column field="position" header="Position"></Column>
        <Column field="employmentType" header="Employment Type"></Column>
        <Column field="location" header="Location"></Column>
        <Column header="Actions" body={actionBodyTemplate}></Column>
      </DataTable>
    </section>
  );
}
