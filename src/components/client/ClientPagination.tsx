import React from "react";
import {
  Paginator,
  PaginatorCurrentPageReportOptions,
  PaginatorPageChangeEvent,
  PaginatorRowsPerPageDropdownOptions,
} from "primereact/paginator";
import { useState } from "react";
import { Dropdown } from "primereact/dropdown";

interface ClientpaginationProps {
  first: number;
  rows: number;
  totalRecords: number;
  onPageChange: (e: PaginatorPageChangeEvent) => void;
}

export default function ClientPagination({
  first,
  rows,
  totalRecords,
  onPageChange,
}: ClientpaginationProps) {
  const template = {
    layout: "RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink",
    RowsPerPageDropdown: (options: PaginatorRowsPerPageDropdownOptions) => {
      const dropdownOptions = [
        { label: 5, value: 5 },
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 120, value: 120 },
      ];

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
