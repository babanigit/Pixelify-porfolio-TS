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
      dev1: " the fundamental concepts associated with programming in R",
      dev2: " the R programming language, data visualization and its programming environment.",
      dev3: " ",
      dev4: " ",
      certificate_link:
        "https://drive.google.com/file/d/1t2RocJF6KCyjz9Q0qDERneTZuUdB8SuP/view?usp=sharing",
        alt_name: "google",
        logo_path: "aws.png",

    },
    // {
    //   title: "Google data analysis2",
    //   subtitle: "data analysis",
    //   dev1: " the fundamental concepts associated with programming in R",
    //   dev2: " the R programming language, data visualization and its programming environment.",
    //   dev3: " ",
    //   dev4: " ",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1t2RocJF6KCyjz9Q0qDERneTZuUdB8SuP/view?usp=sharing",
    //     alt_name: "google",
    //     logo_path: "aws.png",

    // },
    // {
    //   title: "Google data analysis3",
    //   subtitle: "data analysis",
    //   dev1: " the fundamental concepts associated with programming in R",
    //   dev2: " the R programming language, data visualization and its programming environment.",
    //   dev3: " ",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1t2RocJF6KCyjz9Q0qDERneTZuUdB8SuP/view?usp=sharing",
    //     alt_name: "google",
    //     logo_path: "aws.png",

    // },
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
      title: " in process",
      dev1: " ",
      dev2: "",
      dev3: " ",
      dev4: " ",
      certificate_link:
      "https://drive.google.com/file/d/1t2RocJF6KCyjz9Q0qDERneTZuUdB8SuP/view?usp=sharing",
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
      "https://drive.google.com/file/d/1t2RocJF6KCyjz9Q0qDERneTZuUdB8SuP/view?usp=sharing",
      alt_name: "google",
    },
    {
      // 6
      title: "in process",
      dev1: "",
      dev2: " ",
      dev3: " ",
      dev4: " ",
      certificate_link:
      "https://drive.google.com/file/d/1t2RocJF6KCyjz9Q0qDERneTZuUdB8SuP/view?usp=sharing",
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
      "https://drive.google.com/file/d/1t2RocJF6KCyjz9Q0qDERneTZuUdB8SuP/view?usp=sharing",
      alt_name: "google",
    },

  ],
};
