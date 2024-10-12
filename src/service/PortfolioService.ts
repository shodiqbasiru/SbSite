import { Portfolio } from "@/types/portfolio";

const PortfolioService = () => {
  const url = process.env.NEXT_PUBLIC_SERVER_API_URL;

  const getPortfolios = async () => {
    const response = await fetch(`${url}/portfolios`, {
      cache: "no-store",
    });
    return response.json();
  };

  const createPortfolio = async (data: Portfolio) => {
    const response = await fetch(`${url}/portfolios`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  };

  const updatePortfolio = async (data: Portfolio) => {
    const response = await fetch(`${url}/portfolios`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  };

  const deletePortfolio = async (id: string) => {
    const response = await fetch(`${url}/portfolios?id=${id}`, {
      method: "DELETE",
    });

    return response.json();
  };

  return {
    getPortfolios,
    createPortfolio,
    updatePortfolio,
    deletePortfolio,
  };
};

export default PortfolioService;
