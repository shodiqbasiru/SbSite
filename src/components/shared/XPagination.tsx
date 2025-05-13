import React from "react";
import {
  Paginator,
  PaginatorCurrentPageReportOptions,
  PaginatorPageChangeEvent,
  PaginatorRowsPerPageDropdownOptions,
} from "primereact/paginator";
import { Dropdown } from "primereact/dropdown";

interface XPaginationProps {
  first: number;
  rows: number;
  totalRecords: number;
  onPageChange: (e: PaginatorPageChangeEvent) => void;
}

export default function XPagination({
  first,
  rows,
  totalRecords,
  onPageChange,
}: XPaginationProps) {
  const template = {
    layout: "RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink",
    RowsPerPageDropdown: (options: PaginatorRowsPerPageDropdownOptions) => {
      const dropdownOptions = [];
      for (let i = 5; i <= totalRecords; i += 5) {
        dropdownOptions.push({ label: i, value: i });
      }

      return (
        <>
          <span
            className="mx-1"
            style={{ color: "var(--text-color)", userSelect: "none" }}
          >
            Items per page:{" "}
          </span>
          <Dropdown
            value={options.value}
            options={dropdownOptions}
            onChange={options.onChange}
            className="bg-slate-800"
          />
        </>
      );
    },

    CurrentPageReport: (options: PaginatorCurrentPageReportOptions) => {
      return (
        <span
          style={{
            color: "var(--text-color)",
            userSelect: "none",
            width: "120px",
            textAlign: "center",
          }}
        >
          {options.first} - {options.last} of {options.totalRecords}
        </span>
      );
    },
  };
  return (
    <Paginator
      template={template}
      first={first}
      rows={rows}
      totalRecords={totalRecords}
      onPageChange={(e) => onPageChange(e)}
      className="w-fit bg-slate-800"
    />
  );
}
