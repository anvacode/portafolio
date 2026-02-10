export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  topics: string[];
  stargazers_count: number;
  language: string;
  created_at: string;
  updated_at: string;
}