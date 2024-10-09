export interface Portfolio {
  tittle: string;
  technologies: string[];
  linkWeb?: string;
  imgUrl: string;
  descriptions: string[];
  linkGithub?: string;
  category: string;
}

export interface PortfolioProps {
  portfolios: Portfolio[];
  categories: string[];
}
