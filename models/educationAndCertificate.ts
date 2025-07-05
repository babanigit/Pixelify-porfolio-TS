export interface IEducationAndCertificate {
  Educations: IEducation[];
  Certificates: ICertificate[];
}

export interface IEducation {
  title: string;
  year: string;
  subtitle: string;
  details: string[];
  Uni_link: string;
  Certificate_link: string;
  alt_name: string;
  logo_path: string;
  importance: string;
  grade: string;
}

export interface ICertificate {
  title: string;
  subtitle: string;
  description: string[];
  certificate_link: string;
  alt_name: string;
  logo_path: string;
  issued_by: string;
  issue_date: string;
  skills: string[];
}
