"use client";;
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import { PaginatorPageChangeEvent } from "primereact/paginator";
import XPagination from "@/components/shared/XPagination";
import XButton from "@/components/shared/XButton";
import { Education } from "@/types/education";

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

  const handleShowDialog = () => {
    showDialog(true);
  };

  const handleEdit = (education: Education) => {
    router.push(`/dashboard/education?edit=true&id=${education.id}`);
    onEdit(education);
  };

  const handleShowDetail = (education: Education) => {
    router.push(`/dashboard/education?showDetail=true&id=${education.id}`);
    onShowDetail(education);
  };

  const actionBodyTemplate = (education: Education) => {
    return (
      <div className="flex gap-2">
        <XButton
          icon="pi pi-pencil"
          rounded="full"
          severity="warning-outline"
          onClick={() => handleEdit(education)}
        />
        <XButton
          icon="pi pi-trash"
          rounded="full"
          severity="error-outline"
          onClick={() => onDelete(education)}
        />
        <XButton
          icon="pi pi-eye"
          rounded="full"
          severity="info-outline"
          onClick={() => handleShowDetail(education)}
        />
      </div>
    );
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
  }

  const header = (
    <div className="flex w-full flex-wrap items-center justify-between gap-2 rounded p-4">
      <div className="mb-2">
        <span className="mb-2 block text-2xl font-bold text-white">
          List of education
        </span>
        <XButton
          label="Add education"
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
        value={educations}
        header={header}
        footer={footer}
        pt={{ table: { className: "w-full" } }}
      >
        <Column field="institution" header="Institution"></Column>
        <Column header="Degree / Program" body={degreeProgamTemplate}></Column>
        <Column field="location" header="Location"></Column>
        <Column header="Actions" body={actionBodyTemplate}></Column>
      </DataTable>
    </section>
  );
}
