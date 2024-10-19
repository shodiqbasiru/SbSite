import DashboardHeaderComponent from "@/components/layouts/DashboardHeaderComponent";
import React from "react";

export default function DashboardProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="hide-scroll mx-auto flex h-[100dvh] max-w-screen-xl flex-1 flex-col gap-4 overflow-y-scroll">
      <div className="mt-4 rounded-2xl bg-slate-900 p-8 shadow-lg">
        <DashboardHeaderComponent />
      </div>

      <main className="rounded-2xl bg-slate-900 p-8 shadow-lg relative">{children}</main>
    </div>
  );
}
