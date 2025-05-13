import { Portfolio } from "@/types/portfolio";
import { useRouter } from "next/navigation";
import { Dialog } from "primereact/dialog";
import React from "react";

export default function ClientModalPortfolio({
  visible,
  setVisible,
  portfolio,
}: {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  portfolio: Portfolio | null;
}) {

    const router = useRouter();

    const onHide = () => {
      if (!visible) return;
        setVisible(false);
        router.replace("/portfolio");
    }

  return (
    <Dialog
      header={portfolio?.title}
      visible={visible}
      style={{ width: "50vw" }}
      onHide={onHide}
    >
    <div className="text-slate-50">
      <div className="relative mb-3">
        <img
          src={portfolio?.imgUrl}
          alt={portfolio?.title}
          className="h-auto w-full rounded-lg shadow-md"
        />

        <span className="absolute right-0 top-0 rounded bg-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-widest">
          {portfolio?.category}
        </span>
      </div>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {portfolio?.technologies.map((technology, index) => (
            <span
              key={index}
              className="rounded bg-slate-700 px-2 py-1 text-xs font-semibold text-slate-200"
            >
              {technology}
            </span>
          ))}
        </div>
        {/* <p>{portfolio?.date}</p> */}
      </div>
      <p className="mb-3 text-justify text-slate-300">
        {portfolio?.description}
      </p>

      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span>Link to website:</span>
        {portfolio?.linkWeb ? (
          <a
            href={portfolio?.linkWeb}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            {portfolio?.linkWeb}
          </a>
        ) : (
          <span className="text-slate-300">Not available</span>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span>Link to github:</span>
        <a
          href={portfolio?.linkGithub}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          {portfolio?.linkGithub}
        </a>
      </div>
    </div>
    </Dialog>
  );
}
