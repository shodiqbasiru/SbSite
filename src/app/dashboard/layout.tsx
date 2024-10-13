import DashboardSidebarComponent from "@/components/layouts/DashboardSidebarComponent";
import React from "react";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <DashboardSidebarComponent />
      <main className="hide-scroll h-[100dvh] flex-1 overflow-y-scroll rounded-2xl">
        <div className="bg-slate-900 p-8">{children}</div>
      </main>
    </>
  );
}
