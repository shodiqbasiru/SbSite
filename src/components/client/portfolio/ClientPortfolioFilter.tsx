"use client";

import { Portfolio } from "@/types/portfolio";
import React, { useState } from "react";

export interface PortfolioProps {
  portfolios: Portfolio[];
  categories: string[];
}

export default function ClientPortfolioFilter({
  portfolios,
  categories,
}: PortfolioProps) {
  const [isActive, setIsActive] = useState("All");

  const filterCategory = (category: string) => {
    setIsActive(category);
  };

  return (
    <div className="w-full px-4 font-body md:w-[calc(100%-4rem)]">
      <div className="mb-4 flex flex-wrap justify-center gap-2 rounded-lg bg-slate-800 text-xs font-semibold uppercase tracking-widest shadow-md md:ms-8 md:w-fit md:text-sm lg:mb-0 lg:rounded-t-lg">
        {categories.map((category) => (
          <span
            key={category}
            onClick={() => filterCategory(category)}
            className={`font-button cursor-pointer rounded p-2 hover:text-amber-500 md:p-4 ${
              isActive === category ? "bg-amber-500" : ""
            }`}
          >
            {category}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 rounded-xl bg-slate-800 p-4 sm:grid-cols-2 lg:grid-cols-3">
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
                className="h-40 w-full object-cover sm:h-48"
              />
              <div className="flex-1 p-4">
                <h3 className="font-subHeading text-2xl font-bold sm:text-xl">
                  {portfolio.title}
                </h3>
                <div className="flex flex-wrap">
                  {portfolio.technologies.map((technology, index) => (
                    <span
                      key={index}
                      className="font-button mb-2 mr-2 rounded bg-slate-800 px-2 py-1 text-xs font-semibold text-slate-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <p className="mt-2 truncate text-[16px] text-slate-400">
                  {portfolio.description}
                </p>
              </div>
              <div className="flex flex-col flex-wrap justify-between gap-2 p-4 font-semibold uppercase lg:flex-row">
                {portfolio.linkWeb && (
                  <a
                    href={portfolio.linkWeb}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md bg-amber-500 px-4 py-2 text-center text-[16px] text-white"
                  >
                    View Website
                  </a>
                )}
                {portfolio.linkGithub && (
                  <a
                    href={portfolio.linkGithub}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md bg-amber-500 px-4 py-2 text-center text-[16px] text-white"
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
          <div className="col-span-1 text-center text-slate-400 sm:col-span-2 lg:col-span-3">
            No projects available in this category.
          </div>
        )}
      </div>
    </div>
  );
}
