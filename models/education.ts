import { certificate } from '@/assets/CertificateLinks';
export interface EducationItem {
  title: string;
  year: string;
  subtitle: string;
  details: string[];
  Uni_link: string;
  Certificate_link :string;
  alt_name: string;
  logo_path: string;
  importance?: "high" | "medium" | "low";
  grade?: string;
}
