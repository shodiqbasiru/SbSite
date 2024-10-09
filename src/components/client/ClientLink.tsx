"use client";

import Link from "next/link";
import type { ReactNode } from "react";

export default function ClientLink({
  children,
  href,
  classNames,
}: {
  children: ReactNode;
  href: string;
  classNames?: string;
}) {

  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  );
}
