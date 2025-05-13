import ExperienceService from "@/service/ExperienceService";
import { Experience } from "@/types/experience";
import { confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";

export function useExperience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const service = ExperienceService();
  const toast = useRef<Toast>(null);

  const getExperiences = async () => {
    const { data } = await service.getExperiences();
    data.sort((a: { endDate: string }, b: { endDate: string }) => {
        return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
    });
    setExperiences(data);
  };

  const handleDelete = async (experience: Experience) => {
    const accept = async () => {
      if (!experience.id) return;
      const res = await service.deleteExperience(experience.id);
      if (res.status === 200) {
        await getExperiences();
      }

      toast.current?.show({
        severity: "success",
        summary: "Confirmed",
        detail: `You have deleted ${experience.companyName}`,
        life: 3000,
      });
    };

    const reject = () => {
      toast.current?.show({
        severity: "error",
        summary: "Rejected",
        detail: `You have rejected to delete ${experience.companyName}`,
        life: 3000,
      });
    };

    confirmDialog({
      message: `Do you want to delete ${experience.companyName} ?`,
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      defaultFocus: "reject",
      acceptClassName: "p-button-danger",
      accept,
      reject,
    });
  };

  const data = {
    experiences,
    toast,
  };

  const methods = {
    getExperiences,
    handleDelete,
  };

  return { data, methods };
}
