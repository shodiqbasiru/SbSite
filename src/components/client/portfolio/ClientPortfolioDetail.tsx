import React from "react";
import ClientModal from "../ClientModal";
import { useRouter } from "next/navigation";
import { Portfolio } from "@/types/portfolio";

interface ClientPortfolioDetailProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  selectedPortfolio: Portfolio | null;
  setSelectedPortfolio: (selectedPortfolio: Portfolio | null) => void;
}
export default function ClientPortfolioDetail({
  visible,
  setVisible,
  selectedPortfolio,
  setSelectedPortfolio,
}: ClientPortfolioDetailProps) {
  const router = useRouter();

  const onHide = () => {
    if (!visible) return;
    router.replace("/dashboard/portfolio");
    setVisible(false);
    setSelectedPortfolio(null);
  };

  const convertDate = (date: Date) => {
    return new Date(date).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const date = convertDate(selectedPortfolio?.date as unknown as Date);

  const header = (
    <h2 className="text-xl font-bold text-slate-50">
      {selectedPortfolio?.title}
    </h2>
  );

  const content = (
    <div className="text-slate-50">
      <div className="relative mb-3">
        <img
          src={selectedPortfolio?.imgUrl}
          alt={selectedPortfolio?.title}
          className="h-auto w-full rounded-lg shadow-md"
        />

        <span className="absolute right-0 top-0 rounded bg-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-widest">
          {selectedPortfolio?.category}
        </span>
      </div>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {selectedPortfolio?.technologies.map((technology, index) => (
            <span
              key={index}
              className="rounded bg-slate-700 px-2 py-1 text-xs font-semibold text-slate-200"
            >
              {technology}
            </span>
          ))}
        </div>
        <p>{date}</p>
      </div>
      <p className="mb-3 text-justify text-slate-300">
        {selectedPortfolio?.description}
      </p>

      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span>Link to website:</span>
        {selectedPortfolio?.linkWeb ? (
          <a
            href={selectedPortfolio?.linkWeb}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            {selectedPortfolio?.linkWeb}
          </a>
        ) : (
          <span className="text-slate-300">Not available</span>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span>Link to github:</span>
        <a
          href={selectedPortfolio?.linkGithub}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          {selectedPortfolio?.linkGithub}
        </a>
      </div>
    </div>
  );
  return (
    <ClientModal
      visible={visible}
      header={header}
      onHide={onHide}
      children={content}
    />
  );
}
