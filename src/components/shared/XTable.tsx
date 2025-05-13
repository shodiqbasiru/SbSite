import { DataTable, DataTableValue } from "primereact/datatable";
import React from "react";
import XButton, { SeverityType } from "./XButton";
import XPagination from "./XPagination";
import { PaginatorPageChangeEvent } from "primereact/paginator";
import { Column } from "primereact/column";

interface XTableColumn<T> {
  field?: keyof T;
  header: string;
  body?: (data: T) => React.ReactNode;
}

export interface XTableAction<T> {
  icon: string;
  severity: SeverityType;
  onClick: (data: T) => void;
}

interface XTableProps<T> {
  data: T[];
  columns: XTableColumn<T>[];
  actions: XTableAction<T>[];
  title: string;
  label: string;
  first: number;
  rows: number;
  totalRecords: number;
  showDialog: (visible: boolean) => void;
  onPageChange: (e: PaginatorPageChangeEvent) => void;
}

export default function XTable<T>({
  data,
  columns,
  actions,
  title,
  label,
  first,
  rows,
  totalRecords,
  showDialog,
  onPageChange,
}: XTableProps<T>) {
  const handleShowDialog = () => {
    showDialog(true);
  };

  const actionBodyTemplate = (rowData: T) => {
    return (
      <div className="flex gap-2">
        {actions.map((action, index) => (
          <XButton
            key={index}
            icon={action.icon}
            rounded="full"
            severity={action.severity}
            onClick={() => action.onClick(rowData)}
          />
        ))}
      </div>
    );
  };

  const header = (
    <div className="flex w-full flex-wrap items-center justify-between gap-2 rounded">
      <div className="mb-2">
        <span className="mb-2 block text-2xl font-bold text-white">
          {title}
        </span>
        <XButton label={label} icon="pi pi-plus" onClick={handleShowDialog} />
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
    <>
      <DataTable
        value={data as unknown as DataTableValue[]}
        header={header}
        footer={footer}
        pt={{
          root: {
            className: "bg-slate-800 border border-slate-700 p-4 rounded-2xl",
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
            field={col.field as string}
            header={col.header}
            body={col.body}
          />
        ))}
        <Column header="Actions" body={actionBodyTemplate}></Column>
      </DataTable>
    </>
  );
}
