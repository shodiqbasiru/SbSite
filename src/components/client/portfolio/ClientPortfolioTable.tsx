"use client";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Portfolio } from "@/types/portfolio";
import { useRouter } from "next/navigation";

interface PortfolioTableProps {
  showDialog: (visible: boolean) => void;
  onEdit: (portfolio: Portfolio) => void;
  onDelete: (portfolio: Portfolio) => void;
  portfolios: Portfolio[];
}

export default function ClientPortfolioTable({
  showDialog,
  onEdit,
  portfolios,
  onDelete,
}: PortfolioTableProps) {

  const router = useRouter();

  const handleShowDialog = () => {
    showDialog(true);
  };

  const handleEdit = (portfolio: Portfolio) => {
    router.push(`/dashboard/portfolio?id=${portfolio.id}`);
    onEdit(portfolio);
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
          className="p-button-rounded p-button-success"
          onClick={() => handleEdit(portfolio)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger"
          onClick={() => onDelete(portfolio)}
        />
        <Button icon="pi pi-eye" className="p-button-rounded p-button-info" />
      </div>
    );
  };

  const header = (
    <div className="flex w-full flex-wrap items-center justify-between gap-2">
      <div className="mb-2">
        <span className="mb-2 block text-2xl font-bold text-white">
          List of Portfolio
        </span>
        <Button
          icon="pi pi-plus"
          label="Add Portfolio"
          raised
          size="small"
          onClick={handleShowDialog}
        />
      </div>
      <Button icon="pi pi-refresh" rounded raised />
    </div>
  );

  const footer = `In total there are ${portfolios ? portfolios.length : 0} portfolios.`;

  return (
    <section>
      <DataTable
        value={portfolios}
        header={header}
        footer={footer}
        tableStyle={{ minWidth: "60rem" }}
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
