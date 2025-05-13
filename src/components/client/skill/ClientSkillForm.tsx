import XButton from "@/components/shared/XButton";
import XInputImage from "@/components/shared/XInputImage";
import XModal from "@/components/shared/XModal";
import { useRouter } from "next/navigation";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import React, { FormEvent } from "react";

interface SkillFormProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  buttonLabel: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  title: string;
  setTitle: (title: string) => void;
  selectedLevel: string;
  setSelectedLevel: (selectedLevel: string) => void;
  listLevel: string[];
  previewImage: string;
  previewImageName: string;
  handleClearPreview: () => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function ClientSkillForm({
  visible,
  setVisible,
  buttonLabel,
  onSubmit,
  title,
  setTitle,
  selectedLevel,
  setSelectedLevel,
  listLevel,
  previewImage,
  previewImageName,
  handleClearPreview,
  handleFileChange,
}: SkillFormProps) {

  const router = useRouter();

  const onHide = () => {
    if (!visible) return;
    router.replace("/dashboard/skill");
    setVisible(false);
  };

  const headerElement = (
    <div className="inline-flex items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">Create a new skill</h2>
    </div>
  );

  const content = (
    <form
      onSubmit={onSubmit}
      className="w-full rounded-2xl bg-slate-800 px-4 py-6"
    >
      <div className="mb-4 flex flex-wrap gap-4">
        <div className="flex-grow basis-60">
        <XInputImage
            previewImage={previewImage}
            previewImageName={previewImageName}
            handleClearPreview={handleClearPreview}
            handleFileChange={handleFileChange}
          />
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-4">
        <div className="flex-grow basis-60">
          <div>
            <label htmlFor="title" className="capitalize">
              Title
            </label>
            <InputText
              id="title"
              value={title}
              className="w-full"
              name="title"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
            />
          </div>
        </div>

        <div className="flex-grow basis-60">
          <div>
            <label htmlFor="level" className="capitalize">
              Choose Level
            </label>
            <Dropdown
              value={selectedLevel}
              onChange={(e: DropdownChangeEvent) => setSelectedLevel(e.value)}
              options={listLevel}
              optionLabel="Choose your level"
              placeholder="Choose your level"
              className="md:w-14rem w-full"
            />
          </div>
        </div>
      </div>

      <XButton label={buttonLabel} icon="pi pi-plus" type="submit" />
    </form>
  );
  return (
    <div className="card justify-content-center flex">
    <XModal visible={visible} header={headerElement} onHide={onHide}>
      {content}
    </XModal>
  </div>
  );
}
