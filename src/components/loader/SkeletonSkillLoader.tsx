"use client";

import { Skeleton } from "primereact/skeleton";
import React from "react";

export default function SkeletonSkillLoader() {
  return (
    <div className="mb-16 w-[calc(100%-4rem)]">
      <h2 className="mb-4 text-3xl font-bold">Skills</h2>

      <div className="grid grid-cols-4 gap-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-xl bg-slate-800 p-4"
          >
            <Skeleton shape="circle" size="3rem" className="h-12 w-12 rounded-lg" />
            <div>
              <Skeleton width="10rem" height="2rem" className="mb-2" />
              <Skeleton width="8rem" height="1.5rem" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
