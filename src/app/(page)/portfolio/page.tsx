import ClientPortfolioFilter from "@/components/client/portfolio/ClientPortfolioFilter";
import PortfolioService from "@/service/PortfolioService";

export default async function PortfolioPage() {
  const categories: string[] = [
    "All",
    "Frontend",
    "Backend",
    "Mobile",
    "Fullstack",
  ];

  const service = PortfolioService();

  const { data: portfolios } = await service.getPortfolios();

  portfolios.sort((a: { date: string }, b: { date: string }) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <ClientPortfolioFilter portfolios={portfolios} categories={categories} />
  );
}
