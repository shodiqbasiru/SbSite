"use client";
import { Toast } from "primereact/toast";
import { ConfirmDialog } from "primereact/confirmdialog";

interface Technology {
  id: number;
  name: string;
}

interface Category {
  label: string;
  value: string;
}

export default function DashboardDocumentPage() {

  return (
    <section>
      <Toast ref={toast} />
      <ConfirmDialog />

      
    </section>
  );
}
