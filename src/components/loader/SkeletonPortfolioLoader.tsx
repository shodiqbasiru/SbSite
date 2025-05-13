import React from "react";

import { Skeleton } from "primereact/skeleton";

export default function SkeletonPortfolioLoader() {
  return (
    <div className="w-[calc(100%-4rem)]">
      <div className="ms-8 flex w-fit rounded-t-lg bg-slate-800 text-sm font-semibold uppercase tracking-widest shadow-md">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton
            key={index}
            shape="rectangle"
            width="100px"
            height="30px"
            className="m-2"
          />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 rounded-xl bg-slate-800 p-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden rounded-lg bg-slate-700"
          >
            <Skeleton shape="rectangle" width="100%" height="192px" />
            <div className="flex-1 p-4">
              <Skeleton
                shape="rectangle"
                width="80%"
                height="24px"
                className="mb-2"
              />
              <div className="flex flex-wrap">
                {Array.from({ length: 3 }).map((_, techIndex) => (
                  <Skeleton
                    key={techIndex}
                    shape="rectangle"
                    width="50px"
                    height="20px"
                    className="mb-2 mr-2"
                  />
                ))}
              </div>
              <Skeleton shape="rectangle" width="100%" height="48px" />
            </div>
            <div className="flex justify-between p-4">
              <Skeleton
                shape="rectangle"
                width="100px"
                height="32px"
                className="mr-2"
              />
              <Skeleton shape="rectangle" width="100px" height="32px" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
