import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { FormEvent, useEffect } from "react";
import { Nullable } from "primereact/ts-helpers";
import { useRouter } from "next/navigation";
import XModal from "@/components/shared/XModal";
import XButton from "@/components/shared/XButton";
import { Experience } from "@/types/experience";
import XTextEditor from "@/components/shared/XTextEditor";
import { Education } from "@/types/education";

interface EducationFormProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  buttonLabel: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  institution: string;
  setInstitution: (title: string) => void;
  startDate: Nullable<Date>;
  setStartDate: (date: Nullable<Date>) => void;
  endDate: Nullable<Date>;
  setEndDate: (date: Nullable<Date>) => void;
  degree: string;
  setDegree: (degree: string) => void;
  program: string;
  setProgram: (program: string) => void;
  location: string;
  setLocation: (location: string) => void;
  description: string;
  setDescription: (description: string) => void;
  selectedEducation: Education | null;
  setSelectedEducation: (selectedEducation: Education | null) => void;
}

export default function ClientEducationForm({
  visible,
  setVisible,
  buttonLabel,
  onSubmit,
  institution,
  setInstitution,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  degree,
  setDegree,
  program,
  setProgram,
  location,
  setLocation,
  description,
  setDescription,
  selectedEducation,
  setSelectedEducation,
}: EducationFormProps) {
  const router = useRouter();

  const onHide = () => {
    if (!visible) return;
    router.replace("/dashboard/education");
    setVisible(false);
    setSelectedEducation(null);
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
            <label htmlFor="institution" className="capitalize">
              Institution
            </label>
            <InputText
              id="institution"
              value={institution}
              className="w-full"
              name="institution"
              onChange={(e) => setInstitution(e.target.value)}
            />
          </div>
        </div>
        <div className="flex-grow basis-60">
          <div>
            <label htmlFor="degree" className="capitalize">
              Degree
            </label>
            <InputText
              id="degree"
              value={degree}
              className="w-full"
              name="degree"
              onChange={(e) => setDegree(e.target.value)}
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
            <label htmlFor="program" className="capitalize">
              Program
            </label>
            <InputText
              id="program"
              value={program}
              className="w-full"
              name="program"
              onChange={(e) => setProgram(e.target.value)}
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
    <div className="card flex justify-center">
      <XModal visible={visible} header={headerElement} onHide={onHide}>
        {content}
      </XModal>
    </div>
  );
}
