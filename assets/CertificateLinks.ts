export interface Certification {
  title: string;
  dev1:string;
  dev2:string;
  dev3:string;
  dev4:string;
  subtitle: string;
  logo_path: string;
  certificate_link: string;
  alt_name: string;
}

// for trail
export interface Certification2 {
  title: string;
  dev1:string;
  dev2:string;
  dev3:string;
  dev4:string;
  certificate_link: string;
  alt_name: string;
}


interface CertificateData {
  certifications: Certification[];

  // for trail
  certifications2: Certification2[];
}

export const certificate: CertificateData = {
  certifications: [
    {
      title: "Google data analysis",
      subtitle: "data analysis",
      dev1: "Through the completion of several courses, I've learned to ask pertinent questions for data-driven decision-making, conduct data analysis proficiently using R programming, and apply these skills in real-world scenarios through a capstone project.",
      dev2: "",
      dev3: "",
      dev4: "",
      certificate_link:
        "https://drive.google.com/file/d/1rkr_ppn0kDFiR8zTlQoBkuUrCFDlBImw/view?usp=sharing",
        alt_name: "google",
        logo_path: "aws.png",

    },
    {
      title: "Introduction to Cybersecurity Fundamentals",
      subtitle: "cybersecurity",
      dev1: " Acquired comprehensive knowledge of attacker techniques, encompassing phishing, social engineering, and ransomware, enabling a deeper understanding of cybersecurity vulnerabilities and proactive defense measures.",
      dev2: "",
      dev3: "",
      dev4: "",
      certificate_link:
        "https://drive.google.com/file/d/1he7TF_MNxpljqxiV7DxVKE0hVcgbCOr-/view?usp=sharing",
        alt_name: "google",
        logo_path: "aws.png",

    }
  ],
  certifications2 : [
    {
      // 1
      title: "Foundations: Data, Data, Everywhere",
      dev1: "~ Learned about key analytical skills (data cleaning, data analysis, data visualization) and tools (spreadsheets, SQL, R programming, Tableau) ",
      dev2: " ",
      dev3: " ",
      dev4: " ",
      certificate_link:
      "https://drive.google.com/file/d/1YyRZFFGRiAFUY6dDRmkYFyqFhDr2GuwI/view?usp=sharing",
      alt_name: "google",
    },
    {
      // 2
      title: "Ask Questions to Make Data-Driven Decisions",
      dev1: "~ Learned about effective questioning techniques that can help guide analysis.",
      dev2: " ",
      dev3: " ",
      dev4: " ",
      certificate_link:
      "https://drive.google.com/file/d/1e7v1ezn8tTtOwS-Upx4U2LQatvrnL7yV/view?usp=sharing",
      alt_name: "google",
    },
    {
      // 3
      title: "Prepare Data for Exploration",
      dev1: "~ Learned about structured and unstructured data, data types, and data formats",
      dev2: "~ different types of bias in data to help ensure data credibility",
      dev3: " ",
      dev4: " ",
      certificate_link:
      "https://drive.google.com/file/d/1l_Fbu74ws3BAgbR282f6KKIm24mNl4ZV/view?usp=sharing",
      alt_name: "google",
    },
    {
      // 4
      title: "Process Data from Dirty to Clean",
      dev1: "- Applied data cleaning techniques using spreadsheets.",
      dev2: "- Developed basic SQL queries for use on databases.",
      dev3: "- Used basic SQL functions to clean and transform data.",
      dev4: " ",
      certificate_link:
      "https://drive.google.com/file/d/14Mc68oBJ0U5z_0mv3vfyJOG2DmROvzE2/view?usp=sharing",
      alt_name: "google",
    },
    {
      // 5
      title: "in process",
      dev1: " ",
      dev2: "",
      dev3: " ",
      dev4: " ",
      certificate_link:
      "",
      alt_name: "google",
    },
    {
      // 6
      title: "Share Data Through the Art of Visualization",
      dev1: "",
      dev2: "- Gained an understanding of how to use Tableau to create dashboards and dashboard filters. ",
      dev3: " ",
      dev4: " ",
      certificate_link:
      "https://drive.google.com/file/d/1ukBQdu2HqtgqdTt75SfA0z5NoOBLu2t_/view?usp=sharing",
      alt_name: "google",
    },
    {
      // 7
      title: "Data Analysis with R Programming",
      dev1: "~ Discovered how to use RStudio to apply R to your analysis",
      dev2: "~ the fundamental concepts associated with programming in R.",
      dev3: " ",
      dev4: " ",
      certificate_link:
      "https://drive.google.com/file/d/1t2RocJF6KCyjz9Q0qDERneTZuUdB8SuP/view?usp=sharing",
      alt_name: "google",
    },
    {
      // 8
      title: "in process",
      dev1: " ",
      dev2: " .",
      dev3: " ",
      dev4: " ",
      certificate_link:
      "",
      alt_name: "google",
    },

  ],
};
