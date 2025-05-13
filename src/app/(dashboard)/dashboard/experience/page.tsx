"use client";
import ClientExperienceDetail from "@/components/client/experience/ClientExperienceDetail";
import ClientExperienceForm from "@/components/client/experience/ClientExperienceForm";
import ClientExperienceTable from "@/components/client/experience/ClientExperienceTable";
import { useExperience } from "@/hook/useExperience";
import ExperienceService from "@/service/ExperienceService";
import { Experience } from "@/types/experience";
import { useRouter, useSearchParams } from "next/navigation";
import { ConfirmDialog } from "primereact/confirmdialog";
import { PaginatorPageChangeEvent } from "primereact/paginator";
import { Toast } from "primereact/toast";
import { Nullable } from "primereact/ts-helpers";
import React, { FormEvent, useEffect, useState } from "react";

export default function DashboardExperiencePage() {
  const {
    data: { experiences, toast },
    methods: { getExperiences, handleDelete },
  } = useExperience();

  const [visible, setVisible] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);
  const [buttonLabel, setButtonLabel] = useState<string>("Create");
  const [companyName, setCompanyName] = useState<string>("");
  const [startDate, setStartDate] = useState<Nullable<Date>>(null);
  const [endDate, setEndDate] = useState<Nullable<Date>>(null);
  const [position, setPosition] = useState<string>("");
  const [employmentType, setEmploymentType] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState(10);
  const [paginatedExperiences, setPaginatedExperiences] = useState<
    Experience[]
  >([]);

  const router = useRouter();
  const searchParams = useSearchParams();
  const service = ExperienceService();

  const onPageChange = (e: PaginatorPageChangeEvent) => {
    setFirst(e.first);
    setRows(e.rows);
    paginateExperiences(e.first, e.rows);

    const query = {
      page: e.page + 1,
      rows: e.rows,
    };

    router.replace(
      `/dashboard/portfolio?page=${query.page}&rows=${query.rows}`,
    );
  };

  const paginateExperiences = (first: number, rows: number) => {
    const start = first;
    const end = first + rows;
    setPaginatedExperiences(experiences.slice(start, end));
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const startDate = new Date(formData.get("startDate") as string);
    const endDate = new Date(formData.get("endDate") as string);

    const data: Experience = {
      companyName: formData.get("companyName") as string,
      position: formData.get("position") as string,
      employmentType: formData.get("employmentType") as string,
      location: formData.get("location") as string,
      startDate: startDate.toISOString() as unknown as Date,
      endDate: endDate.toISOString() as unknown as Date,
      description: description,
    };

    console.log("payload", data);

    let res;
    if (selectedExperience && selectedExperience.id) {
      data.id = selectedExperience.id;
      res = await service.updateExperience(data);
    } else {
      res = await service.createExperience(data);
    }

    if (res.status === 200 || res.status === 201) {
      toast.current?.show({
        severity: "success",
        summary: "Success",
        detail: `You have successfully ${selectedExperience ? "updated" : "created"} experience`,
        life: 3000,
      });
    } else {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: `Failed to ${selectedExperience ? "update" : "create"} experience`,
        life: 3000,
      });
    }
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await handleSubmit(e);
    setVisible(false);
    clearForm();

    await getExperiences();
    router.replace("/dashboard/experience");
  };

  const clearForm = () => {
    setCompanyName("");
    setStartDate(null);
    setEndDate(null);
    setPosition("");
    setEmploymentType("");
    setLocation("");
    setDescription("");
    setSelectedExperience(null);
  };

  const handleCreate = (): void => {
    clearForm();
    setVisible(true);
    setButtonLabel("Create");
  };

  const handleEdit = (experience: Experience): void => {
    setSelectedExperience(experience);
    setCompanyName(experience.companyName);
    setStartDate(new Date(experience.startDate));
    setEndDate(experience.endDate ? new Date(experience.endDate) : null);
    setPosition(experience.position);
    setEmploymentType(experience.employmentType);
    setLocation(experience.location);
    setDescription(experience.description ?? "");
    setButtonLabel("Update");
    setVisible(true);
  };

  const handleShowDetail = (experience: Experience): void => {
    setSelectedExperience(experience);
    setShowDetail(true);
  };

  useEffect(() => {
    getExperiences();

    const page = searchParams.get("page");
    const rows = searchParams.get("rows");

    if (page && rows) {
      setFirst((parseInt(page) - 1) * parseInt(rows));
      setRows(parseInt(rows));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    paginateExperiences(first, rows);
    router.replace(
      `/dashboard/experience?page=${first / rows + 1}&rows=${rows}`,
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [experiences, first, rows]);

  return (
    <section>
      <Toast ref={toast} />
      <ConfirmDialog />

      <ClientExperienceTable
        showDialog={handleCreate}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onShowDetail={handleShowDetail}
        experiences={paginatedExperiences}
        first={first}
        rows={rows}
        totalRecords={experiences.length}
        onPageChange={onPageChange}
      />

      <ClientExperienceForm
        visible={visible}
        setVisible={setVisible}
        buttonLabel={buttonLabel}
        onSubmit={onSubmit}
        companyName={companyName}
        setCompanyName={setCompanyName}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        position={position}
        setPosition={setPosition}
        employmentType={employmentType}
        setEmploymentType={setEmploymentType}
        location={location}
        setLocation={setLocation}
        description={description}
        setDescription={setDescription}
        setSelectedExperience={setSelectedExperience}
      />

      <ClientExperienceDetail 
        visible={showDetail}
        setVisible={setShowDetail}
        selectedExperience={selectedExperience}
        setSelectedExperience={setSelectedExperience}
      />
    </section>
  );
}
