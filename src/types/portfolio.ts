export interface Portfolio {
  title: string;
  technologies: string[];
  linkWeb?: string;
  imgUrl: string;
  description: string;
  linkGithub?: string;
  category: string;
  date: Date;
}

export interface PortfolioProps {
  portfolios: Portfolio[];
  categories: string[];
}
