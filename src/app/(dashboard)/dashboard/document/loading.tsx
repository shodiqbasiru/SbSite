import SkeletonTableLoader from "@/components/loader/SkeletonTableLoader";
import React from "react";

export default function Loading() {
  const columns = [
    { field: "title", header: "Title", width: "10%" },
    { field: "image", header: "Image", width: "25%" },
    { field: "technology", header: "Technology", width: "25%" },
    { field: "category", header: "Category", width: "10%" },
    { field: "date", header: "Date", width: "10%" },
    { field: "actions", header: "Actions", width: "20%" },
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
