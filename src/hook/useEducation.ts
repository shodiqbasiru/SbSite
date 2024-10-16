import EducationService from "@/service/EducationService";
import { Education } from "@/types/education";
import { confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";

export function useEducation() {
  const [educations, setEducations] = useState<Education[]>([]);
  const service = EducationService();
  const toast = useRef<Toast>(null);

  const getEducations = async () => {
    const { data } = await service.getEducations();
    data.sort((a: { endDate: string }, b: { endDate: string }) => {
        return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
    });
    setEducations(data);
  };

  const handleDelete = async (education: Education) => {
    const accept = async () => {
      if (!education.id) return;
      const res = await service.deleteEducation(education.id);
      if (res.status === 200) {
        await getEducations();
      }

      toast.current?.show({
        severity: "success",
        summary: "Confirmed",
        detail: `You have deleted ${education.institution}`,
        life: 3000,
      });
    };

    const reject = () => {
      toast.current?.show({
        severity: "error",
        summary: "Rejected",
        detail: `You have rejected to delete ${education.institution}`,
        life: 3000,
      });
    };

    confirmDialog({
      message: `Do you want to delete ${education.institution} ?`,
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      defaultFocus: "reject",
      acceptClassName: "p-button-danger",
      accept,
      reject,
    });
  };

  const data = {
    educations,
    toast,
  };

  const methods = {
    getEducations,
    handleDelete,
  };

  return { data, methods };
}
