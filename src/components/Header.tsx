import React from "react";
import ClientStickyNav from "./client/ClientStickyNav";
import ClientHeaderTitle from "./client/ClientHeaderTitle";

export default function Header({
  scrollContainerRef,
}: {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <header className="flex justify-between">
      <div className="ms-8 mt-14">
       <ClientHeaderTitle />
      </div>
      <div>
        <ClientStickyNav scrollContainerRef={scrollContainerRef} />
      </div>
    </header>
  );
}
