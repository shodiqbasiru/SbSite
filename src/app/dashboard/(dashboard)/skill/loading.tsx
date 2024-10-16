import SkeletonTableLoader from "@/components/loader/SkeletonTableLoader";
import React from "react";

export default function Loading() {
  const columns = [
    { field: "title", header: "Title", width: "25%" },
    { field: "image", header: "Image", width: "25%" },
    { field: "level", header: "Level", width: "25%" },
    { field: "action", header: "Actions", width: "25%" },
  ];
  return (
    <SkeletonTableLoader
      columns={columns}
      addButtonLabel="Add Skill"
      headerTitle="List of Skill"
      rowCount={5}
    />
  );
}
