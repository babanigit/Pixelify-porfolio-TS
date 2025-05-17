interface Project {
  title: string;
  language_used: string;
  dev1: string;
  dev2: string;
  dev3: string;
  dev4: string;
  project_link: string;
  alt_name: string;
  logo_path: string;
}

interface Projects {
  page1: Project[];
  page2: Project[];
}

export const projects: Projects = {

  // api using express
  page1: [
    {
      title: "Personal Finance Management -API",
      language_used: "Typescript, Express.js, Node.js and MongoDb",
      dev1: "~ I have developed a secure API using Express and Node.js to manage users and their transactions.",
      dev2: "~ Security measures such as JWT authentication and payload verification have been implemented to ensure the integrity and confidentiality of user data.",
      dev3: "",
      dev4: "",
      project_link: "https://github.com/babanigit/API-for-a-Personal-Finance-Management-",
      alt_name: "google",
      logo_path: "aws.png",
    },
    {
      title: "User Authentication using MERN",
      language_used: "Typescript, ReactJs, TailwindCSS, MongoDB, ExpressJs and NodeJS",
      dev1: "~ developing a MERN (MongoDB, Express.js, React.js, Node.js) application using TypeScript.",
      dev2: "~ This project focuses on implementing robust user security measures, including user authentication, to ensure data privacy and protection.",
      dev3: "~ Additionally, I am emphasizing a minimalistic user interface design to enhance user experience.",
      dev4: "",
      project_link: "https://github.com/babanigit/Ts-nodejs",
      alt_name: "google",
      logo_path: "aws.png",
    },
    {
      title: "Personal Contacts and Users Management -API",
      language_used: " MongoDB, ExpressJs and NodeJS",
      dev1: "~ About Developed a Contact Management API utilizing Express.js, MongoDB, and Postman to fetch and edit the contents.",
      dev2: "~ Features include CRUD operations for contacts and users, incorporating user authentication and robust security measures",
      dev3: "",
      dev4: "",
      project_link: "https://github.com/babanigit/Contacts-and-Users-Manipulation",
      alt_name: "google",
      logo_path: "aws.png",
    },

  ],
  page2: [
    {
      title: "Third Year Project - (in process)",
      language_used: "ReactJs, Typescript, TailwindCSS,Node.js and Express",
      dev1: "~ ",
      dev2: "~ ",
      dev3: "",
      dev4: "",
      project_link: "https://github.com/babanigit/thirdYear-react-firebase-tailwind",
      alt_name: "google",
      logo_path: "aws.png",
    },

    {
      title: "Weather updates",
      language_used: "ReactJs, TailwindCSS, and WeatherAPI",
      dev1: "~ Utilized a weather API to seamlessly fetch real-time weather data, enhancing user experience with a clean and minimalistic interface.",
      dev2: "",
      dev3: "",
      dev4: "",
      project_link: "https://github.com/babanigit/Weather-App-API",
      alt_name: "google",
      logo_path: "aws.png",
    },
    {
      title: " Football Updates - (in process...) ",
      language_used: "NextJs, ReactJs, Tailwind and Football-API",
      dev1: "~ Leveraged Football API integration to develop a sports platform that provided users with up-to-date match schedules, live scores, and player statistics, significantly enhancing user engagement and retention rates.",
      dev2: "~ Engineered a sleek and intuitive user interface, prioritizing simplicity and ease of navigation. This minimalist design approach ensures a seamless and user-friendly experience, enhancing accessibility for all users while maintaining a modern aesthetic appeal.",
      dev3: "",
      dev4: "",
      project_link: "https://github.com/babanigit/football-updates",
      alt_name: "google",
      logo_path: "aws.png",
    },
  
    
  ],
};
