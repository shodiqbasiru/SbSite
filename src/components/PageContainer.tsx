"use client";

import React, { useRef } from "react";
import Header from "./Header";

export default function PageContainer({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollContainerRef}
      className={`hide-scroll h-[100dvh] flex-1 overflow-y-scroll rounded-2xl ${classNames}`}
    >
      <Header scrollContainerRef={scrollContainerRef} />

      <main className="p-8">{children}</main>
    </div>
  );
}
