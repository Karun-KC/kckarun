// Type definitions for portfolio data

export interface Project {
  title: string;
  imageSrc: string;
  description: string;
  skills: string[];
  demo: string;
  source: string;
  researchPaper?: string;
  doi?: string;
}

export interface Skill {
  title: string;
  imageSrc: string;
}

export interface HistoryItem {
  role: string;
  organisation: string;
  startDate: string;
  endDate: string;
  experiences: string[];
  imageSrc: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  imageSrc: string;
  credentialUrl?: string;
}

export interface Achievement {
  title: string;
  organization?: string;
  description: string;
  date: string;
  imageSrc?: string;
}
