import {
  AutoComplete,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { ChangeEvent, FormEvent } from "react";
import { Nullable } from "primereact/ts-helpers";
import { useRouter } from "next/navigation";
import { Portfolio } from "@/types/portfolio";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import XModal from "@/components/shared/XModal";
import XButton from "@/components/shared/XButton";
import XInputImage from "@/components/shared/XInputImage";

interface Technology {
  id: number;
  name: string;
}

interface Category {
  label: string;
  value: string;
}

interface PortfolioFormProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  buttonLabel: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  title: string;
  setTitle: (title: string) => void;
  date: Nullable<Date>;
  setDate: (date: Nullable<Date>) => void;
  previewImage: string;
  linkWeb: string | undefined;
  setLinkWeb: (linkWeb: string | undefined) => void;
  linkGithub: string | undefined;
  setLinkGithub: (linkGithub: string | undefined) => void;
  description: string;
  setDescription: (description: string) => void;
  category: string;
  setCategory: (category: string) => void;
  selectedTech: Technology[];
  setSelectedTech: (selectedTech: Technology[]) => void;
  filteredTech: Technology[] | undefined;
  handleAutoCompleteSearch: (event: AutoCompleteCompleteEvent) => void;
  setSelectedPortfolio: (selectedPortfolio: Portfolio | null) => void;
  listCategory: Category[];
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  previewImageName: string;
  handleClearPreview: () => void;
}

export default function ClientPortfolioForm({
  visible,
  setVisible,
  buttonLabel,
  onSubmit,
  title,
  setTitle,
  date,
  setDate,
  previewImage,
  linkWeb,
  setLinkWeb,
  linkGithub,
  setLinkGithub,
  description,
  setDescription,
  category,
  setCategory,
  selectedTech,
  setSelectedTech,
  filteredTech,
  handleAutoCompleteSearch,
  setSelectedPortfolio,
  listCategory,
  handleFileChange,
  previewImageName,
  handleClearPreview,
}: PortfolioFormProps) {
  const router = useRouter();

  const onHide = () => {
    if (!visible) return;
    router.replace("/dashboard/portfolio");
    setVisible(false);
    setSelectedPortfolio(null);
  };

  const handleChangeCategory = (e: DropdownChangeEvent) => setCategory(e.value);

  const headerElement = (
    <div className="inline-flex items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">Create a new portfolio</h2>
    </div>
  );

  const content = (
    <form
      onSubmit={onSubmit}
      className="w-full rounded-2xl bg-slate-800 px-4 py-6"
    >
      <div className="mb-4 flex flex-wrap gap-4">
        <div className="flex-grow basis-full">
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
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-grow basis-60">
          <div>
            <label htmlFor="date" className="capitalize">
              Date
            </label>
            <Calendar
              inputId="date"
              value={date}
              name="date"
              className="w-full"
              onChange={(e) => setDate(e.value)}
            />
          </div>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-4">
        <div className="flex-grow basis-60">
          <div>
            <label htmlFor="category" className="capitalize">
              Category
            </label>

            <Dropdown
              value={category}
              options={listCategory}
              onChange={handleChangeCategory}
              name="category"
              optionLabel="label"
              placeholder="Select a Category"
              className="md:w-14rem w-full"
            />
          </div>
        </div>

        <div className="flex-grow basis-60">
          <div>
            <label htmlFor="ac" className="capitalize">
              Select Technologies
            </label>
            <AutoComplete
              field="name"
              multiple
              value={selectedTech}
              className="w-full"
              suggestions={filteredTech}
              name="technologies"
              completeMethod={handleAutoCompleteSearch}
              onChange={(e) => setSelectedTech(e.value)}
              pt={{
                container: { className: "w-full" },
              }}
            />
          </div>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-4">
        <div className="flex-grow basis-60">
          <div>
            <label htmlFor="linkweb" className="capitalize">
              Website Link
            </label>
            <InputText
              id="linkweb"
              value={linkWeb}
              className="w-full"
              name="linkWeb"
              onChange={(e) => setLinkWeb(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-grow basis-60">
          <div>
            <label htmlFor="linkgithub" className="capitalize">
              GitHub Link
            </label>
            <InputText
              id="linkgithub"
              value={linkGithub}
              className="w-full"
              name="linkGithub"
              onChange={(e) => setLinkGithub(e.target.value)}
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
            <InputTextarea
              id="description"
              value={description}
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              className="w-full"
              rows={5}
              cols={30}
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
    <div className="card justify-content-center flex">
      <XModal visible={visible} header={headerElement} onHide={onHide}>
        {content}
      </XModal>
    </div>
  );
}
