import React from "react";
import XButton from "../shared/XButton";
import { Skeleton } from "primereact/skeleton";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface SkeletonTableLoaderProps {
  columns: { field?: string; header: string; width: string }[];
  rowCount: number;
  headerTitle: string;
  addButtonLabel: string;
}

export default function SkeletonTableLoader({
  columns,
  rowCount,
  headerTitle,
  addButtonLabel,
}: SkeletonTableLoaderProps) {
  const items = Array.from({ length: rowCount }, (v, i) => ({ code: i }));

  const header = (
    <div className="flex w-full flex-wrap items-center justify-between gap-2 rounded ">
      <div className="mb-2">
        <span className="mb-2 block text-2xl font-bold text-white">
          {headerTitle}
        </span>
        <XButton label={addButtonLabel} icon="pi pi-plus" />
      </div>
      <XButton icon="pi pi-refresh" rounded="full" />
    </div>
  );

  const footer = (
    <div className="flex items-center justify-between">
      <span className="text-white">
        <Skeleton width="100px" />
      </span>
      <Skeleton width="100px" />
    </div>
  );

  return (
    <div className="card">
      <DataTable
        value={items}
        className="p-datatable-striped"
        header={header}
        footer={footer}
        pt={{
          root: {
            className: "bg-slate-800 border border-slate-700 p-8 rounded-xl",
          },
          header: { className: "bg-slate-700 rounded-xl mb-8" },
          footer: { className: "bg-slate-700 rounded-xl mt-8" },
          table: { className: "w-full " },
          column: {
            headerCell: { className: "bg-slate-700 text-white" },
            bodyCell: {
              className: "bg-slate-800 text-white  border-slate-700",
            },
          },
        }}
      >
        {columns.map((col, index) => (
          <Column
            key={index}
            field={col.field}
            header={col.header}
            style={{ width: col.width }}
            body={<Skeleton />}
          />
        ))}
      </DataTable>
    </div>
  );
}
