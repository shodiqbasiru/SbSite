"use client";
import { ConfirmDialog } from "primereact/confirmdialog";

export default function DashboardDocumentPage() {
  return (
    <section>
      <ConfirmDialog />

      <div className="flex h-screen w-full items-center justify-center">
        <h1 className="text-4xl font-bold text-slate-100">
          Document Management
        </h1>
      </div>
    </section>
  );
}
