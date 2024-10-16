"use client";

import { Skeleton } from "primereact/skeleton";
import { Timeline } from "primereact/timeline";
import React from "react";

export default  function SkeletonEducationLoader() {
  const content = () => {
    return (
      <div className="overflow-hidden rounded-2xl bg-slate-800 text-left">
        <div className="mb-2 flex justify-between">
          <div></div>
          <p className="rounded-b-xl bg-slate-700 px-4 py-2">
            <Skeleton width="100px" height="20px" />
          </p>
        </div>
        <div className="px-4 pb-4">
          <Skeleton width="200px" height="20px" />
          <Skeleton width="100px" height="20px" />
          <div className="mb-1 flex justify-between gap-1">
            <Skeleton width="200px" height="20px" />
            <Skeleton width="100px" height="20px" />
          </div>
          <div>
            <Skeleton width="100%" height="100px" />
            <Skeleton width="100%" height="100px" />
            <Skeleton width="100%" height="100px" />
            <Skeleton width="100%" height="100px" />
            <Skeleton width="100%" height="100px" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mb-16">
      <h2 className="mb-4 text-3xl font-bold">Education</h2>

      <Timeline
        value={[]}
        content={content}
        pt={{
          root: { className: "w-[calc(100%-4rem)]" },
          opposite: { className: "hidden" },
          marker: { className: "bg-slate-100 border-4" },
        }}
      />
    </div>
  );
}
