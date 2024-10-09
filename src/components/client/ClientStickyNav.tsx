"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaFileAlt } from "react-icons/fa";
import { MdWorkOutline, MdContactMail } from "react-icons/md";
import ClientLink from "./ClientLink";
import { usePathname } from "next/navigation";

export default function ClientStickyNav({
  scrollContainerRef,
}: {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}) {
  const pathName = usePathname();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        scrollContainerRef.current &&
        scrollContainerRef.current.scrollTop > 100
      ) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer?.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainer?.removeEventListener("scroll", handleScroll);
    };
  }, [scrollContainerRef]);

  return (
    <nav
      className={`rounded-b-2xl bg-slate-800 transition-transform duration-500 ease-in-out ${
        isSticky
          ? "fixed right-0 top-1/2 m-2 -translate-y-1/2 transform rounded-2xl bg-slate-800/90 p-4 shadow shadow-slate-500/50"
          : "p-6"
      }`}
    >
      <ul className={`flex gap-8 ${isSticky ? "flex-col" : ""}`}>
        <li>
          <ClientLink
            href="/about"
            classNames={`flex items-center gap-2 text-lg uppercase ${
              pathName === "/about" ? "text-amber-500" : "text-slate-300"
            }`}
          >
            <AiOutlineInfoCircle
              size={30}
              className={`${!isSticky && "hidden"} ${
                pathName === "/about" ? "text-amber-500" : "text-slate-300"
              }`}
            />
            <span className={`block ${isSticky ? "hidden flex-col" : ""}`}>
              About
            </span>
          </ClientLink>
        </li>
        <li>
          <ClientLink
            href="/resume"
            classNames={`flex items-center gap-2 text-lg uppercase ${
              pathName === "/resume" ? "text-amber-500" : "text-slate-300"
            }`}
          >
            <FaFileAlt
              size={30}
              className={`${!isSticky && "hidden"} ${
                pathName === "/resume" ? "text-amber-500" : "text-slate-300"
              }`}
            />
            <span className={`block ${isSticky ? "hidden flex-col" : ""}`}>
              Resume
            </span>
          </ClientLink>
        </li>
        <li>
          <ClientLink
            href="/portfolio"
            classNames={`flex items-center gap-2 text-lg uppercase ${
              pathName === "/portfolio" ? "text-amber-500" : "text-slate-300"
            }`}
          >
            <MdWorkOutline
              size={30}
              className={`${!isSticky && "hidden"} ${
                pathName === "/portfolio" ? "text-amber-500" : "text-slate-300"
              }`}
            />
            <span className={`block ${isSticky ? "hidden flex-col" : ""}`}>
              Portfolio
            </span>
          </ClientLink>
        </li>
        <li>
          <ClientLink
            href="/contact"
            classNames={`flex items-center gap-2 text-lg uppercase ${
              pathName === "/contact" ? "text-amber-500" : "text-slate-300"
            }`}
          >
            <MdContactMail
              size={30}
              className={`${!isSticky && "hidden"} ${
                pathName === "/contact" ? "text-amber-500" : "text-slate-300"
              }`}
            />
            <span className={`block ${isSticky ? "hidden flex-col" : ""}`}>
              Contact
            </span>
          </ClientLink>
        </li>
      </ul>
    </nav>
  );
}