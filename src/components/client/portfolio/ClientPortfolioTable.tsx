"use client";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Portfolio } from "@/types/portfolio";
import { useRouter } from "next/navigation";
import { PaginatorPageChangeEvent } from "primereact/paginator";
import XPagination from "@/components/shared/XPagination";
import XButton from "@/components/shared/XButton";

interface PortfolioTableProps {
  showDialog: (visible: boolean) => void;
  onEdit: (portfolio: Portfolio) => void;
  onDelete: (portfolio: Portfolio) => void;
  onShowDetail: (portfolio: Portfolio) => void;
  portfolios: Portfolio[];
  first: number;
  rows: number;
  totalRecords: number;
  onPageChange: (e: PaginatorPageChangeEvent) => void;
}

export default function ClientPortfolioTable({
  showDialog,
  onEdit,
  portfolios,
  onDelete,
  onShowDetail,
  first,
  rows,
  totalRecords,
  onPageChange,
}: PortfolioTableProps) {
  const router = useRouter();

  const handleShowDialog = () => {
    showDialog(true);
  };

  const handleEdit = (portfolio: Portfolio) => {
    router.push(`/dashboard/portfolio?edit=true&id=${portfolio.id}`);
    onEdit(portfolio);
  };

  const handleShowDetail = (portfolio: Portfolio) => {
    router.push(`/dashboard/portfolio?showDetail=true&id=${portfolio.id}`);
    onShowDetail(portfolio);
  };

  const imageBodyTemplate = (portfolio: Portfolio) => {
    return (
      <img
        src={portfolio.imgUrl}
        alt={portfolio.title}
        className="shadow-2 h-24 w-full rounded-lg object-cover"
      />
    );
  };

  const technologiesBodyTemplate = (portfolio: Portfolio) => {
    return (
      <div className="flex flex-wrap gap-2">
        {portfolio.technologies.map((technology, index) => (
          <span
            key={index}
            className="rounded bg-slate-700 px-2 py-1 text-xs font-semibold text-slate-200"
          >
            {technology}
          </span>
        ))}
      </div>
    );
  };

  const dateBodyTemplate = (portfolio: Portfolio) => {
    const date = portfolio.date ? new Date(portfolio.date) : new Date();
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const actionBodyTemplate = (portfolio: Portfolio) => {
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
          List of Portfolio
        </span>
        <XButton
          label="Add Portfolio"
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
        value={portfolios}
        header={header}
        footer={footer}
        pt={{ table: { className: "w-full" } }}
      >
        <Column field="title" header="Title"></Column>
        <Column header="Image" body={imageBodyTemplate}></Column>
        <Column header="Technologies" body={technologiesBodyTemplate}></Column>
        <Column field="category" header="Category"></Column>
        <Column field="date" header="Date" body={dateBodyTemplate}></Column>
        <Column header="Actions" body={actionBodyTemplate}></Column>
      </DataTable>
    </section>
  );
}
