interface Certification {
  title: string;
  subtitle: string;
  logo_path: string;
  certificate_link: string;
  alt_name: string;
  color_code: string;
}

interface CertificateData {
  certifications: Certification[];
}

export const certificate: CertificateData = {
  certifications: [
    {
      title: "Google data analysis",
      subtitle: "data analysis",
      logo_path: "aws.png",
      certificate_link:
        "https://drive.google.com/file/d/1t2RocJF6KCyjz9Q0qDERneTZuUdB8SuP/view?usp=sharing",
      alt_name: "google",
      color_code: "#ffc475",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/8b2db191-702d-427c-91aa-0f926be447a6/public_url",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
    {
      title: "Google Summer of Code 2019",
      subtitle: "Google / Sugar Labs",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffc475",
    },
  ],
};
