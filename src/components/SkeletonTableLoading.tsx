import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Skeleton } from "primereact/skeleton";
import React from "react";
import XButton from "./XButton";

export default function SkeletonTableLoading() {
  const items: { code: number }[] = Array.from({ length: 5 }, (v, i) => ({
    code: i,
  }));

  // const technologiesBodyTemplate = () => {
  //   return (
  //     <div className="flex flex-wrap gap-2">
  //       {/* {Array.from({ length: 3 }).map((_, index) => (
  //             <Skeleton key={index} width="50px" height="20px" />
  //           ))} */}
  //       <Skeleton width="50px" height="20px" />
  //       <Skeleton width="50px" height="20px" />
  //       <Skeleton width="50px" height="20px" />
  //     </div>
  //   );
  // };

  const header = (
    <div className="flex w-full flex-wrap items-center justify-between gap-2 rounded p-4">
      <div className="mb-2">
        <span className="mb-2 block text-2xl font-bold text-white">
          List of Portfolio
        </span>
        <XButton label="Add Portfolio" icon="pi pi-plus" />
      </div>
      <XButton icon="pi pi-refresh" rounded="full" />
    </div>
  );

  const footer = (
    <div className="flex items-center justify-between">
      <span className="text-white">
        <Skeleton width="100px" />
      </span>
      <Skeleton width="100px" />
    </div>
  );
  return (
    <div className="card">
      <DataTable
        value={items}
        className="p-datatable-striped"
        header={header}
        footer={footer}
      >
        <Column
          field="title"
          header="Title"
          style={{ width: "10%" }}
          body={<Skeleton />}
        ></Column>
        <Column
          field="image"
          header="Image"
          style={{ width: "25%" }}
          body={<Skeleton />}
        ></Column>
        <Column
          header="Technology"
          style={{ width: "25%" }}
          body={<Skeleton />}
        ></Column>
        <Column
          field="category"
          header="Category"
          style={{ width: "10%" }}
          body={<Skeleton />}
        ></Column>
        <Column
          field="date"
          header="Date"
          style={{ width: "10%" }}
          body={<Skeleton />}
        ></Column>
        <Column
          header="Actions"
          style={{ width: "20%" }}
          body={<Skeleton />}
        ></Column>
      </DataTable>
    </div>
  );
}
