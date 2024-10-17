import ImageService from "@/service/ImageService";
import PortfolioService from "@/service/PortfolioService";
import { Portfolio } from "@/types/portfolio";
import { confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";

export function usePortfolio() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const service = PortfolioService();
  const imgService = ImageService();
  const toast = useRef<Toast>(null);

  const getPortfolios = async () => {
    const { data } = await service.getPortfolios();
    data.sort((a: { date: string }, b: { date: string }) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    setPortfolios(data);
  };

  const handleDelete = async (portfolio: Portfolio) => {
    const accept = async () => {
      if (!portfolio.id) return;
      const res = await service.deletePortfolio(portfolio.id);
      if (res.status === 200) {
        const filename = portfolio.imgUrl.split("/").pop();
        if (!filename) return;
        await imgService.deleteImage(filename);
        await getPortfolios();
      }

      toast.current?.show({
        severity: "success",
        summary: "Confirmed",
        detail: `You have deleted ${portfolio.title}`,
        life: 3000,
      });
    };

    const reject = () => {
      toast.current?.show({
        severity: "error",
        summary: "Rejected",
        detail: `You have rejected to delete ${portfolio.title}`,
        life: 3000,
      });
    };

    confirmDialog({
      message: `Do you want to delete ${portfolio.title} ?`,
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      defaultFocus: "reject",
      acceptClassName: "p-button-danger",
      accept,
      reject,
    });
  };

  const data = {
    portfolios,
    toast,
  };

  const methods = {
    getPortfolios,
    handleDelete,
  };

  return {
    data,
    methods,
  };
}
