import {
  AutoComplete,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { FormEvent, useRef } from "react";
import { Nullable } from "primereact/ts-helpers";
import { Toast } from "primereact/toast";
import { ConfirmDialog } from "primereact/confirmdialog";

interface Technology {
  id: number;
  name: string;
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
  imgUrl: string;
  setImgUrl: (imgUrl: string) => void;
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
}

export default function ClientModalForm({
  visible,
  setVisible,
  buttonLabel,
  onSubmit,
  title,
  setTitle,
  date,
  setDate,
  imgUrl,
  setImgUrl,
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
}: PortfolioFormProps) {

  const toast = useRef<Toast>(null)

  const onHide = () => {
    if (!visible) return;
    setVisible(false);
  };

  const headerElement = (
    <div className="inline-flex items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">Create a new portfolio</h2>
    </div>
  );

  return (
    <div className="card justify-content-center flex">
      <Toast ref={toast} />
      <ConfirmDialog />
      <Dialog
        visible={visible}
        modal
        header={headerElement}
        style={{ width: "50rem" }}
        onHide={onHide}
      >
        <form
          onSubmit={onSubmit}
          className="w-full rounded-2xl bg-slate-800 px-4 py-6"
        >
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
                <label htmlFor="img" className="capitalize">
                  Image URL
                </label>
                <InputText
                  id="img"
                  value={imgUrl}
                  name="imgUrl"
                  className="w-full"
                  onChange={(e) => setImgUrl(e.target.value)}
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
                <label htmlFor="category" className="capitalize">
                  Category
                </label>
                <InputText
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full"
                  name="category"
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
            <Button label={buttonLabel} icon="pi pi-plus" type="submit" />
          </div>
        </form>
      </Dialog>
    </div>
  );
}