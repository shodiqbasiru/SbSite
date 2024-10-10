"use client";

import { PortfolioProps } from "@/types/Portfolio";
import React, { useState } from "react";

export default function ClientPortfolioFilter({
  portfolios,
  categories,
}: PortfolioProps) {
  const [isActive, setIsActive] = useState("All");

  const filterCategory = (category: string) => {
    setIsActive(category);
  };

  return (
    <div className="w-[calc(100%-4rem)]">
      <div className="ms-8 flex w-fit rounded-t-lg bg-slate-800 text-sm font-semibold uppercase tracking-widest shadow-md">
        {categories.map((category) => (
          <span
            key={category}
            onClick={() => filterCategory(category)}
            className={`cursor-pointer rounded p-4 hover:text-amber-500 ${isActive === category ? "bg-amber-500" : ""}`}
          >
            {category}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 rounded-xl bg-slate-800 p-4 md:grid-cols-2 lg:grid-cols-3">
        {portfolios
          .filter(
            (portfolio) =>
              isActive === "All" || portfolio.category === isActive,
          )
          .map((portfolio, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-lg bg-slate-700"
            >
              <img
                src={portfolio.imgUrl}
                alt={portfolio.title}
                className="h-48 w-full object-cover"
              />
              <div className="flex-1 p-4">
                <h3 className="text-xl font-bold">{portfolio.title}</h3>
                <div className="flex flex-wrap">
                  {portfolio.technologies.map((technology, index) => (
                    <span
                      key={index}
                      className="mr-2 rounded bg-slate-800 px-2 py-1 text-xs font-semibold text-slate-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <p className="mt-2 text-slate-400 truncate">
                  {portfolio.description}
                </p>
              </div>
              <div className="flex justify-between p-4 font-semibold text-slate-800">
                {portfolio.linkWeb && (
                  <a
                    href={portfolio.linkWeb}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-amber-500 px-4 py-2"
                  >
                    View Website
                  </a>
                )}
                {portfolio.linkGithub && (
                  <a
                    href={portfolio.linkGithub}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-amber-500 px-4 py-2"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          ))}
        {portfolios.filter(
          (portfolio) => isActive === "All" || portfolio.category === isActive,
        ).length === 0 && (
          <div className="col-span-3 text-center text-slate-400">
            No projects available in this category.
          </div>
        )}
      </div>
    </div>
  );
}
