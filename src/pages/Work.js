import React, { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import NavPage from "../components/navigation/NavPage";
import ProjectDetails from "../components/ProjectDetails";

const projects = [
  {
    title: "CARGOPLUG",
    description:
      "At Cargoplug, I drive UI/UX design optimization and build our technology infrastructure from the ground up. Leading projects with HTML5, Tailwind CSS, JavaScript, Vue.js, and Nuxt.js, I enhance web applications, implement responsive designs, and foster collaboration to achieve exceptional results and drive business growth.",
    siteLink: "Visit Site",
    link: "https://www.getcargoplug.com/",
    collaborators: [
      "Samuel Anyaele (CTO)",
      "Samson Ojugo (Backend developer)",
      "Soliu Alley (Frontend developer)",
      "Idris (Frontend developer)",
    ],
    role: ["Frontend", "UI/UX"],
  },{title: "ARUNA",
  description:
    "Led the development of a comprehensive website for Aruna, a US-based investment company, covering design, frontend, backend, and domain management. I crafted a user-friendly interface in Figma, implemented responsive designs with Tailwind CSS and React, and built a streamlined communication management system using Node.js, enhancing Aruna's online presence.",
  siteLink: "Visit Site",
  link: "https://www.arunaip.com/",
  collaborators: [
    "Adekunle Praise (Backend developer)",
    "Akinola Alonge (Graphics Designer)",
  ],
  role: ["Frontend", "UI/UX"],
},   {
    title: "HAGE",
    description:
      "Spearheaded the frontend development for Hage's logistics platform, I built the user interface using React.js for dynamic functionality and Tailwind CSS for responsive design. I integrated Strapi as a headless CMS for enhanced content management, creating a comprehensive, user-friendly solution tailored to the logistics sector's needs.",
    siteLink: "Visit Site",  link: "https://www.tryhage.com/",
    collaborators: [
      "Tosin (UI/UX)",
      "Olalekan Sulaiman (Backend developer)",
    ],
    role: ["Frontend"],
  },  {
    title: "THRIFTVAULT",
    description:
      "Designed the UI/UX for ThriftVault, a web app revolutionizing group savings. Created an intuitive dashboard for joining saving cycles, tracking progress, and easy withdrawals. This project highlights my ability to simplify complex financial processes through engaging, functional designs that enhance user engagement and experience.",
    siteLink: "Visit Site", link: "https://www.ajothrift-959d57d1f68d.herokuapp.com/",
    collaborators: [
      "Adebayo Abayomi (Project Manager)",
      "Daniel (Backend developer)",
      "Mike O.S (Backend developer)",
      "Adedamola (Frontend/Mobile developer)",
      "Femi Fashola (Mobile developer)",
    ],
    role: ["UI/UX"],
  },
  {
    title: "JEKAEAT",
    description:
      "Led the UI/UX design for Jekaeat, a web app enhancing food accessibility in Nigeria. Developed an intuitive interface that connects restaurants and vendors to users in the North, simplifying meal kit and fresh produce ordering. This project showcases my commitment to user-centric design and supporting local economies through technology.",
    siteLink: "Visit Site", link:"https://play.google.com/store/apps/details?id=com.jekaeat.jekaeat",
    collaborators: [
      "Sodiq Olamilekan (Project Manager)",
      "Soliu Alley (Frontend/Backend developer)",
      "Ibrahim Bashir (Frontend developer)",
      "",
    ],
    role: ["UI/UX"],
  },
 
];

const Work = () => {
  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  return (
    <div className="bg-[#151118] min-h-screen ">
      <Navbar IsMenu={menu} onMenuToggle={menuHandler} />

      {!menu ? (
        <div className=" p-8 md:px-16 z-20">
          <div className="font-sub pb-4 border-b border-white text-white ">
            Featured works
          </div>

          {projects.map((project, index) => (
            <ProjectDetails
              key={index}
              title={project.title}
              description={project.description}
              siteLink={project.siteLink}
              collaborators={project.collaborators}
              role={project.role}
              link={project.link}
            />
          ))}
        </div>
      ) : (
        <NavPage onMenuToggle={menuHandler} />
      )}
    </div>
  );
};

export default Work;
