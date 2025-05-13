import SkeletonTableLoader from "@/components/loader/SkeletonTableLoader";
import React from "react";

export default function Loading() {
  const columns = [
    { field: "companyName", header: "Company Name", width: "20%" },
    { field: "position", header: "Position", width: "25%" },
    { field: "employmentType", header: "Employee Type", width: "25%" },
    { field: "location", header: "Location", width: "10%" },
    { field: "actions", header: "Actions", width: "20%" },
  ];

  return (
    <SkeletonTableLoader
      columns={columns}
      addButtonLabel="Add Experience"
      headerTitle="List of Experience"
      rowCount={5}
    />
  );
}
