import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { FormEvent } from "react";
import { Nullable } from "primereact/ts-helpers";
import { useRouter } from "next/navigation";
import XModal from "@/components/shared/XModal";
import XButton from "@/components/shared/XButton";
import { Experience } from "@/types/experience";
import XTextEditor from "@/components/shared/XTextEditor";

interface ExperienceFormProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  buttonLabel: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  companyName: string;
  setCompanyName: (title: string) => void;
  startDate: Nullable<Date>;
  setStartDate: (date: Nullable<Date>) => void;
  endDate: Nullable<Date>;
  setEndDate: (date: Nullable<Date>) => void;
  position: string;
  setPosition: (position: string) => void;
  employmentType: string;
  setEmploymentType: (employmentType: string) => void;
  location: string;
  setLocation: (location: string) => void;
  description: string;
  setDescription: (description: string) => void;
  setSelectedExperience: (selectedExperience: Experience | null) => void;
}

export default function ClientExperienceForm({
  visible,
  setVisible,
  buttonLabel,
  onSubmit,
  companyName,
  setCompanyName,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  position,
  setPosition,
  employmentType,
  setEmploymentType,
  location,
  setLocation,
  description,
  setDescription,
  setSelectedExperience,
}: ExperienceFormProps) {
  const router = useRouter();

  const onHide = () => {
    if (!visible) return;
    router.replace("/dashboard/experience");
    setVisible(false);
    setSelectedExperience(null);
  };

  const headerElement = (
    <div className="inline-flex items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">Create a new experience</h2>
    </div>
  );

  const content = (
    <form
      onSubmit={onSubmit}
      className="w-full rounded-2xl bg-slate-800 px-4 py-6"
    >
      <div className="mb-4 flex flex-wrap gap-4">
        <div className="flex-grow basis-60">
          <div>
            <label htmlFor="companyName" className="capitalize">
              Company Name
            </label>
            <InputText
              id="companyName"
              value={companyName}
              className="w-full"
              name="companyName"
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex-grow basis-60">
          <div>
            <label htmlFor="position" className="capitalize">
              Position
            </label>
            <InputText
              id="position"
              value={position}
              className="w-full"
              name="position"
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-4">
        <div className="flex-grow basis-60">
          <div>
            <label htmlFor="startDate" className="capitalize">
              Start Date
            </label>
            <Calendar
              inputId="startDate"
              value={startDate}
              name="startDate"
              className="w-full"
              onChange={(e) => setStartDate(e.value)}
            />
          </div>
        </div>

        <div className="flex-grow basis-60">
          <div>
            <label htmlFor="endDate" className="capitalize">
              End Date
            </label>
            <Calendar
              inputId="endDate"
              value={endDate}
              name="endDate"
              className="w-full"
              onChange={(e) => setEndDate(e.value)}
            />
          </div>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-4">
        <div className="flex-grow basis-60">
          <div>
            <label htmlFor="employmentType" className="capitalize">
              Employee Type
            </label>
            <InputText
              id="employmentType"
              value={employmentType}
              className="w-full"
              name="employmentType"
              onChange={(e) => setEmploymentType(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-grow basis-60">
          <div>
            <label htmlFor="location" className="capitalize">
              Location
            </label>
            <InputText
              id="location"
              value={location}
              className="w-full"
              name="location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-4">
        <div className="flex-grow basis-60">
          <div>
            <label htmlFor="description" className="capitalize">
              description
            </label>
            {/* <InputTextarea
              id="description"
              value={description}
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              className="w-full"
              rows={5}
              cols={30}
            /> */}
            <XTextEditor
              description={description}
              setDescription={setDescription}
            />
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-between">
        <div></div>
        <XButton label={buttonLabel} icon="pi pi-plus" type="submit" />
      </div>
    </form>
  );

  return (
    <div className="card justify-center flex">
      <XModal visible={visible} header={headerElement} onHide={onHide}>
        {content}
      </XModal>
    </div>
  );
}
