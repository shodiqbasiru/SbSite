import { Portfolio } from "@/types/Portfolio";

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
  }

  return {
    getPortfolios,
    createPortfolio,
  };
};

export default PortfolioService;
