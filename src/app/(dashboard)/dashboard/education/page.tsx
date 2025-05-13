"use client";

import ClientEducationDetail from "@/components/client/education/ClientEducationDetail";
import ClientEducationForm from "@/components/client/education/ClientEducationForm";
import ClientEducationTable from "@/components/client/education/ClientEducationTable";
import { useEducation } from "@/hook/useEducation";
import EducationService from "@/service/EducationService";
import { Education } from "@/types/education";
import { useRouter, useSearchParams } from "next/navigation";
import { ConfirmDialog } from "primereact/confirmdialog";
import { PaginatorPageChangeEvent } from "primereact/paginator";
import { Toast } from "primereact/toast";
import { Nullable } from "primereact/ts-helpers";
import React, { FormEvent, useEffect, useState } from "react";

export default function DashboardEducationPage() {
  const {
    data: { educations, toast },
    methods: { getEducations, handleDelete },
  } = useEducation();

  const [visible, setVisible] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedEducation, setSelectedEducation] = useState<Education | null>(
    null,
  );
  const [buttonLabel, setButtonLabel] = useState<string>("Create");
  const [institution, setInstitution] = useState<string>("");
  const [startDate, setStartDate] = useState<Nullable<Date>>(null);
  const [endDate, setEndDate] = useState<Nullable<Date>>(null);
  const [degree, setDegree] = useState<string>("");
  const [program, setProgram] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState(10);
  const [paginatedEducations, setPaginatedEducations] = useState<Education[]>(
    [],
  );

  const router = useRouter();
  const searchParams = useSearchParams();
  const service = EducationService();

  const onPageChange = (e: PaginatorPageChangeEvent) => {
    setFirst(e.first);
    setRows(e.rows);
    paginateEducations(e.first, e.rows);

    const query = {
      page: e.page + 1,
      rows: e.rows,
    };

    router.replace(
      `/dashboard/portfolio?page=${query.page}&rows=${query.rows}`,
    );
  };

  const paginateEducations = (first: number, rows: number) => {
    const start = first;
    const end = first + rows;
    setPaginatedEducations(educations.slice(start, end));
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const startDate = new Date(formData.get("startDate") as string);
    const endDate = new Date(formData.get("endDate") as string);

    const data: Education = {
      institution: formData.get("institution") as string,
      startDate,
      endDate,
      degree: formData.get("degree") as string,
      program: formData.get("program") as string,
      location: formData.get("location") as string,
      description,
    };

    let res;
    if (selectedEducation && selectedEducation.id) {
      data.id = selectedEducation.id;
      res = await service.updateEducation(data);
    } else {
      res = await service.createEducation(data);
    }

    if (res.status === 200 || res.status === 201) {
      toast.current?.show({
        severity: "success",
        summary: "Success",
        detail: `You have successfully ${selectedEducation ? "updated" : "created"} education`,
        life: 3000,
      });
    } else {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: `Failed to ${selectedEducation ? "update" : "create"} education`,
        life: 3000,
      });
    }
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await handleSubmit(e);
    setVisible(false);
    clearForm();

    await getEducations();
    router.replace("/dashboard/education");
  };

  const clearForm = () => {
    setInstitution("");
    setStartDate(null);
    setEndDate(null);
    setDegree("");
    setProgram("");
    setLocation("");
    setDescription("");
  };

  const handleCreate = (): void => {
    clearForm();
    setVisible(true);
    setButtonLabel("Create");
  };

  const handleEdit = (education: Education): void => {
    setSelectedEducation(education);
    setInstitution(education.institution);
    setStartDate(new Date(education.startDate));
    setEndDate(education.endDate ? new Date(education.endDate) : null);
    setDegree(education.degree);
    setProgram(education.program || "");
    setLocation(education.location);
    setDescription(education.description);
    setVisible(true);
    setButtonLabel("Update");
  };

  const handleShowDetail = (education: Education): void => {
    setSelectedEducation(education);
    setShowDetail(true);
  };

  useEffect(() => {
    getEducations();

    const page = searchParams.get("page");
    const rows = searchParams.get("rows");

    if (page && rows) {
      setFirst((parseInt(page) - 1) * parseInt(rows));
      setRows(parseInt(rows));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    paginateEducations(first, rows);
    router.replace(
      `/dashboard/education?page=${first / rows + 1}&rows=${rows}`,
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [educations, first, rows]);

  return (
    <section>
      <Toast ref={toast} />
      <ConfirmDialog />

      <ClientEducationTable
        showDialog={handleCreate}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onShowDetail={handleShowDetail}
        educations={paginatedEducations}
        first={first}
        rows={rows}
        totalRecords={educations.length}
        onPageChange={onPageChange}
      />

      <ClientEducationForm
        visible={visible}
        setVisible={setVisible}
        buttonLabel={buttonLabel}
        onSubmit={onSubmit}
        institution={institution}
        setInstitution={setInstitution}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        degree={degree}
        setDegree={setDegree}
        program={program}
        setProgram={setProgram}
        location={location}
        setLocation={setLocation}
        description={description}
        setDescription={setDescription}
        setSelectedEducation={setSelectedEducation}
      />

      <ClientEducationDetail
        visible={showDetail}
        setVisible={setShowDetail}
        selectedEducation={selectedEducation}
        setSelectedEducation={setSelectedEducation}
      />
    </section>
  );
}
