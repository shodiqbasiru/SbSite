import SkeletonTableLoader from "@/components/loader/SkeletonTableLoader";
import React from "react";

export default function Loading() {
  const columns = [
    { field: "institution", header: "Institution", width: "25%" },
    { field: "degree/Program", header: "Degree / Program", width: "25%" },
    { field: "location", header: "Location", width: "25%" },
    { field: "actions", header: "Actions", width: "25%" },
  ];

  return (
    <SkeletonTableLoader
      columns={columns}
      addButtonLabel="Add Portfolio"
      headerTitle="List of Portfolio"
      rowCount={5}
    />
  );
}
