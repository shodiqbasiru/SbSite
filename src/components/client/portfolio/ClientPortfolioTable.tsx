"use client";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Portfolio } from "@/types/portfolio";
import { useRouter } from "next/navigation";
import ClientPagination from "../ClientPagination";
import { on } from "events";
import { PaginatorPageChangeEvent } from "primereact/paginator";

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
        <Button
          icon="pi pi-pencil"
          className="rounded-full bg-gray-800 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-gray-800 transition-all duration-300 ease-in-out"
          onClick={() => handleEdit(portfolio)}
        />
        <Button
          icon="pi pi-trash"
          className="rounded-full bg-gray-800 border border-red-500 text-red-500 hover:bg-red-500 hover:text-gray-800 transition-all duration-300 ease-in-out"
          onClick={() => onDelete(portfolio)}
        />
        <Button
          icon="pi pi-eye"
          className="rounded-full bg-gray-800 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-800 transition-all duration-300 ease-in-out"
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
        <Button
          icon="pi pi-plus"
          label="Add Portfolio"
          raised
          size="small"
          className="bg-amber-500 text-gray-800 hover:bg-gray-800 hover:text-amber-500 transition-all duration-300 ease-in-out"
          onClick={handleShowDialog}
        />
      </div>
      <Button icon="pi pi-refresh" rounded raised />
    </div>
  );

  const footer = (
    <div className="flex items-center justify-between">
      <span className="text-white">
        Showing {first + 1} to {first + rows} of {totalRecords} entries
      </span>
      <ClientPagination
        first={first}
        rows={rows}
        totalRecords={totalRecords}
        onPageChange={onPageChange}
      />
    </div>
  );

  return (
    <section>
      <DataTable value={portfolios} header={header} footer={footer}>
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
