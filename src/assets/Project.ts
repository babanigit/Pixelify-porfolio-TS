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
  page1: [
    {
      title: "User Authentication using Firebase",
      language_used: "ReactJs, TailwindCSS,and Firebase",
      dev1: "~ Implementing secure authentication functionalities using Firebase as the backend framework.",
      dev2: "~ By prioritizing security, usability, and scalability, we aim to create an authentication system that not only safeguards user data but also provides a seamless and intuitive experience for users accessing the application.",
      dev3: "",
      dev4: "",
      project_link: "https://github.com/babanigit/Login-Logout-Protection",
      alt_name: "google",
      logo_path: "aws.png",
    },
    {
      title: "User Authentication using MERN",
      language_used: "ReactJs, TailwindCSS, MongoDB, ExpressJs and NodeJS",
      dev1: "~ A project utilizing the MERN stack and Tailwind CSS, which incorporated user authentication functionalities for seamless login and logout experiences.",
      dev2: "~ This project effectively managed and stored user data, ensuring a secure and streamlined user experience.",
      dev3: "",
      dev4: "",
      project_link: "https://github.com/babanigit/mern-project-01",
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
  ],
  page2: [
    {
      title: " Contacts-and-Users Management ",
      language_used: "Express.js and Postman",
      dev1: "~ Developed a Contact Management System utilizing Express.js, MongoDB, and Postman to fetch and edit the contents. ",
      dev2: "~ Features include CRUD operations for contacts and users, incorporating user authentication and robust security measures",
      dev3: "",
      dev4: "",
      project_link: "https://github.com/babanigit/Contacts-and-Users-Manipulation",
      alt_name: "google",
      logo_path: "aws.png",
    },
  
    {
      title: " Football Updates ",
      language_used: "NextJs, ReactJs, Tailwind and Football-API",
      dev1: "~ Leveraged Football API integration to develop a sports platform that provided users with up-to-date match schedules, live scores, and player statistics, significantly enhancing user engagement and retention rates.",
      dev2: "~ Engineered a sleek and intuitive user interface, prioritizing simplicity and ease of navigation. This minimalist design approach ensures a seamless and user-friendly experience, enhancing accessibility for all users while maintaining a modern aesthetic appeal.",
      dev3: "",
      dev4: "",
      project_link: "https://github.com/babanigit/football-updates",
      alt_name: "google",
      logo_path: "aws.png",
    },
    {
      title: "Third Year Project",
      language_used: "ReactJs, TailwindCSS, and Firebase",
      dev1: "~ we are embarking on an exciting journey to harness the capabilities of Firebase, Tailwind CSS, and React to create a sophisticated web application.",
      dev2: "~ This endeavor represents a significant milestone in our academic journey, showcasing our ability to leverage cutting-edge technologies to build robust and user-friendly digital solutions.",
      dev3: "",
      dev4: "",
      project_link: "https://github.com/babanigit/thirdYear-react-firebase-tailwind",
      alt_name: "google",
      logo_path: "aws.png",
    },
  ],
};
