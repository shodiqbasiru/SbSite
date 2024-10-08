"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaFileAlt } from "react-icons/fa";
import { MdWorkOutline, MdContactMail } from "react-icons/md";

export default function Header({
  scrollContainerRef,
}: {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}) {
  const pathName = usePathname();
  const title = pathName === "/" ? "Home" : pathName.slice(1);

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
    <header className="flex justify-between">
      <div className="ms-8 mt-14">
        <h1 className="mb-4 text-4xl font-bold capitalize">{title}</h1>
        <div className="h-1 w-16 rounded-full bg-amber-500"></div>
      </div>
      <div>
        <nav
          className={`rounded-b-2xl bg-slate-800 transition-transform duration-500 ease-in-out ${
            isSticky
              ? "fixed right-0 top-1/2 m-2 -translate-y-1/2 transform rounded-2xl bg-slate-800/90 p-4 shadow shadow-slate-500/50"
              : "p-6"
          }`}
        >
          <ul className={`flex gap-8 ${isSticky ? "flex-col" : ""}`}>
          <li>
              <Link
                href="/"
                className="flex items-center gap-2 text-lg uppercase"
              >
                <AiOutlineInfoCircle
                  size={30}
                  className={`text-amber-500 ${!isSticky && "hidden"}`}
                />
                <span className={`block ${isSticky ? "hidden flex-col" : ""}`}>
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="flex items-center gap-2 text-lg uppercase"
              >
                <AiOutlineInfoCircle
                  size={30}
                  className={`text-amber-500 ${!isSticky && "hidden"}`}
                />
                <span className={`block ${isSticky ? "hidden flex-col" : ""}`}>
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/resume"
                className="flex items-center gap-2 text-lg uppercase"
              >
                <FaFileAlt
                  size={30}
                  className={`text-amber-500 ${!isSticky && "hidden"}`}
                />
                <span className={`block ${isSticky ? "hidden flex-col" : ""}`}>
                  Resume
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="flex items-center gap-2 text-lg uppercase"
              >
                <MdWorkOutline
                  size={30}
                  className={`text-amber-500 ${!isSticky && "hidden"}`}
                />
                <span className={`block ${isSticky ? "hidden flex-col" : ""}`}>
                  Portfolio
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex items-center gap-2 text-lg uppercase"
              >
                <MdContactMail
                  size={30}
                  className={`text-amber-500 ${!isSticky && "hidden"}`}
                />
                <span className={`block ${isSticky ? "hidden flex-col" : ""}`}>
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
