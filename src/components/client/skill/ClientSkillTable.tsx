"use client"

import XButton from "@/components/shared/XButton";
import XPagination from "@/components/shared/XPagination";
import { Skill } from "@/types/skill";
import { useRouter } from "next/navigation";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { PaginatorPageChangeEvent } from "primereact/paginator";
import React from "react";

interface SkillTableProps {
  showDialog: (visible: boolean) => void;
  onEdit: (skill: Skill) => void;
  onDelete: (skill: Skill) => void;
  skills: Skill[];
  first: number;
  rows: number;
  totalRecords: number;
  onPageChange: (e: PaginatorPageChangeEvent) => void;
}
export default function ClientSkillTable({
  showDialog,
  onEdit,
  onDelete,
  skills,
  first,
  rows,
  totalRecords,
  onPageChange,
}: SkillTableProps) {
  const router = useRouter();

  const handleShowDialog = () => {
    showDialog(true);
  };

  const handleEdit = (skill: Skill) => {
    router.push(`/dashboard/skill?edit=true&id=${skill.id}`);
    onEdit(skill);
  };

  const actionBodyTemplate = (skill: Skill) => {
    return (
      <div className="flex gap-2">
        <XButton
          icon="pi pi-pencil"
          rounded="full"
          severity="warning-outline"
          onClick={() => handleEdit(skill)}
        />
        <XButton
          icon="pi pi-trash"
          rounded="full"
          severity="error-outline"
          onClick={() => onDelete(skill)}
        />
      </div>
    );
  };

  const header = (
    <div className="flex w-full flex-wrap items-center justify-between gap-2 rounded p-4">
      <div className="mb-2">
        <span className="mb-2 block text-2xl font-bold text-white">
          List of Skill
        </span>
        <XButton
          label="Add Skill"
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

  const imageBodyTemplate = (skill: Skill) => {
    return (
      <img
        src={skill.iconUrl}
        alt={skill.title}
        className="shadow-2 rounded-lg w-12 h-12 aspect-w-1 aspect-h-1"
      />
    );
  };

  return (
    <section>
      <DataTable
        value={skills}
        header={header}
        footer={footer}
        pt={{ table: { className: "w-full" } }}
      >
        <Column field="title" header="Title"></Column>
        <Column header="Image" body={imageBodyTemplate}></Column>
        <Column field="level" header="Level"></Column>
        <Column header="Actions" body={actionBodyTemplate}></Column>
      </DataTable>
    </section>
  );
}
