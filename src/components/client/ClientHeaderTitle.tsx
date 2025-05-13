"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function ClientHeaderTitle() {
  const pathName = usePathname();
  const title = pathName === "/" ? "Home" : pathName.slice(1);
  return (
    <>
      <h1 className="mb-4 font-heading text-4xl font-bold capitalize">
        {title}
      </h1>
      <div className="h-1 w-16 rounded-full bg-amber-500"></div>
    </>
  );
}
