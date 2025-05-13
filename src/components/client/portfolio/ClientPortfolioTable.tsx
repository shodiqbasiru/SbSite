"use client";
import { Portfolio } from "@/types/portfolio";
import { useRouter } from "next/navigation";
import { PaginatorPageChangeEvent } from "primereact/paginator";
import { SeverityType } from "@/components/shared/XButton";
import XTable, { XTableAction } from "@/components/shared/XTable";

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

  const technologyBodyTemplate = (portfolio: Portfolio) => {
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
  }

  const columns = [
    { field: "title" as keyof Portfolio, header: "Title" },
    { header: "Image", body: imageBodyTemplate },
    {
      header: "Technologies",
      body: technologyBodyTemplate,
    },
    { field: "category" as keyof Portfolio, header: "Category" },
    {
      header: "Date",
      body: dateBodyTemplate,
    },
  ];

  const actions: XTableAction<Portfolio>[] = [
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
        data={portfolios}
        columns={columns}
        actions={actions}
        title="List of portfolio"
        label="Add Portfolio"
        first={first}
        rows={rows}
        totalRecords={totalRecords}
        showDialog={showDialog}
        onPageChange={onPageChange}
      />
    </section>
  );
}
