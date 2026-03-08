interface PersonalInfo {
  name: string;
  title: string;
  title2: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface IPortfolioProfile {
  personalInfo: PersonalInfo;
  summary: string;
}
